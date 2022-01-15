const http = require('http');
const firebase = require('firebase/app');
require('firebase/database');
var fs = require('fs');//this is use to open file 
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  fs.readFile('index.html',function(err,data){
    const firebaseConfig = {
        apiKey: "AIzaSyCPbX5vauQIP_VvOtFIQbMm5snlm66JHqs",
        authDomain: "iot-final-b320d.firebaseapp.com",
        databaseURL: "https://iot-final-b320d-default-rtdb.firebaseio.com",
        projectId: "iot-final-b320d",
        storageBucket: "iot-final-b320d.appspot.com",
        messagingSenderId: "149338057740",
        appId: "1:149338057740:web:f58e3a9c6bb27e60771229",
        measurementId: "G-20EDHENVLH"
        }
        if (req.url !== '/favicon.ico') {  // 因接收時會一併取得 undefined 的 facicon.ico，使用簡單的邏輯排除
          const params = url.parse(req.url, true).query; //取得網址每個參數
          const ref = params.ref || '/';
          const type = params.type || 'set';
          const data = params.data;
          // 發送 https://網址?databaseUrl=XXX&type=push&ref=XXX&data=XXX 就可寫入資料
          // 發送 https://網址?databaseUrl=XXX&type=read&ref=XXX 就可讀取資料
          const app = firebase.initializeApp(firebaseConfig)
          // Initialize Firebase
          const database = app.database();
          switch (type) {  
            case 'read':
          database.ref(ref).once('value', e => {
            let dataObj = e.val();
            let html = '';
            for (let i in dataObj) {
                html = `${html}<div>${dataObj[i]}</div>`;
            }
            console.log(e.val());
            res.end(html);
        }).then(() => {
            firebase.app().delete(); // 讀取完成後刪除 firebase 宣告
        });
      }
        }    
       


    res.writeHeader(200,{'Content-Type': 'text/html'});
    res.write(data)
    return res.end('404error');
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
