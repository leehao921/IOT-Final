import {get_gps} from  "firebase_data.js"
import {initMap,addMarker} from "google_map.js"
initMap()
var gps=get_gps
addMarker(gps,map)
