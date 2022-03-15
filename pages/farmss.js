import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import FarmService from "../lib/services/farm-service"

export default function Farm( farms ) {
	const [farm, setfarms] = useState([farms]);

	const farmList = farm.map((farm) => (
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
    }
	};
};