      // In the following example, markers appear when the user clicks on the map.
      // Each marker is labeled with a single alphabetical character.
      // import {GPS_posi} from  "firebase_data.js";
 
      
      function initMap() {

        const Hsinchu = { lat: 24.7961, lng: 120.9967 };

        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 12,
          center: Hsinchu,
        });
        addMarker(Hsinchu, map);


        // for(var i=0; i<100; i++){

        //     addMarker(tmp, map);
        // }
        // // This event listener calls addMarker() when the map is clicked.
   

        // Add a marker at the center of the map.
          var db = firebase.firestore();
         
          db.collection('GPS').onSnapshot((snapshot) => {
        
            console.log("read data")
            snapshot.forEach((snap)=>{
              var lat_data=snap.data().lat
              var lon_data=snap.data().lon
              var GPS_posi={lat:lat_data,lng:lon_data}
              var tmp = GPS_posi;
              console.log("add +",tmp)
              addMarker(tmp, map);
            })
        }, (error) => {
            console.log(error.message)
        });
        
      }

      // Adds a marker to the map.
      function addMarker(location, map) {
        const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let labelIndex = 0;
        // Add the marker at the clicked location, and add the next-available label
        // from the array of alphabetical characters.
        new google.maps.Marker({
          position: location,
          label: labels[labelIndex++ % labels.length],
          map: map,
        });
      }

