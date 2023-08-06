
interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function makeAlbum(artist: string, title: string, tracks?: number): Album {
    let album: Album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

console.log(makeAlbum('Pink Floyd', 'The Dark Side of the Moon'));
console.log(makeAlbum('Led Zeppelin', 'IV'));
console.log(makeAlbum('The Beatles', 'Abbey Road', 17));