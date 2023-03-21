import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
	"https://tpucdn.com/gpu-specs/images/b/9750-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9749-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9986-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9985-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9746-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9745-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9806-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/10472-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9849-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/10464-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/10465-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/10473-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9788-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9741-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9787-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/10466-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9740-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/10191-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9870-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/10378-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/10120-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9768-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9767-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9872-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9871-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9943-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9840-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9874-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9873-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9780-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9835-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9836-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9742-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9797-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9937-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/10856-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9857-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9743-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9744-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/10715-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9773-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9974-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9972-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9800-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/10769-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9783-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9838-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9839-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9867-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/10118-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9869-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/10714-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9877-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9756-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9755-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/10844-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9754-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9758-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9757-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9753-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/10845-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9907-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9906-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9915-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/10933-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9776-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9775-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9823-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9864-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/10854-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/10652-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9777-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9865-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9834-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9769-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/10059-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9786-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9771-front.jpg",
	"https://tpucdn.com/gpu-specs/images/b/9770-front.jpg",
];

const ReactImageGallery = () => {
	return (
		<>
			<div style={{ padding: "20px" }}>
				<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
					<Masonry gutter="20px">
						{images.map((image, i) => (
							<img
								key={i}
								src={image}
								style={{
									width: "100%",
									display: "block",
									cursor: "pointer",
								}}
								alt=""
							/>
						))}
					</Masonry>
				</ResponsiveMasonry>
			</div>
		</>
	);
};

export default ReactImageGallery;
