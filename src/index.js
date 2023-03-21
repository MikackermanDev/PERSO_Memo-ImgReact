import React from "react";
import ReactDOM from "react-dom";

// 1ere façon via webPack pour chercher dans le dossier SRC
import img7900XTX from "./assets/img/7900XTX/RX7900XTX-9926-front.jpg";

// 2ème façcon pour chercher dans le dossier PUBLIC
let indexNVIDIA = 9865;
let face = "bottom";

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
		<img src={img7900XTX} width="100%" alt="" />
	</div>
);

const routeImage = ReactDOM.createRoot(document.getElementById("root"));
routeImage.render(image);
