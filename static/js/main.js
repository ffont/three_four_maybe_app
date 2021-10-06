let SOUND_ASSETS = [
    {key: "#", filename: "hash.wav"},
    {key: "'", filename: "'.wav"},
    {key: "(", filename: "(.wav"},
    {key: ")", filename: ").wav"},
    {key: ",", filename: ",.wav"},
    {key: "0", filename: "0.wav"},
    {key: "1", filename: "1.wav"},
    {key: "2", filename: "2.wav"},
    {key: "3", filename: "3.wav"},
    {key: "4", filename: "4.wav"},
    {key: "5", filename: "5.wav"},
    {key: "6", filename: "6.wav"},
    {key: "7", filename: "7.wav"},
    {key: "8", filename: "8.wav"},
    {key: "9", filename: "9.wav"},
    {key: "=", filename: "=.wav"},
    {key: "A", filename: "A.wav"},
    {key: "B", filename: "B.wav"},
    {key: "C", filename: "C.wav"},
    {key: "D", filename: "D.wav"},
    {key: "E", filename: "E.wav"},
    {key: "F", filename: "F.wav"},
    {key: "G", filename: "G.wav"},
    {key: "H", filename: "H.wav"},
    {key: "I", filename: "I.wav"},
    {key: "J", filename: "J.wav"},
    {key: "K", filename: "K.wav"},
    {key: "L", filename: "L.wav"},
    {key: "M", filename: "M.wav"},
    {key: "N", filename: "N.wav"},
    {key: "O", filename: "O.wav"},
    {key: "P", filename: "P.wav"},
    {key: "Q", filename: "Q.wav"},
    {key: "R", filename: "R.wav"},
    {key: "S", filename: "S.wav"},
    {key: "T", filename: "T.wav"},
    {key: "U", filename: "U.wav"},
    {key: "V", filename: "V.wav"},
    {key: "W", filename: "W.wav"},
    {key: "X", filename: "X.wav"},
    {key: "Y", filename: "Y.wav"},
    {key: "Z", filename: "Z.wav"},
    {key: "*", filename: "asterisk.wav"},
    {key: ":", filename: "colon.wav"},
    {key: ".", filename: "dot.wav"},
    {key: "/", filename: "slash.wav"}
];
let VALID_KEYS = SOUND_ASSETS.map(el => el.key);
var IS_PLAYING = false;
var CURRENT_PLAYING_TIMEOUT = undefined;
var TEXT_PLAYHEAD_POSITION = 0;

document.addEventListener("DOMContentLoaded", function(event) { 
    init();
});

function init(){
    console.log('Running initialization');
    startAudioContext();
    loadSoundAssets();

    var textInput = document.getElementById('textInput');
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
            foundUrl = `static/audio/${el.filename}`;
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
