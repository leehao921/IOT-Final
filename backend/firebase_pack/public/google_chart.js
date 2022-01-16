google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

var data = new google.visualization.DataTable();
// data.addColumn('number', 'Time');
data.addColumn('number', 'X');
data.addColumn('number', 'Y');
data.addColumn('number', 'Z');
// data.addRows([[0,0,0],[0,1,1]])

var db = firebase.firestore();
var drawing=[[2,2,2],[3,3,3]]

var options = {
    chart: {
      title: 'acc',
      subtitle: 'time and acc'
    },
    width: 350,
    height: 500
  };
  
  var chart = new google.charts.Line(document.getElementById('linechart_material'));
db.collection('Acceleration').onSnapshot((snapshot) => {
        
        console.log("read accleration data")
        snapshot.forEach((snap)=>{
            var x_data=snap.data().x;
            var y_data=snap.data().y;
            var z_data=snap.data().z;
            var time=snap.data().timestamp;

            var tmp=[x_data,y_data,z_data]
            
            drawing.push(tmp)
            data.addRows(drawing)   
            console.log("acc add +",drawing)
            chart.draw(data, google.charts.Line.convertOptions(options));
        })
    }, (error) => {
        console.log(error.message)
    });

     




}
