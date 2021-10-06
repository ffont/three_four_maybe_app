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

    // Check if text query param is present, and store if this is the case
    const urlParams = new URLSearchParams(window.location.search);
    const textParam = urlParams.get('text');

    // Init listeners and set text from query parameter if appropriate
    var textInput = document.getElementById('textInput');
    if (textParam !== undefined){
        textInput.value = textParam;
    }
    textInput.focus();
    textInput.addEventListener("keypress", function(event){
        onKeyPress(event);
    });
    var playButton = document.getElementById('playButton');
    playButton.addEventListener("click", function(event){
        play();
    });

}

function loadSoundAssets(){
    console.log('Loading all sounds');
    var soundMap = {};
    SOUND_ASSETS.forEach(el => {
        let url = getSoundUrlFromKey(el.key);
        if (url !== undefined){
            soundMap[el.key] = url;
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
    playSound(this[key], 0);
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
