import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<Hero hero="notFoundHero">
			<Banner title="404" subtitle="PAGE NOT FOUND">
				<Link to="/" className="btn-primary">
					Back to Home
				</Link>
			</Banner>
		</Hero>
	);
};

export default Error;
