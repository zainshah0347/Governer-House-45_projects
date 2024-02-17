// Album

function make_album(artist: string, title: string, tracks?: number): 
    { artist: string, title: string, tracks?: number }
 {
    let album = { artist: artist, title: title, tracks };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Call the function to create three different album objects
let album1 = make_album("Taylor Swift", "1989");
let album2 = make_album("Ed Sheeran", "Divide", 16);
let album3 = make_album("Beyonce", "Lemonade");

// Print each album object
console.log(album1);
console.log(album2);
console.log(album3);
