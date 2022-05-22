import React, { useState } from "react";
import Link from "next/link";
import FarmService from "../lib/services/farm-service";

const NewFarm = ( props ) => {
	const emptyFarm = {
		"name": null,
		"location": null,
	};

	const [farm, setFarm] = useState(emptyFarm);
	const [saved, setSaved] = useState(false);
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log(e)
		console.log("hello world")
		console.log(e.target[0].value)
		console.log(e.target[1].value)

		let farm = await FarmService.create(e);

	};

	const handleChange = (e) => {
		e.preventDefault();

		const { name, value } = e.target;
		setFarm((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<div>
			<h1>All farms</h1>
			<Link href="/farmss">
				<button>
					<a>All farms</a>
				</button>
			</Link>

			<h1>New farm</h1>
			{error && <h3>{error}</h3>}
			{saved && <h3>Congrats! The farm '{farm.name}' was saved successfully.</h3>}

			{!saved && (
				<form onSubmit={handleSubmit}>
					<label htmlFor="name">Farm Name</label>
					<input type="text" id="name" name="name" placeholder="farm name" value={farm.name || ""} onChange={handleChange} required />

					<label htmlFor="location">Farm Location</label>
					<input type="text" id="location" name="location" placeholder="farm location" value={farm.location || ""} onChange={handleChange} required />

					<button type="submit">Submit</button>
				</form>
			)}
		</div>
	);
};


export default NewFarm;