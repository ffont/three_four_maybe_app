const SOUND_ASSETS = [
    {key: "#", filename: "_hash", solenoids: [14, 16, 17, 18], solenoidsH: []},
    {key: "/", filename: "_slash", solenoids: [], solenoidsH: [7, 17, 18]},
    {key: ")", filename: "_cparent", solenoids: [], solenoidsH: [8, 17]},
    {key: "=", filename: "_equal", solenoids: [16], solenoidsH: [14]},
    {key: "(", filename: "_oparent", solenoids: [], solenoidsH: [7, 18]},
    {key: ",", filename: "_comma", solenoids: [14], solenoidsH: [8]},
    {key: ".", filename: "_dot", solenoids: [12], solenoidsH: [5]},
    {key: "*", filename: "_asterisk", solenoids: [], solenoidsH: [17, 18]},
    {key: ":", filename: "_colon", solenoids: [10, 11], solenoidsH: []},
    {key: "'", filename: "_quote", solenoids: [14], solenoidsH: [17]},
    {key: '"', filename: '_dquote', solenoids: [14], solenoidsH: [17]},
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
    {key: "a", filename: "A", solenoids: [11], solenoidsH: []},  
    {key: "A", filename: "AA", solenoids: [11], solenoidsH: []},
    {key: "b", filename: "B", solenoids: [2], solenoidsH: [4]},  
    {key: "B", filename: "BB", solenoids: [2, 4], solenoidsH: []},
    {key: "c", filename: "C", solenoids: [], solenoidsH: [4]},  
    {key: "C", filename: "CC", solenoids: [4], solenoidsH: []},
    {key: "d", filename: "D", solenoids: [2], solenoidsH: [5]},  
    {key: "D", filename: "DD", solenoids: [2, 5], solenoidsH: []},
    {key: "e", filename: "E", solenoids: [13], solenoidsH: []},  
    {key: "E", filename: "EE", solenoids: [13], solenoidsH: []},
    {key: "f", filename: "F", solenoids: [1, 2], solenoidsH: []},  
    {key: "F", filename: "FF", solenoids: [1, 2], solenoidsH: []},
    {key: "g", filename: "G", solenoids: [2], solenoidsH: [6]},  
    {key: "G", filename: "GG", solenoids: [2, 6], solenoidsH: []},
    {key: "h", filename: "H", solenoids: [1], solenoidsH: []},  
    {key: "H", filename: "HH", solenoids: [1], solenoidsH: []},
    {key: "i", filename: "I", solenoids: [12], solenoidsH: []},  
    {key: "I", filename: "II", solenoids: [12], solenoidsH: []},
    {key: "j", filename: "J", solenoids: [], solenoidsH: [4, 5]},  
    {key: "J", filename: "JJ", solenoids: [4, 5], solenoidsH: []},
    {key: "k", filename: "K", solenoids: [], solenoidsH: [4, 5]},  
    {key: "K", filename: "KK", solenoids: [4, 5], solenoidsH: []},
    {key: "l", filename: "L", solenoids: [2], solenoidsH: []},  
    {key: "L", filename: "LL", solenoids: [2], solenoidsH: []},
    {key: "m", filename: "M", solenoids: [], solenoidsH: [4, 6]},  
    {key: "M", filename: "MM", solenoids: [4, 6], solenoidsH: []},
    {key: "n", filename: "N", solenoids: [], solenoidsH: [5]},  
    {key: "N", filename: "NN", solenoids: [5], solenoidsH: []},
    {key: "o", filename: "O", solenoids: [13], solenoidsH: []},  
    {key: "O", filename: "OO", solenoids: [13], solenoidsH: []},
    {key: "p", filename: "P", solenoids: [], solenoidsH: [5, 6]},  
    {key: "P", filename: "PP", solenoids: [5, 6], solenoidsH: []},
    {key: "q", filename: "Q", solenoids: [1], solenoidsH: [3]},  
    {key: "Q", filename: "QQ", solenoids: [1, 3], solenoidsH: []},
    {key: "r", filename: "R", solenoids: [1], solenoidsH: []},  
    {key: "R", filename: "RR", solenoids: [1], solenoidsH: []},
    {key: "s", filename: "S", solenoids: [1], solenoidsH: [6]},  
    {key: "S", filename: "SS", solenoids: [1, 6], solenoidsH: []},
    {key: "t", filename: "T", solenoids: [], solenoidsH: [6]},
    {key: "T", filename: "TT", solenoids: [6], solenoidsH: []},
    {key: "u", filename: "U", solenoids: [15], solenoidsH: []}, 
    {key: "U", filename: "UU", solenoids: [15], solenoidsH: []},
    {key: "v", filename: "V", solenoids: [2], solenoidsH: [6]},  
    {key: "V", filename: "VV", solenoids: [2, 6], solenoidsH: []},
    {key: "w", filename: "W", solenoids: [1], solenoidsH: [5]}, 
    {key: "W", filename: "WW", solenoids: [1, 5], solenoidsH: []},
    {key: "x", filename: "X", solenoids: [1], solenoidsH: [4]}, 
    {key: "X", filename: "XX", solenoids: [1, 4], solenoidsH: []},
    {key: "y", filename: "Y", solenoids: [10], solenoidsH: []},
    {key: "Y", filename: "YY", solenoids: [10], solenoidsH: []},
    {key: "z", filename: "Z", solenoids: [], solenoidsH: [3, 5]},  
    {key: "Z", filename: "ZZ", solenoids: [3, 5], solenoidsH: []},
    {key: "!", filename: "_exclamation", solenoids: [7, 8, 9, 10], solenoidsH: []},
    {key: "%", filename: "_percent", solenoids: [], solenoidsH: [7, 8, 9]},
    {key: "&", filename: "_and", solenoids: [11, 12, 13], solenoidsH: []},
    {key: "?", filename: "_question", solenoids: [9, 10], solenoidsH: [15]},
    {key: "+", filename: "_plus", solenoids: [12, 13, 14], solenoidsH: []},
    {key: "-", filename: "_dash", solenoids: [], solenoidsH: [16, 17, 18]},
    {key: "_", filename: "_", solenoids: [], solenoidsH: [5, 6, 7, 8, 9]}
]

