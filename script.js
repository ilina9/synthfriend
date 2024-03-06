

function playSound(note){

    var audio = new Audio("sounds/" + note + ".ogg");
    audio.play();

}

document.addEventListener('keydown', function(event) {
    const key = event.key.toUpperCase(); 
    const note = getKeyNote(key); 
    if (note) {
        playSound(note); 
    }
});

function getKeyNote(key) {
    switch (key) {
        case 'Z':
            return 'C';
        case 'S':
            return 'Cs';
        case 'X':
            return 'D';
        case 'D':
            return 'Ds';
        case 'C':
            return 'E';
        case 'V':
            return 'F';
        case 'G':
            return 'Fs';
        case 'B':
            return 'G';
        case 'H':
            return 'Gs';
        case 'N':
            return 'A';
        case 'J':
            return 'As';
        case 'M':
            return 'B';
        case 'K':
            return 'C5';
        default:
            return null;
    }
}