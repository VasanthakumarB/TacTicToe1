import logo from './logo.svg';
import './App.css';
import Car from './components/Car';
import Gar from './components/Garage';
import Apple from './components/Apple';
import Gun from './components/Gun';
function App() {
  // const brand='Ferrai';
  // const carInfo={brand:'Ford', color:'Red'};
  const carInfo={};
  const isdoorOpened=false;
  const fruitsInfo={type:'Fuji', color:'Red'};
  const carList=[
    {brand:'BMW', color:'Red'},
    {brand:'Ford', color:'Black'},
    {brand:'Tesla', color:'blue'}
  ];
  const numberList=[1,2,3,4,5,6,2];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello Coder
        </a>
      </header>
      <Gar/>
      {/* <Car brand={brand} color={'Black'}/> */}
      {carInfo.brand!==undefined && carInfo.color!==undefined?
      <Car carInfo={carInfo}/>:null
    }

      <Apple fruitsInfo={fruitsInfo}/>
      <Gun/>
      {
        isdoorOpened?<h2>Garage door is Open</h2> :<h2>Garage door is Closed</h2>
      }
      <ul>
        {
          carList.map((carInfo)=><li key={carInfo.brand}><Car carInfo={carInfo}/></li>)
        }
      </ul>
      <ul>
        {
          numberList.map((e,index)=><p key={index}>{e}</p>)
        }
      </ul>
    </div>
  );
}

export default App;