const SOUND_ASSETS_DEBUG = [
    {key: "0", filename: "0", solenoids: [7], solenoidsH: []},
    {key: "1", filename: "1", solenoids: [], solenoidsH: [8]},
    {key: "2", filename: "2", solenoids: [17], solenoidsH: []},
    {key: "3", filename: "3", solenoids: [13], solenoidsH: []},
    {key: "4", filename: "4", solenoids: [1], solenoidsH: []},
    {key: "5", filename: "5", solenoids: [5], solenoidsH: []},
    {key: "6", filename: "6", solenoids: [10], solenoidsH: []},
    {key: "7", filename: "7", solenoids: [], solenoidsH: [9]},
    {key: "8", filename: "8", solenoids: [12], solenoidsH: []},
    {key: "9", filename: "9", solenoids: [], solenoidsH: [5, 6]}
]   

const defaultTexts = [
    "An analogy to illustrate the concept of truth: imagine a white pixel on a black screen.",
    "We can indicate a point on the screen even if we don't know what black and white are.",
    "In order to be able to say that a point is black or white, I must first know when a point is called black and when white.",
    "three_four_maybe_app. Produced by NDC: Xavier Bonfill (artistic direction, sound design), Antonio Martinez (visual design), Frederic Font (app development).",
    "Based on the composition three_four_maybe by Xavier Bonfill, performed by NEKO3. Album out on dontlookbackrecords.com"
]

const FILE_EXTENSION = 'mp3';
const KEYS_WITH_SOUNDS = SOUND_ASSETS.map(el => el.key);
const VALID_KEYS = KEYS_WITH_SOUNDS + [' '];
var IS_PLAYING = false;
var CURRENT_PLAYING_TIMEOUT = undefined;
var TEXT_PLAYHEAD_POSITION = -1;
var IS_LOOPING = false;
var PASTE_PLAY_SPEED = 30;
var PASTE_NUM_LAST_CHARS = 10;
var SHOW_LOADING_SCREEN = true;
var BASE_AUDIO_URL = "https://raw.githubusercontent.com/ffont/three_four_maybe_app/main/static/audio/";
var BASE_AUDIO_URL_DEV = "static/audio/";
if ('ffont.github.io' !== window.location.hostname){ BASE_AUDIO_URL = BASE_AUDIO_URL_DEV;}

const placeholder = document.getElementById('placeholder');
const textInput = document.getElementById('textInput');
const rectaglesWrapper = document.getElementsByClassName('rectWrapper')[0];
const playButton = document.getElementById('playButton');
const loopButton = document.getElementById('loopButton');
const tempoSlider = document.getElementsByName('tempoSlider')[0];
const playButtonLabel = document.getElementById('playButtonLabel');
const loopButtonLabel = document.getElementById('loopButtonLabel');
const tempoSliderLabel = document.getElementById('selectLabel');
const menuToggle = document.getElementById('menuToggle');
const folderMenu = document.getElementById('folderMenu');
const menuCloseButton = document.getElementById('menuCloseButton');
const menuOptionsWrapper = document.getElementById('menuOptionsWrapper');
const loadingScreen = document.getElementById('loadingScreen')

document.addEventListener("DOMContentLoaded", function(event) { 
    init();
});

