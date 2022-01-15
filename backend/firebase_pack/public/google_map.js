      // In the following example, markers appear when the user clicks on the map.
      // Each marker is labeled with a single alphabetical character.
      // import {GPS_posi} from  "firebase_data.js";
 
      
      function initMap() {

        const Hsinchu = { lat: 24.795198, lng: 120.994439 };

        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 12,
          center: Hsinchu,
        });
        // var tmp = GPS_posi;

        // for(var i=0; i<100; i++){

        //     addMarker(tmp, map);
        // }
        // // This event listener calls addMarker() when the map is clicked.
        // google.maps.event.addListener(map, "click", (event) => {
        //   addMarker(event.latLng, map);
        // });

        // Add a marker at the center of the map.
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

