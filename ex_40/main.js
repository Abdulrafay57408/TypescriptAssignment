function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album["tracks"] = tracks;
    }
    return album;
}
var album1 = make_album("Pink Floyd", "The Dark Side of the Moon");
var album2 = make_album("The Beatles", "Abbey Road");
var album3 = make_album("Adele", "25", 11);
console.log(album1);
console.log(album2);
console.log(album3);
