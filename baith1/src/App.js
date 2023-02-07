import './App.css';
import { useState } from 'react';
import  ho from './Photo/ho.jpg'
import logo from './Photo/logo.svg'
 import style from './styled.module.css'
function App() {
  return(
    
    <div className={style.img}>
      <h1> Các cách hiện thị ảnh trong Reactjs</h1>
      <img src={ho} width="200" height="100" className='img' alt="" />
      <p> Link online</p>
     <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'/>
<p>Require</p>
      <img src= {require("./Photo/ho.jpg")  } className="img2" />
      <p> Base64</p>
      <img src={logo} alt=""/>
    </div>
  );
}

export default App;