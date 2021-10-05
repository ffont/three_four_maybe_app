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
    {key: "*", filename: "_asterisk.wav"},
    {key: ":", filename: "_colon.wav"},
    {key: ".", filename: "_dot.wav"},
    {key: "/", filename: "_slash.wav"}
];
let VALID_KEYS = SOUND_ASSETS.map(el => el.key);

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
	loadSounds(this, soundMap, function(){
		console.log('All sounds loaded!');
	});
}

function onKeyPress(event){
    let keyCharacter = event.key.toUpperCase();
    let valid = keyIsValid(keyCharacter);
    if (valid){
        console.log('Playing sound for: ', keyCharacter);
        playSound(this[keyCharacter], 0);
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
