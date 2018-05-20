var inputElements = document.getElementsByTagName('input');
var micIconSrc = '/assets/img/mic-icon.png';

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

    return 'gal galg alga l';
}
