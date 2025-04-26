// laver en constructor funktion til at oprette Album-objekter
function Album(artistName, albumName, trackListLength, productionYear) {
    this.artistName = artistName;           
    this.albumName = albumName;            
    this.trackListLength = trackListLength; 
    this.productionYear = productionYear;   
}

// lavet en fucktion til at indlæse data fra json fil 
function loadAlbums() {
// Henter data fra "albums.json" ved hjælp af fetch-funktionen
fetchContent("albums.json")
.then(albums => {
// Opretter Album-objekter fra de hentede data
 const albumObjects = albums.map(album =>
                new Album(
                    album.artistName,
                    album.albumName,
                    album.trackList.length,
                    album.productionYear
                )
            );

// Finder tabellen med id albumTable
            const table = document.getElementById("albumTable");

// tilføjer en række til tabellen og henter data 
            albumObjects.forEach(album => {
                const row = document.createElement("tr"); 
                row.innerHTML = `
                    <td>${album.artistName}</td>          
                    <td>${album.albumName}</td>           
                    <td>${album.productionYear}</td>      
                    <td>${album.trackListLength}</td>     
                `;
                table.appendChild(row); // Tilføjer rækken til tabellen
            });
        })
// vise fejl, hvis der bliver fundet fejl
        .catch(error => {
            console.error("fejl", error);
        });
}

//A magic spell - memorise it and use it EXACTLY like this :)
async function fetchContent(url) {
    let request = await fetch(url);        
    let json = await request.json();       
    return json;                           
}

// Kører funktionen
loadAlbums();
   
//Jeg fandt en video, der hjalp med at lave lidt af det 
        



 
  

  

  

  


 
