
//Bestemmer/laver obejekter 
function Album(artistName, albumName, trackList, productionYear) {
    this.artistName = artistName;
    this.albumName = albumName;
    this.trackList = trackList;
    this.productionYear = productionYear;
}

//Henter data fra albums.json fil vha. fetch metode 
    fetch("albums.json")
// Konverter JSON til JS-objekter
    .then(response => response.json()) 
    .then(albums => {
//Bestemmer en variabel til min id
        let table = document.getElementById("albumTable");
            albums.forEach(album => {
                let albumDiv = document.createElement("tr");
//henter data vha. string interpolation/template variables
                    albumDiv.innerHTML = `
                    <td>${album.artistName}</td>
                    <td>${album.albumName}</td>
                    <td>${album.productionYear}</td>
                    <td>${album.trackList.length}</td>
                    `;
//tilføjer de nye værdier til tabellen
                    table.appendChild(albumDiv);
                });
            })
// Jeg så en video, som hjælp til at lave tabellen

      
        
         
        



 
  

  

  

  


 
