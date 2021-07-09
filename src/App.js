import React from 'react';
import SUV from './Components/SVGs/icon-suvs.svg'
import SEDAN from './Components/SVGs/icon-sedans.svg'
import LUXURY from './Components/SVGs/icon-luxury.svg'
import Pallete from './Components/Pallete'
import './App.css';

function App() {

  var sWidth = window.innerWidth;

    window.addEventListener('resize', function () {
       if (window.innerWidth !== sWidth) {
           window.location.reload(true);
       }
    });


  return (

    <div className="App">
      <h1>Madara Banking Systems</h1>
      <div className="pallete-container">
      <Pallete
       heading = 'SUV'
       color='#ffae00'
       bradius ={sWidth >= 768 ? '15px 0 0 15px':'15px 15px 0 0'}
       img = {SEDAN}
       para = 'Itachi Uchiha is a fictional character in the Naruto manga and anime series. Itachi is the older brother of Sasuke Uchiha, and is responsible for killing all the members of their clan, sparing only Sasuke.'></Pallete>
       <Pallete
       heading = 'SEDAN'
       color='#224739'
       bradius = '0px'
       img = {LUXURY}
       para = 'Itachi Uchiha is a fictional character in the Naruto manga and anime series. Itachi is the older brother of Sasuke Uchiha, and is responsible for killing all the members of their clan, sparing only Sasuke.'></Pallete>
       <Pallete
       heading = 'LUXURY'
       color = '#005f8b'
       bradius = {sWidth >= 768 ? '0 15px 15px 0':'0 0 15px 15px'}
       img = {SUV}
       para = 'Itachi Uchiha is a fictional character in the Naruto manga and anime series. Itachi is the older brother of Sasuke Uchiha, and is responsible for killing all the members of their clan, sparing only Sasuke.'></Pallete>
</div>
    </div>
  );
}

export default App;
