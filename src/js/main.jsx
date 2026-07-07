import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

import "@fortawesome/fontawesome-free/css/all.min.css";

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';


const root = ReactDOM.createRoot(document.getElementById('root'))

let seconds = 0
let minutes = 0
let hours = 0

let interval = setInterval(() => {
  
  seconds++
  if (seconds == 59){
    seconds = 0
    minutes++
  }
  if (minutes == 59){
    minutes = 0
    hours++
  }
  let secondsStr =String(seconds).padStart(2, "0")
  let minutesStr =String(minutes).padStart(2,"0")
  let hoursStr = String(hours).padStart(2,"0")
  root.render(
    <React.StrictMode>
      <Home secondsStr= {secondsStr} minutesStr= {minutesStr} hoursStr={hoursStr} onStop={onStop}></Home>
    </React.StrictMode>,

  )
}, 1000)

const onStop = () => {
  clearInterval(interval)
}





