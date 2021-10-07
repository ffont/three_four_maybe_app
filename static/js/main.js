const SOUND_ASSETS = [
    {key: "#", filename: "hash"},
    {key: "'", filename: "'"},
    {key: "(", filename: "("},
    {key: ")", filename: ")"},
    {key: ",", filename: ","},
    {key: "0", filename: "0"},
    {key: "1", filename: "1"},
    {key: "2", filename: "2"},
    {key: "3", filename: "3"},
    {key: "4", filename: "4"},
    {key: "5", filename: "5"},
    {key: "6", filename: "6"},
    {key: "7", filename: "7"},
    {key: "8", filename: "8"},
    {key: "9", filename: "9"},
    {key: "=", filename: "="},
    {key: "A", filename: "A"},
    {key: "B", filename: "B"},
    {key: "C", filename: "C"},
    {key: "D", filename: "D"},
    {key: "E", filename: "E"},
    {key: "F", filename: "F"},
    {key: "G", filename: "G"},
    {key: "H", filename: "H"},
    {key: "I", filename: "I"},
    {key: "J", filename: "J"},
    {key: "K", filename: "K"},
    {key: "L", filename: "L"},
    {key: "M", filename: "M"},
    {key: "N", filename: "N"},
    {key: "O", filename: "O"},
    {key: "P", filename: "P"},
    {key: "Q", filename: "Q"},
    {key: "R", filename: "R"},
    {key: "S", filename: "S"},
    {key: "T", filename: "T"},
    {key: "U", filename: "U"},
    {key: "V", filename: "V"},
    {key: "W", filename: "W"},
    {key: "X", filename: "X"},
    {key: "Y", filename: "Y"},
    {key: "Z", filename: "Z"},
    {key: "*", filename: "asterisk"},
    {key: ":", filename: "colon"},
    {key: ".", filename: "dot"},
    {key: "/", filename: "slash"}
];
const FILE_EXTENSION = 'mp3';
const VALID_KEYS = SOUND_ASSETS.map(el => el.key);
var IS_PLAYING = false;
var CURRENT_PLAYING_TIMEOUT = undefined;
var TEXT_PLAYHEAD_POSITION = 0;

document.addEventListener("DOMContentLoaded", function(event) { 
    init();
});

function init(){
    console.log('Running initialization');
    
    // Load audio
    startAudioContext();
    loadSoundAssets();

    // Check if data query param is present, and load data if this is the case
    const urlParams = new URLSearchParams(window.location.search);
    const dataParam = urlParams.get('data');
    if (dataParam !== null){
        loadEncodedData(dataParam);
    }

    // Init listeners
    var textInput = document.getElementById('textInput');
    textInput.focus();
    textInput.addEventListener("keypress", function(event){
        onKeyPress(event);
    });
    textInput.addEventListener("input", function(){
        updateDataUrlParam();
    })

    const playButton = document.getElementById('playButton');
    playButton.addEventListener("click", function(event){
        play();
    });

    const clearButton = document.getElementById('clearButton');
    clearButton.addEventListener("click", function(event){
        clear();
    });

    const tempoSlider = document.getElementById('tempoSlider');
    tempoSlider.addEventListener("change", function(){
        updateDataUrlParam();
    })

    const shareButton = document.getElementById('shareButton');
    shareButton.addEventListener("click", function(event){
        share();
    });
}

function loadEncodedData(data){
    parsedData = JSON.parse(atob(decodeURIComponent(data)));
    const textInput = document.getElementById('textInput');
    const tempoSlider = document.getElementById('tempoSlider');
    if (parsedData.hasOwnProperty("text")){
        textInput.value = parsedData.text;
    }
    if (parsedData.hasOwnProperty("tempo")){
        tempoSlider.value = parsedData.tempo;
    }
}

function generateEncodedData(){
    const textInput = document.getElementById('textInput');
    const tempoSlider = document.getElementById('tempoSlider');
    return encodeURIComponent(btoa(JSON.stringify({
        text: textInput.value, 
        tempo: tempoSlider.value
    })))
}

