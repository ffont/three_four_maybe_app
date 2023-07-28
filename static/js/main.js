const SOUND_ASSETS = [
    {key: "#", filename: "hash", solenoids: [14, 16, 17, 18], solenoidsH: []},
    {key: "/", filename: "slash", solenoids: [], solenoidsH: [7, 17, 18]},
    {key: ")", filename: ")", solenoids: [], solenoidsH: [8, 17]},
    {key: "=", filename: "=", solenoids: [16], solenoidsH: [14]},
    {key: "(", filename: "(", solenoids: [], solenoidsH: [7, 18]},
    {key: ",", filename: ",", solenoids: [14], solenoidsH: [8]},
    {key: ".", filename: "dot", solenoids: [12], solenoidsH: [5]},
    {key: "*", filename: "asterisk", solenoids: [], solenoidsH: [17, 18]},
    {key: ":", filename: "colon", solenoids: [10, 11], solenoidsH: []},
    {key: "'", filename: "'", solenoids: [14], solenoidsH: [17]},
    {key: '"', filename: "0", solenoids: [14], solenoidsH: [17]},  // MISSING, using placeholder
    {key: "0", filename: "0", solenoids: [7], solenoidsH: []},
    {key: "1", filename: "1", solenoids: [], solenoidsH: [8]},
    {key: "2", filename: "2", solenoids: [17], solenoidsH: []},
    {key: "3", filename: "3", solenoids: [13], solenoidsH: []},
    {key: "4", filename: "4", solenoids: [1], solenoidsH: []},
    {key: "5", filename: "5", solenoids: [5], solenoidsH: []},
    {key: "6", filename: "6", solenoids: [10], solenoidsH: []},
    {key: "7", filename: "7", solenoids: [], solenoidsH: [9]},
    {key: "8", filename: "8", solenoids: [12], solenoidsH: []},
    {key: "9", filename: "9", solenoids: [], solenoidsH: [5, 6]},
    {key: "a", filename: "A", solenoids: [11], solenoidsH: []},  // MISSING, using placeholder
    {key: "A", filename: "A", solenoids: [11], solenoidsH: []},
    {key: "b", filename: "B", solenoids: [2], solenoidsH: [4]},  // MISSING, using placeholder
    {key: "B", filename: "B", solenoids: [2, 4], solenoidsH: []},
    {key: "c", filename: "C", solenoids: [], solenoidsH: [4]},  // MISSING, using placeholder
    {key: "C", filename: "C", solenoids: [4], solenoidsH: []},
    {key: "d", filename: "D", solenoids: [2], solenoidsH: [5]},  // MISSING, using placeholder
    {key: "D", filename: "D", solenoids: [2, 5], solenoidsH: []},
    {key: "e", filename: "E", solenoids: [13], solenoidsH: []},  // MISSING, using placeholder
    {key: "E", filename: "E", solenoids: [13], solenoidsH: []},
    {key: "f", filename: "F", solenoids: [1, 2], solenoidsH: []},  // MISSING, using placeholder
    {key: "F", filename: "F", solenoids: [1, 2], solenoidsH: []},
    {key: "g", filename: "G", solenoids: [2], solenoidsH: [6]},  // MISSING, using placeholder
    {key: "G", filename: "G", solenoids: [2, 6], solenoidsH: []},
    {key: "h", filename: "H", solenoids: [1], solenoidsH: []},  // MISSING, using placeholder
    {key: "H", filename: "H", solenoids: [1], solenoidsH: []},
    {key: "i", filename: "I", solenoids: [12], solenoidsH: []},  // MISSING, using placeholder
    {key: "I", filename: "I", solenoids: [12], solenoidsH: []},
    {key: "j", filename: "J", solenoids: [], solenoidsH: [4, 5]},  // MISSING, using placeholder
    {key: "J", filename: "J", solenoids: [4, 5], solenoidsH: []},
    {key: "k", filename: "K", solenoids: [], solenoidsH: [4, 5]},  // MISSING, using placeholder
    {key: "K", filename: "K", solenoids: [4, 5], solenoidsH: []},
    {key: "l", filename: "L", solenoids: [2], solenoidsH: []},  // MISSING, using placeholder
    {key: "L", filename: "L", solenoids: [2], solenoidsH: []},
    {key: "m", filename: "M", solenoids: [], solenoidsH: [4, 6]},  // MISSING, using placeholder
    {key: "M", filename: "M", solenoids: [4, 6], solenoidsH: []},
    {key: "n", filename: "N", solenoids: [], solenoidsH: [5]},  // MISSING, using placeholder
    {key: "N", filename: "N", solenoids: [5], solenoidsH: []},
    {key: "o", filename: "O", solenoids: [13], solenoidsH: []},  // MISSING, using placeholder
    {key: "O", filename: "O", solenoids: [13], solenoidsH: []},
    {key: "p", filename: "P", solenoids: [], solenoidsH: [5, 6]},  // MISSING, using placeholder
    {key: "P", filename: "P", solenoids: [5, 6], solenoidsH: []},
    {key: "q", filename: "Q", solenoids: [1], solenoidsH: [3]},  // MISSING, using placeholder
    {key: "Q", filename: "Q", solenoids: [1, 3], solenoidsH: []},
    {key: "r", filename: "R", solenoids: [1], solenoidsH: []},  // MISSING, using placeholder
    {key: "R", filename: "R", solenoids: [1], solenoidsH: []},
    {key: "s", filename: "S", solenoids: [1], solenoidsH: [6]},  // MISSING, using placeholder
    {key: "S", filename: "S", solenoids: [1, 6], solenoidsH: []},
    {key: "t", filename: "T", solenoids: [], solenoidsH: [6]},  // MISSING, using placeholder
    {key: "T", filename: "T", solenoids: [6], solenoidsH: []},
    {key: "u", filename: "U", solenoids: [15], solenoidsH: []},  // MISSING, using placeholder
    {key: "U", filename: "U", solenoids: [15], solenoidsH: []},
    {key: "v", filename: "V", solenoids: [2], solenoidsH: [6]},  // MISSING, using placeholder
    {key: "V", filename: "V", solenoids: [2, 6], solenoidsH: []},
    {key: "w", filename: "W", solenoids: [1], solenoidsH: [5]},  // MISSING, using placeholder
    {key: "W", filename: "W", solenoids: [1, 5], solenoidsH: []},
    {key: "x", filename: "X", solenoids: [1], solenoidsH: [4]},  // MISSING, using placeholder
    {key: "X", filename: "X", solenoids: [1, 4], solenoidsH: []},
    {key: "y", filename: "Y", solenoids: [10], solenoidsH: []},  // MISSING, using placeholder
    {key: "Y", filename: "Y", solenoids: [10], solenoidsH: []},
    {key: "z", filename: "Z", solenoids: [], solenoidsH: [3, 5]},  // MISSING, using placeholder
    {key: "Z", filename: "Z", solenoids: [3, 5], solenoidsH: []}
]

