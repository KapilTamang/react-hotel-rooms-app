import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import bgVid from "../videos/bgVid.mp4";

const Home = () => {
	return (
		<>
			<Hero hero="defaultHero">
				<div className="bgVidContainer">
					<video src={bgVid} autoPlay loop muted type="video/mp4" />
				</div>
				<Banner
					title="Luxurious Rooms"
					subtitle="Deluxe rooms starting from $200."
				>
					<Link to="/rooms" className="btn-primary">
						Our Rooms
					</Link>
				</Banner>
			</Hero>
			<Services />
			<FeaturedRooms />
		</>
	);
};

export default Home;
