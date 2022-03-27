import React, { useState, useEffect } from "react";
import Link from "next/link";
import FarmService from "../lib/services/farm-service"

export default function Farm( props ) {
	const [farm, setfarms] = useState([props]);

	console.log(JSON.stringify(farm));
	const farmList = farm.map((farm, i) => (
		<tbody key={i}>
			<tr >{farm.id}</tr>
			<tr >{farm.name}</tr>
			<tr >{farm.location}</tr>
		</tbody>
		
	));

	//console.log(typeof farmList);
	//console.log("My obj: ", farmList);

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
					{farmList}
 		 	  	</table>
			</div>
		</div>
	);
}

export const getServerSideProps = async () => {
	const res = await FarmService.findAll();
	const data = await res.json();
   	//console.log(props)
	return {
	 	props: { data }
	};
};