const FILE_EXTENSION = 'mp3';
const KEYS_WITH_SOUNDS = SOUND_ASSETS.map(el => el.key);
const VALID_KEYS = KEYS_WITH_SOUNDS + [' '];
var IS_PLAYING = false;
var CURRENT_PLAYING_TIMEOUT = undefined;
var TEXT_PLAYHEAD_POSITION = 0;
var IS_LOOPING = true;

const placeholder = document.getElementById('placeholder');
const textInput = document.getElementById('textInput');
const rectaglesWrapper = document.getElementsByClassName('rectWrapper')[0];

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

    setPlaceholderIfNeeded();

    // Init listeners
    textInput.addEventListener("keypress", function(event){
        const keyisValid = onKeyPress(event);
        if (!keyisValid){
            event.preventDefault();
        }
    });
    textInput.addEventListener("input", function(){
        updateDataUrlParam();
    })
    textInput.addEventListener("focusin", function(){
        placeholder.style.display = "none";
    });
    textInput.addEventListener("focusout", function(){
        setPlaceholderIfNeeded();
    });

    placeholder.addEventListener("click", function(){
        textInput.focus();
    });

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

    // Start focusing the text input
    textInput.focus();
}

function loadEncodedData(data){
    parsedData = JSON.parse(atob(decodeURIComponent(data)));
    const tempoSlider = document.getElementById('tempoSlider');
    if (parsedData.hasOwnProperty("text")){
        textInput.innerText = parsedData.text;
    }
    if (parsedData.hasOwnProperty("tempo")){
        tempoSlider.value = parsedData.tempo;
    }
}

