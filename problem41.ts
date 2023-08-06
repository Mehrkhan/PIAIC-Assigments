
function shoMagicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function makGreat(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `${magicians[i]} the Great`;
    }
}

let mgicians: string[] = ['Harry Houdini', 'Penn & Teller'];
makeGreat(magicians);
showMagicians(magicians);