import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = ({ hoursStr, minutesStr, secondsStr, onStop}) => {
	let inputValue = 0
	return (
		<>
			<div className="intro">
				<h1>Soy un contador simplón</h1>
			</div>
			<div className="contador">
				<div className="icon"><i className="fa-regular fa-clock"></i></div>
				<div className="hours">
					<div className="firstDigit">{hoursStr[0]}</div>
					<div className="secondDigit">{hoursStr[1]}</div>:
				</div>
				<div className="minutes">
					<div className="firstDigit">{minutesStr[0]}</div>
					<div className="secondDigit">{minutesStr[1]}</div>:
				</div>
				<div className="seconds">
					<div className="firstDigit">{secondsStr[0]}</div>
					<div className="secondDigit">{secondsStr[1]}</div>
				</div>

			</div>
			<div className="boton" aria-label="Ejemplo básico con contorno">
				<button type="button" className="btn btn-outline-primary"onClick={onStop}>Pause</button>
			</div>
			<div className="foot">
				<footer className="footer" >Hecho con <i className="fa-regular fa-heart heart"></i> por Sara</footer>
			</div>

		</>
	);
};

export default Home;