function generateEncodedData(){
    const tempoSlider = document.getElementById('tempoSlider');
    return encodeURIComponent(btoa(JSON.stringify({
        text: textInput.innerText, 
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
    let keyCharacter = event.key; //.toUpperCase();
    if (keyHasSound(keyCharacter)){
        console.log('Playing sound for: ', keyCharacter);
        playSoundForKey(keyCharacter);
    } else {
        console.log('No sound for: ', keyCharacter);
    }
    return keyIsValid(keyCharacter);
}

function keyIsValid(key){
    return VALID_KEYS.indexOf(key) > -1;
}

function keyHasSound(key){
    return KEYS_WITH_SOUNDS.indexOf(key) > -1;
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
        var playButton = document.getElementById('playButton');
        playButton.value = "stop";
        IS_PLAYING = true;
        playNextSound();
    }
}

function stop(){
    IS_PLAYING = false;
    TEXT_PLAYHEAD_POSITION = 0;
    setInputTextAnimationPosition(0);
    updateRectangles();
    clearTimeout(CURRENT_PLAYING_TIMEOUT);
    var playButton = document.getElementById('playButton');
    playButton.value = "play";
}

function clear(){
    textInput.innerText = "";
}

function parseText(text){
    var parsedCharacters = [];
    for (var i = 0; i < text.length; i++) {
        let character = text.charAt(i); //.toUpperCase();
        let valid = keyIsValid(character);
        if (valid){
            parsedCharacters.push(character);
        } else {
            parsedCharacters.push(undefined); // Passing undefined will trigger silence
        }
    }
    return parsedCharacters;
}

function playNextSound(){
    let text = parseText(textInput.innerText);  // This parse here won't be needed if done on edit events
    if (TEXT_PLAYHEAD_POSITION > text.length){
        // We reached end of text, loop or stop
        if (IS_LOOPING) {
            TEXT_PLAYHEAD_POSITION = 0;
            CURRENT_PLAYING_TIMEOUT = setTimeout(() => {
                playNextSound(text);
            }, 0);
        } else {
            stop();
        }
    } else {
        // Play sound, set animtion and schedule next one
        let tempoSlider = document.getElementById('tempoSlider');
        let bpm = tempoSlider.value;
        var timeIntervalMs = 1000.0 * 60.0 / (bpm * 4);
        let key = text[TEXT_PLAYHEAD_POSITION];
        if (key !== undefined){
            playSoundForKey(text[TEXT_PLAYHEAD_POSITION]);
        }
        setInputTextAnimationPosition(TEXT_PLAYHEAD_POSITION);
        updateRectangles();
        TEXT_PLAYHEAD_POSITION += 1;
        CURRENT_PLAYING_TIMEOUT = setTimeout(() => {
            playNextSound();
        }, timeIntervalMs);
    }
}

function getRectaglesOnForKey(key){
    SOUND_ASSETS.forEach(el => {
        if (el.key === key){
            console.log("HEY")
            return el.solenoids;
        }
    });
    return [];
}

function getRectaglesOnHalfForKey(key){
    SOUND_ASSETS.forEach(el => {
        if (el.key === key){
            return el.solenoidsH;
        }
    });
    return [];
}

function updateRectangles(){
    let text = parseText(textInput.innerText);  // This parse here won't be needed if done on edit events
    var rectsOn = []
    if (IS_PLAYING){
        rectsOn = getRectaglesOnForKey(text[TEXT_PLAYHEAD_POSITION]);
        rectsOnH = getRectaglesOnHalfForKey(text[TEXT_PLAYHEAD_POSITION]);
    }
    for (i=1; i==rectaglesWrapper.childElementCount; i++){
        const rect = rectaglesWrapper.children[i - 1];
        if (rectsOn.includes(i)){
            rect.className = 'rect on';
        } else if (rectsOnH.includes(i)){
            rect.className = 'rect on half';
        } else {
            rect.className = 'rect off';
        }
    }        
}

function share(){
    const hiddenCopyInput = document.getElementById('hiddenCopyInput');
    if ((navigator.share) && (window.mobileAndTabletCheck())) {
            navigator.share({
                title: 'Three Forur Maybe App Patch',
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
    return deviceType() !== "desktop"
};

const deviceType = () => {
    // Form https://attacomsian.com/blog/javascript-detect-mobile-device
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
};

const setPlaceholderIfNeeded = () => {
    if (textInput.innerText.length <= 1){
        placeholder.style.display = 'block';
    } else {
        placeholder.style.display = 'none';
    }
}

const setInputTextAnimationPosition = (currentPosition) => {
    const text = textInput.innerText;
    if (currentPosition > text.length){
        currentPosition = 0;
    }
    let offset = Cursor.getCurrentCursorPosition(textInput);
    const textBefore = text.substring(0, currentPosition);
    const textAfter = text.substring(currentPosition, text.length);
    textInput.innerHTML =  '<span class="textAnimated">' + textBefore + '</span>' + textAfter;
    Cursor.setCurrentCursorPosition(offset, textInput);
    //textInput.focus(); // no need for that?
}


// Code for getting/setting cursor position in contenteditable div
// Credit to Liam (Stack Overflow)
// https://stackoverflow.com/a/41034697/3480193
class Cursor {
    static getCurrentCursorPosition(parentElement) {
        var selection = window.getSelection(),
            charCount = -1,
            node;
        
        if (selection.focusNode) {
            if (Cursor._isChildOf(selection.focusNode, parentElement)) {
                node = selection.focusNode; 
                charCount = selection.focusOffset;
                
                while (node) {
                    if (node === parentElement) {
                        break;
                    }

                    if (node.previousSibling) {
                        node = node.previousSibling;
                        charCount += node.textContent.length;
                    } else {
                        node = node.parentNode;
                        if (node === null) {
                            break;
                        }
                    }
                }
            }
        }
        
        return charCount;
    }
    
    static setCurrentCursorPosition(chars, element) {
        if (chars >= 0) {
            var selection = window.getSelection();
            
            let range = Cursor._createRange(element, { count: chars });

            if (range) {
                range.collapse(false);
                selection.removeAllRanges();
                selection.addRange(range);
            }
        }
    }
    
    static _createRange(node, chars, range) {
        if (!range) {
            range = document.createRange()
            range.selectNode(node);
            range.setStart(node, 0);
        }

        if (chars.count === 0) {
            range.setEnd(node, chars.count);
        } else if (node && chars.count >0) {
            if (node.nodeType === Node.TEXT_NODE) {
                if (node.textContent.length < chars.count) {
                    chars.count -= node.textContent.length;
                } else {
                    range.setEnd(node, chars.count);
                    chars.count = 0;
                }
            } else {
                for (var lp = 0; lp < node.childNodes.length; lp++) {
                    range = Cursor._createRange(node.childNodes[lp], chars, range);

                    if (chars.count === 0) {
                    break;
                    }
                }
            }
        } 

        return range;
    }
    
    static _isChildOf(node, parentElement) {
        while (node !== null) {
            if (node === parentElement) {
                return true;
            }
            node = node.parentNode;
        }

        return false;
    }
}