import React from "react";
import Card from "./Card";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import GalleryCards from "./GalleryCards";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar></Navbar>
			<div className="container py-4">			 
			 <Jumbotron></Jumbotron>
			 <GalleryCards></GalleryCards>
			</div>

			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
