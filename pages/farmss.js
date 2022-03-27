import React, { useState, useEffect } from "react";
import Link from "next/link";
import FarmService from "../lib/services/farm-service"

export default function Farm( props ) {
 	const [farm, setfarms] = useState([props]);

 	//
 	console.log(JSON.stringify(farm));
 	console.log(farm[0].data.content[0])
 	if (farm.hasOwnProperty("id")){
 	 	console.log(farm.id);          
 	}
	//
	 
	const farmList = farm.map((f, i) => (
		<tbody key={i}>
			<tr >{f.id}</tr>
			<tr >{f.name}</tr>
			<tr >{f.location}</tr>
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