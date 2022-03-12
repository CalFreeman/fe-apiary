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

		const res = await fetch("/api/farm", {
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
	//		{c.title}
	//	</option>
	//));

	return (
		<div>
			<h1>Create New farm</h1>
			<Link href="/">
				<button>
					<a>All farm</a>
				</button>
			</Link>

			{error && <h3>{error}</h3>}
			{saved && <h3>Congrats! The farm '{farm.title}' was saved successfully.</h3>}

			{!saved && (
				<form onSubmit={handleSubmit}>
					<label htmlFor="title">farm Title</label>
					<input type="text" id="title" name="title" placeholder="farm Title" value={farm.title || ""} onChange={handleChange} />

					<label htmlFor="duration">farm Duration</label>
					<input type="text" id="duration" name="duration" placeholder="farm Duration" value={farm.duration || ""} onChange={handleChange} />

					<label htmlFor="description">Description</label>
					<textarea rows="10" id="description" name="description" placeholder="Description" value={farm.description} onChange={handleChange} />

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