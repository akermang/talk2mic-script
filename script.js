var inputElements = document.getElementsByTagName('input');
var micIconSrc = '/assets/img/mic-icon.png';

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
// var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
var recognition = new SpeechRecognition();
//recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

init(inputElements);

function init(inputs) {
    for(var i = 0; i < inputs.length; i++) {
        wrapInput(inputs[i]);
    }
}

function wrapInput(inputElement) {
    if(!inputElement.id) {
        setUUID(inputElement);
    }
    attachMic(inputElement);
}

function setUUID(inputElement) {
    inputElement.id = 'some-uniq-uuid';
}

function attachMic(inputElement) {
    console.log(inputElement)
    var mic = document.createElement('img');
    mic.src = micIconSrc;
    mic.width = 20;
    mic.addEventListener('click', onMicClick.bind(event, inputElement));
    insertAfter(mic, inputElement);
}

function onMicClick(inputElement, event) {
    inputElement.value = getTranscription();
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function getTranscription() {

    // gals homework !!!!!!!!!!!!!!!
    // value returned from this funciton
    // will end up in the input value

    // voice to text

    recognition.start();
    console.log('Recording!!!');
    recognition.onresult = function(event) {
        console.log(event.results)
        let val = event.results.transcript
    }
    recognition.onspeechend = function() {
        recognition.stop();
      }

    return 'gal galg alga l';
}