function updateDataUrlParam(){
    const paramValue = generateEncodedData();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('data', paramValue);
    history.replaceState(null, null, "?"+urlParams.toString());
    const hiddenCopyInput = document.getElementById('hiddenCopyInput');
    hiddenCopyInput.value = window.location.href;
}

function loadSoundAssets(){
    console.log('Loading all sounds');
    var soundMap = {};
    SOUND_ASSETS.forEach(el => {
        let url = getSoundUrlFromKey(el.key);
        if (url !== undefined){
            soundMap['buf_' + el.key] = url;
        }
    });

    let loadingIndicator = document.getElementById("loadingIndicator");
	loadSounds(this, soundMap, function(){
		console.log('All sounds loaded!');
        loadingIndicator.innerHTML = "";
	}, function(nDownloaded, total){
        console.log(`Loading... [${nDownloaded}/${total}]`);
        loadingIndicator.innerHTML = `Loading... [${nDownloaded}/${total}]`;
    });
}

function onKeyPress(event){
    let keyCharacter = event.key.toUpperCase();
    let valid = keyIsValid(keyCharacter);
    if (valid){
        console.log('Playing sound for: ', keyCharacter);
        playSoundForKey(keyCharacter);
    } else {
        console.log('No sound for: ', keyCharacter);
    }

}

function keyIsValid(key){
    return VALID_KEYS.indexOf(key) > -1;
}

function getSoundUrlFromKey(key){
    var foundUrl = undefined;
    SOUND_ASSETS.forEach(el => {
        if (el.key === key){
            foundUrl = `static/audio/${el.filename}.${FILE_EXTENSION}`;
        }
    });
    return foundUrl;
}

function playSoundForKey(key){
    playSound(this['buf_' + key], 0);
}

function play(){
    if (IS_PLAYING){
        stop();
    } else {
        var textInput = document.getElementById('textInput');
        let text = textInput.value;
        var playButton = document.getElementById('playButton');
        playButton.value = "stop";
        IS_PLAYING = true;
        let parsedText = parseText(text);
        console.log("Playing parsed text: ", parsedText);
        playNextSound(parsedText);
    }
}

function stop(){
    IS_PLAYING = false;
    TEXT_PLAYHEAD_POSITION = 0;
    clearTimeout(CURRENT_PLAYING_TIMEOUT);
    var playButton = document.getElementById('playButton');
    playButton.value = "play";
}

function clear(){
    var textInput = document.getElementById('textInput');
    textInput.value = "";
}

function parseText(text){
    var parsedCharacters = [];
    for (var i = 0; i < text.length; i++) {
        let character = text.charAt(i).toUpperCase();
        let valid = keyIsValid(character);
        if (valid){
            parsedCharacters.push(character);
        } else {
            parsedCharacters.push(undefined); // Passing undefined will trigger silence
        }
    }
    return parsedCharacters;
}

function playNextSound(text){
    if (TEXT_PLAYHEAD_POSITION >= text.length){
        // We reached end of text, just stop
        stop();
    } else {
        // Play sound and schedule next one
        let tempoSlider = document.getElementById('tempoSlider');
        let bpm = tempoSlider.value;
        var timeIntervalMs = 1000.0 * 60.0 / (bpm * 4);
        let key = text[TEXT_PLAYHEAD_POSITION];
        if (key !== undefined){
            playSoundForKey(text[TEXT_PLAYHEAD_POSITION]);
        }
        TEXT_PLAYHEAD_POSITION += 1;
        CURRENT_PLAYING_TIMEOUT = setTimeout(() => {
            playNextSound(text);
        }, timeIntervalMs);
    }
}

function share(){
    const hiddenCopyInput = document.getElementById('hiddenCopyInput');
    if ((navigator.share) && (window.mobileAndTabletCheck())) {
            navigator.share({
                title: 'Three Forur Maybe - patch URL',
                text: 'Three Forur Maybe - patch URL',
                url: window.location.href
            }).then(() => {
                // Do nothing
            })
            .catch(console.error);
    } else {
        hiddenCopyInput.value = window.location.href;
        hiddenCopyInput.select(); 
        hiddenCopyInput.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(hiddenCopyInput.value);
        alert("Shareable URL copied to clipboard!");
    }
}

window.mobileAndTabletCheck = function() {
    // FROM https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

