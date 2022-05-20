import React, { useState } from "react";
import Link from "next/link";
import FarmService from "../lib/services/farm-service";

export default function NewFarm ({ apiary = [] }){
	const emptyFarm = {
		name: null,
		location: null,
	};

	const [farm, setFarm] = useState(emptyFarm);
	const [saved, setSaved] = useState(false);
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const res = await fetch("/api/farms", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify( { farm: farm }),
		});
		if (res.ok) {
			setSaved(true);
		} else {
			setError(`Error ${res.status} :: ${res.statusText}`);
		}
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
					<input type="text" id="name" name="name" placeholder="farm name" value={farm.name || ""} onChange={handleChange} />

					<label htmlFor="location">Farm Location</label>
					<input type="text" id="location" name="location" placeholder="farm location" value={farm.location || ""} onChange={handleChange} />

					<input type="submit" value="Submit" />
				</form>
			)}
		</div>
	);
};

export const getServerSideProps = async () => {
	const res = await FarmService.create();
	const farms = await res.json();
   	//console.log(apiary)
	return { props: { farms } };
};
