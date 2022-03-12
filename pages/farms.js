import React, { useState } from "react";
import Link from "next/link";
import FarmService from "../lib/services/farm-service";

const NewFarm = ({ apiary = [] }) => {
	const emptyFarm = {
		name: null,
		location: null,
	};

	const [farm, setFarm] = useState(emptyFarm);
	const [saved, setSaved] = useState(false);
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const res = await fetch("/farm", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ farm: farm }),
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

	//const categoryOptions = categories.map((c) => (
	//	<option key={c.id} value={c.id}>
	//		{c.name}
	//	</option>
	//));

	return (
		<div>
			<h1>Create New farm</h1>
			<Link href="/farmss">
				<button>
					<a>All farm</a>
				</button>
			</Link>

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
	const res = await FarmService.findAll();
	const farms = await res.json();

	return { props: { farms } };
};

export default NewFarm;