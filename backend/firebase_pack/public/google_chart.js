google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

var data = new google.visualization.DataTable();
data.addColumn('date', 'Time');
data.addColumn('number', 'X');
data.addColumn('number', 'Y');
data.addColumn('number', 'Z');

var db = firebase.firestore();
var drawing=[];

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
            var time=snap.data().timestamp.toDate();

           

            // console.log(time.toDate())
            var tmp=[time,x_data,y_data,z_data]
            
            drawing.push(tmp)
            data.addRows(drawing)   
            // console.log("acc add +",drawing)
            chart.draw(data, google.charts.Line.convertOptions(options));
        })
    }, (error) => {
        console.log(error.message)
    });

     




}