function init(){
    console.log('Running initialization');

    if (SHOW_LOADING_SCREEN){
        loadingScreen.classList.remove('menu-hidden');
    }
        
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

    if (IS_LOOPING){
        loopButton.className = 'loopIcon';
        loopButtonLabel.innerText = 'loop';
    } else {
        loopButton.className = 'oneTimeIcon';
        loopButtonLabel.innerText = 'one time';
    }

    // Init listeners
    textInput.addEventListener("keypress", function(event){
        const keyisValid = onKeyPress(event);
        if (!keyisValid){
            event.preventDefault();
        }
    });
    textInput.addEventListener("input", function(){
        updateDataUrlParam();
        if (textInput.innerText.length === 1){
            TEXT_PLAYHEAD_POSITION = -1;
            setInputTextAnimationPosition(TEXT_PLAYHEAD_POSITION);
        }
    })
    textInput.addEventListener("paste", function(e){
        e.preventDefault();
        let pasteText = (e.originalEvent || e).clipboardData.getData('text/plain');
        pasteText = parseText(pasteText);
        
        /*let offset = Cursor.getCurrentCursorPosition(textInput);
        const textBefore = textInput.innerText.substring(0, offset);
        const textAfter = textInput.innerText.substring(offset, text.length);
        textInput.innerText =  textBefore + pasteText + textAfter;
        Cursor.setCurrentCursorPosition(offset + pasteText.length, textInput);
        */
        document.execCommand('inserttext', false, pasteText);
    
        setTimeout(function(){
            if (!IS_PLAYING){
                playMultipleChars(pasteText);  // Play last chars if pasting
            }
        }, 20);
        return false;
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

    playButton.addEventListener("click", function(event){
        if (!playButton.classList.contains("disabled")){
            play();
        }
        
    });

    loopButton.addEventListener("click", function(event){
        IS_LOOPING = !IS_LOOPING;
        if (IS_LOOPING){
            loopButton.className = 'loopIcon';
            loopButtonLabel.innerText = 'loop';
        } else {
            loopButton.className = 'oneTimeIcon';
            loopButtonLabel.innerText = 'one time';
        }
    });

    //const clearButton = document.getElementById('clearButton');
    //clearButton.addEventListener("click", function(event){
    //    clear();
    //});

    tempoSlider.addEventListener("change", function(){
        updateDataUrlParam();
    })

    const shareButton = document.getElementById('shareButton');
    shareButton.addEventListener("click", function(event){
        share();
    });

    menuToggle.addEventListener("click", function(event){
        folderMenu.classList.remove("menu-hidden");
    });

    for (var i = 0; i < defaultTexts.length; i++) {
        var text = defaultTexts[i];
        var html = '<div class="menu-option">' + text + '</div>';
        menuOptionsWrapper.innerHTML += html;
    }

    const optionElements = document.getElementsByClassName("menu-option");
    for (var i = 0; i < optionElements.length; i++) {
        var option = optionElements[i];
        option.addEventListener("click", function(event){
            setText(event.target.innerText);
            if (IS_PLAYING){
                stop();
                play();
            } 
            folderMenu.classList.add("menu-hidden");
        });
    }

    menuCloseButton.addEventListener("click", function(event){
        folderMenu.classList.add("menu-hidden");
    });

    // Start focusing the text input
    //textInput.focus();
}

function setText(text){
    textInput.innerText = parseText(text);
    updateDataUrlParam();
    setPlaceholderIfNeeded();
}

function playMultipleChars(text){
    // Play the sounds for the last 5 characters very fast
    const lastChars = text.slice(-PASTE_NUM_LAST_CHARS);
    for (var i=0; i<lastChars.length; i++){
        const char = lastChars[i];
        setTimeout(function(){
            playSoundForKey(char);
            displayRectanglesPerKey(char);
        }, i * PASTE_PLAY_SPEED);
    }
    setTimeout( function(){
        displayRectanglesPerKey(undefined);
    }, (lastChars.length + 1) * PASTE_PLAY_SPEED);
}

function loadEncodedData(data){
    parsedData = JSON.parse(atob(decodeURIComponent(data)));
    if (parsedData.hasOwnProperty("text")){
        setText(parsedData.text);
    }
    if (parsedData.hasOwnProperty("tempo")){
        tempoSlider.value = parsedData.tempo;
    }
}

function generateEncodedData(){
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
        playButton.classList.remove("disabled");
		console.log('All sounds loaded!');
        loadingIndicator.innerHTML = "";
        if (SHOW_LOADING_SCREEN){
            loadingScreen.classList.add('menu-hidden');
        }
	}, function(nDownloaded, total){
        console.log(`Loading... [${nDownloaded}/${total}]`);
        loadingIndicator.innerHTML = `Loading... [${nDownloaded}/${total}]`;
        if (SHOW_LOADING_SCREEN){            
            loadingScreen.innerHTML = `<div style="margin-top:20%;">Loading... [${nDownloaded}/${total}]</div>`;
        }
    });
}

