import React from "react";
import ReactDOM from "react-dom";

// import IMAGES from "./imageMap";

// 1ere façon via webPack
import img7900XTX from "./assets/img/7900XTX/RX7900XTX-9926-front.jpg";

// Pour chercher dans le dossier public/4090
let indexNVIDIA = 9865;
let face = "bottom";

// let indexAMD = 9926;

const image = (
	<div>
		<h2>7900XTX avec "import" provenance SRC</h2>
		<img src={img7900XTX} width="100%" alt="" />
		<br />
		<h2>4090 avec "$index provenance PUBLIC</h2>
		<img
			src={`4090public/RTX4090-${indexNVIDIA}-${face}.jpg`}
			width="100%"
			alt="4090"
		/>
		<br />
		<h2>3ème image avec "concatenation" et provenance SRC</h2>
	</div>
);

const routeImage = ReactDOM.createRoot(document.getElementById("root"));
routeImage.render(image);
