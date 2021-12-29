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
    print("it is accleration ")
