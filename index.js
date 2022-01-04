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
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  var db = firebase.firestore();
var ref = db.collection('fruit').doc('apple');


class Index extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        showWelcome: true,
      };
      this._onButtonClick = this._onButtonClick.bind(this);
    }
    _onButtonClick() {
      this.setState({
          showWelcome: false,
      });
    }
    render() {
      return (
        <div onClick={this._onButtonClick}>
          {this.state.showWelcome ?
             <Welcome /> :
             <Menu/>
          }
        </div>
      );
    }
  

}

class Welcome extends React.Component{
  render(){
      return(  
          <div  className="Ferns_Title">
      <div className=" w3-animate-bottom">
      <h1 className='w3-jumbo text-center'>百蕨園</h1>
      <hr className='w3-border-grey'style={margin} ></hr>
      <p className='text-center arrowBounce'>Start at 2020</p>   
      </div>
      </div>
    ) }
}
const margin={margin:"auto",width:"40%"}

class Menu extends React.Component{
  render(){
      return(   
      <div className="w3-animate-opacity  w3-text-white container">
          <div className="d-flex justify-content-center">
              <div className="
               menu_container" onClick={()=>window.location.href='background.html'}>
              <h1 className='w3-jumbo text-center' >背景故事</h1>
              <hr className='w3-border-grey' style={margin}></hr>
              <p className='text-center'>Back Ground Story</p>   
              </div>
              <div className="
              menu_container" onClick={()=>window.location.href='introduction.html'}>
              <h1 className='w3-jumbo text-center' >植物圖鑑</h1>
              <hr className='w3-border-grey' style={margin}></hr>
              <p className='text-center'>Introduction </p>   
              </div>
          </div>
          </div>
    ) 
  }
}



ReactDOM.render(
  <Index/>,
  document.getElementById('index')
  
);