function onKeyPress(event){
    let keyCharacter = event.key; //.toUpperCase();
    if (keyHasSound(keyCharacter) && !IS_PLAYING){
        //console.log('Playing sound for: ', keyCharacter);
        playSoundForKey(keyCharacter);
        displayRectanglesPerKey(keyCharacter);
        setTimeout( function(){
            displayRectanglesPerKey(undefined);
        }, 100);
    } else {
        //console.log('No sound for: ', keyCharacter);
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
            foundUrl = `${BASE_AUDIO_URL}${el.filename}.${FILE_EXTENSION}`;
        }
    });
    return foundUrl;
}

function playSoundForKey(key){
    playSound(this['buf_' + key], 0);
}

function play(){
    if (IS_PLAYING){
        pause();
    } else {
        playButton.className = 'pauseIcon';
        playButtonLabel.innerText = 'pause'
        IS_PLAYING = true;
        playNextSound();
    }
}

function stop(){
    IS_PLAYING = false;
    TEXT_PLAYHEAD_POSITION = -1;
    setInputTextAnimationPosition(TEXT_PLAYHEAD_POSITION);
    clearTimeout(CURRENT_PLAYING_TIMEOUT);
    playButton.className = 'playIcon';
    playButtonLabel.innerText = 'play'
    updateRectangles();
}

function pause(){
    IS_PLAYING = false;
    clearTimeout(CURRENT_PLAYING_TIMEOUT);
    playButton.className = 'playIcon';
    playButtonLabel.innerText = 'play'
    updateRectangles();
}

function clear(){
    textInput.innerText = "";
    updateRectangles();
}

function parseText(text){
    // Remove unsupported characters
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
    return parsedCharacters.join('');
}

function playNextSound(){
    let text = textInput.innerText;
    if (TEXT_PLAYHEAD_POSITION == text.length){
        // We reached end of text, schedule next sound or stop
        if (IS_LOOPING) {
            TEXT_PLAYHEAD_POSITION = 0;
            CURRENT_PLAYING_TIMEOUT = setTimeout(() => {
                playNextSound(text);
            }, 0);
        } else {
            stop();
        }
    } else {
        // Play sound, set animtion
        let key = text[TEXT_PLAYHEAD_POSITION];
        if (key !== undefined){
            playSoundForKey(text[TEXT_PLAYHEAD_POSITION]);
        }
        setInputTextAnimationPosition(TEXT_PLAYHEAD_POSITION);
        updateRectangles();

        // Schedule next sound
        let bpm = tempoSlider.value;
        var timeIntervalMs = 1000.0 * 60.0 / (bpm * 4);
        TEXT_PLAYHEAD_POSITION += 1;
        CURRENT_PLAYING_TIMEOUT = setTimeout(() => {
            playNextSound();
        }, timeIntervalMs);
    }
}

function getRectaglesOnForKey(key){
    var rects = []
    SOUND_ASSETS.forEach(el => {
        if (el.key === key){
            rects = el.solenoids;
        }
    });
    return rects;
}

function getRectaglesOnHalfForKey(key){
    var rects = []
    SOUND_ASSETS.forEach(el => {
        if (el.key === key){
            rects = el.solenoidsH;
        }
    });
    return rects;
}

function displayRectanglesPerKey(key){
    var rectsOn = []
    var rectsOnH = []
    if (key !== undefined){
        rectsOn = getRectaglesOnForKey(key);
        rectsOnH = getRectaglesOnHalfForKey(key);
    }
    const rectDivs = rectaglesWrapper.getElementsByClassName('rect');
    for (var i=0; i<rectDivs.length; i++){
        const rect = rectDivs[i];
        if (rectsOn.includes(i + 1)){
            rect.className = 'rect on';
        } else if (rectsOnH.includes(i + 1)){
            rect.className = 'rect on half';
        } else {
            rect.className = 'rect off';
        }
    }
}

function updateRectangles(){
    const text = textInput.innerText;
    const key = text[TEXT_PLAYHEAD_POSITION];
    if (IS_PLAYING){
        displayRectanglesPerKey(key);
    } else {
        displayRectanglesPerKey(undefined); // To set them empty
    }
}

function share(){
    if (navigator.share) {
        navigator.share({
            title: 'three_four_maybe patch',
            url: window.location.href
          }).then(() => {
            
          }).catch(console.error);
    } else {
        const hiddenCopyInput = document.getElementById('hiddenCopyInput');
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
    if (textInput.innerText.length < 1){
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
    const textBefore = text.substring(0, currentPosition + 1);
    const textAfter = text.substring(currentPosition + 1, text.length);
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
