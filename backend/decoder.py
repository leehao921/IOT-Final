import json
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


cred = credentials.Certificate('serviceAccount.json')
# need to include serviceAccount key
firebase_admin.initialize_app(cred)
db = firestore.client()


def accleration_decoder(msg, frameCnt):

    print("it is accleration ")
    x = msg[4:8]
    y = msg[8:12]
    z = msg[12:16]
    x_int = int(x, 16)/1000
    print(f"x: {x_int}")
    y_int = int(y, 16)/1000
    print(f"y: {y_int}")
    z_int = int(z, 16)/1000
    print(f"z: {z_int}")

    doc = {
        'timestamp': firestore.SERVER_TIMESTAMP,
        'x': x_int,
        'y': y_int,
        'z': z_int
    }
    doc_re1 = db.collection("Acceleration")
    doc_re1.document(f'{frameCnt}').set(doc)


def GPS_decoder(msg, frameCnt):
    print("it is GPS ")
    lat = msg[4:12]
    lat_int = int(lat, 16)/10000000
    print(f"lat_int: {lat_int} ")
    lon = msg[12:20]
    lon_int = int(lon, 16)/10000000
    print(f"lon_int: {lon_int} ")

    doc = {
        'timestamp': firestore.SERVER_TIMESTAMP,
        'lat': lat_int,
        'lon': lon_int
    }
    doc_re1 = db.collection("GPS")
    doc_re1.document(f"{frameCnt}").set(doc)
