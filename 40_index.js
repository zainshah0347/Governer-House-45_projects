// Album
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title, tracks: tracks };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Call the function to create three different album objects
var album1 = make_album("Taylor Swift", "1989");
var album2 = make_album("Ed Sheeran", "Divide", 16);
var album3 = make_album("Beyonce", "Lemonade");
// Print each album object
console.log(album1);
console.log(album2);
console.log(album3);
