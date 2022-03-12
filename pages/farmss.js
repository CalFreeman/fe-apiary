import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import FarmService from "../lib/services/farm-service";

export default function Farm({ initialFarms = [] }) {
	const [farms, setfarms] = useState(initialFarms);

	useEffect(() => {
		let eventSource = new EventSource("/api/farms");

		eventSource.onopen = (e) => {
			console.log("listen to api-sse endpoint", e);
		};

		eventSource.onmessage = (e) => {
			const farm = JSON.parse(e.data);

			if (!farms.includes(farm)) {
				setFarms((farms) => [...farms, farm]);
			}
		};

		eventSource.onerror = (e) => {
			console.log("error", e);
		};

		return () => {
			eventSource.close();
			eventSource = null;
		};
	}, []);

	const farmList = farms.map((farm) => (
		<tr key={farm.id}>
			<th>{farm.name}</th>
			<th>{farm.location}</th>
		</tr>
	));

	return (
		<div>
			<div>
				<h1>Farms</h1>
				<Link href="/farms">
					<button>
						<a>New Farm</a>
					</button>
				</Link>
				<table>
                    <tbody>
                        <tr>
					        <th style={{ width: "60%" }}>Name</th>
					        <th style={{ width: "40%" }}>Location</th>
                        </tr>
                        <tr>
                        {farmList}
                        </tr>
                    </tbody>
				</table>
			</div>
		</div>
	);
}

export const getServerSideProps = async () => {
	const res = await FarmService.findAll();
	const farms = await res.json();
	return {
		props: { 
            farms 
        },
	};
};