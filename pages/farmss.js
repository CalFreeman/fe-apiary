import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import FarmService from "../lib/services/farm-service"
import { stringify } from "querystring";

export default function Farm( props ) {
	const [farm, setfarms] = useState([props]);

	const farmList = farm.map((farm, index) => (
		<tr key={index}>
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
				{console.log("farm id" + JSON.stringify({farm}))}
				<table>
             	 	<tbody>
             	 	 	{farmList}
             	 	</tbody>
				</table>
			</div>
		</div>
	);
}

export const getServerSideProps = async () => {
	const res = await FarmService.findAll();
	const props = await res.json();
  //console.log(props)
	return {
		props: { 
      props 
    }
	};
};