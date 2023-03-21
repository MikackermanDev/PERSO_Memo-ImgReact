import React from "react";
import ReactDOM from "react-dom";

import ReactImageGallery from "./ReactImageGallery";

const page = (
	<div>
		<h2>4090</h2>
		<ReactImageGallery />
		<br />
	</div>
);

const route = ReactDOM.createRoot(document.getElementById("root"));
route.render(page);
