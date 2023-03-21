import React from "react";
import ReactDOM from "react-dom";

import ReactImageGallery from "./ReactImageGallery";

const page = (
	<div>
		<ul>
			<li>4090</li>
			<ReactImageGallery />
			<br />
			<li>7900XTX</li>
		</ul>
	</div>
);

const route = ReactDOM.createRoot(document.getElementById("root"));
route.render(page);
