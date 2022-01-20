

var path =[];
      function initMap() {

        const Hsinchu = { lat: 24.7961, lng: 120.9967 };


        // path.push(Hsinchu);
        // path.push({ lat: 24.8061, lng: 120.9967 });
        const infoWindow = new google.maps.InfoWindow();
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 15,
          center: Hsinchu,
        });
        // addMarker(Hsinchu, map, 3, infoWindow, "123");

        // Add a marker at the center of the map.
          var db = firebase.firestore();
          
          
          db.collection('GPS').onSnapshot((snapshot) => {
      
            console.log("read GPS data")
            snapshot.forEach((snap)=>{
              var lat_data=snap.data().lat
              var lon_data=snap.data().lon
              var GPS_posi={lat:lat_data,lng:lon_data}
              var timestamp = snap.data().timestamp
              
              addMarker(GPS_posi, map, getRandom(1,7), infoWindow, timestamp.toDate().toString());
              addPath(map,GPS_posi);
              
            })
        }, 
          (error) => {
            console.log(error.message)
        });
        

      }
      
      // Adds a marker to the map.
      function addMarker(location, map, repetition, infoWindow, text) {
        const white = {
            path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
            fillColor: "#ffffff",
            fillOpacity: 0.6,
            strokeWeight: 0,
            rotation: 0,
            scale: 2,
            anchor: new google.maps.Point(15, 30),
          };
        const yellow = {
            path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
            fillColor: "yellow",
            fillOpacity: 0.6,
            strokeWeight: 0,
            rotation: 0,
            scale: 2,
            anchor: new google.maps.Point(15, 30),
          };
        const red = {
            path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
            fillColor: "red",
            fillOpacity: 0.6,
            strokeWeight: 0,
            rotation: 0,
            scale: 2,
            anchor: new google.maps.Point(15, 30),
          };
        var svgMarker = white;

        if(repetition<=1) svgMarker = white;
        else if(repetition<=5 ) svgMarker = yellow;
        else svgMarker = red;

        const marker = new google.maps.Marker({
          position: location,
          map: map,
          icon: svgMarker,
          title: text,
        });

        marker.addListener("click", () => {
          infoWindow.close();
          infoWindow.setContent(marker.getTitle());
          infoWindow.open(marker.getMap(), marker);
        });

      }
      function addPath(map,GPS)
      {
        path.push(GPS);
        console.log("path=", path)   
        //*****************  add a polyline  ******************

        var poly = new google.maps.Polyline({
          path: path,
          geodesic: true,
          strokeColor: "#ffffff",
          strokeOpacity: 1,
          strokeWeight: 2,
        });    
        poly.setMap(map);
      }

      //產生min到max之間的亂數
      function getRandom(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
      };
