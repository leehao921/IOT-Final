import json


def accleration_decoder(msg):
    print("it is accleration ")
    x = msg[5:8]
    y = msg[9:12]
    z = msg[13:16]
    x_int = int(x, 16)
    print(f"x: {x_int}")
    y_int = int(y, 16)
    print(f"y: {y_int}")
    z_int = int(z, 16)
    print(f"z: {z_int}")


def GPS_decoder(msg):
    print("it is GPS ")
    # let hexString = data.value.toString(16).padStart(16, "0");
    # data.lat = parseInt(hexString.slice(0, 8), 16) / 10000000;
    # data.lon = parseInt(hexString.slice(8, 16), 16) / 10000000;
    lat = msg[0:8]
    lat_int = int(lat, 16)/10000000
    print(f"lat_int: {lat_int}")
    lon = msg[8:16]
    lon_int = int(lon, 16)/10000000
    print(f"lon_int: {lon_int}")
