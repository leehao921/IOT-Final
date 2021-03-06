import random
import json
import queue
from decoder import accleration_decoder
from decoder import GPS_decoder
from paho.mqtt import client as mqtt_client


broker = 'mqtt-dev.kits.tw'
port = 1883
topic = "NBIOT-GW/UL/+"  # !3bf90242ac110003"
# generate client ID with pub prefix randomly
client_id = f'NTHU-IOT-LAB-{random.randint(0, 100)}'


def connect_mqtt() -> mqtt_client:
    def on_connect(client, userdata, flags, rc):
        if rc == 0:
            print("Connecting to MQTT!")
        else:
            print("Failed to connect, return code %d\n", rc)

    client = mqtt_client.Client(client_id)
    client.on_connect = on_connect
    client.connect(broker, port)
    return client

def read_msg(data):
    data_decode = data[0]  # [{"str":int,}]
    #! data_decode now is in dic format
    # print(type(data_decode))
    mac_address = data_decode["macAddr"]
    if(mac_address == "00000000aa58170b"):
        time = data_decode["time"]
        frameCnt = data_decode["frameCnt"]
        msg = data_decode["data"]
        mac_address = data_decode["macAddr"]
        # need to verify the mac_address(or it will get the others data by accident)
        if(mac_address == "00000000aa58170b"):
            print(time+f"  frameCnt- '{frameCnt}'")
            print(msg)
            if(msg[0:4] == "0271"):
                accleration_decoder(msg, frameCnt)
            if(msg[0:4] == "0288"):
                GPS_decoder(msg, frameCnt)


def subscribe(client: mqtt_client):
    def on_message(client, userdata, msg):
        print(f"Received from`{msg.topic}`:")

        # it becomes list after first loads
        read_msg(json.loads(msg.payload.decode("utf-8")))
        # ! the msg.payload.decode("utf-8") will make the message turn into string
    client.subscribe(topic)
    client.on_message = on_message


def run():
    client = connect_mqtt()
    subscribe(client)
    client.loop_forever()


if __name__ == '__main__':
    run()
