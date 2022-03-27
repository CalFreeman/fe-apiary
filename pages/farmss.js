import React, { useState, useEffect } from "react";
import Link from "next/link";
import FarmService from "../lib/services/farm-service"

export default function Farm( props ) {
 	const [farm, setfarms] = useState([props]);

 	//console.log(JSON.stringify(farm));
	//console.log(farm[0].data.content.length)
 	//console.log(farm[0].data.content[3])
	//console.log(farm)

	const farmList = farm[0].data.content.map((f, i) => (
		<table key={i}>
			<thead >
			 	<tr>
			 		<th>id:  </th>
			 		<th>name:  </th>
			 		<th>location:  </th>
			 	</tr>
		 	</thead>
		 	<tbody>
			 	<tr >
			 	 	<td>{f.id}  </td>
			 	 	<td>{f.name}  </td>
			 	 	<td>{f.location}  </td>
			 	</tr>
		 	</tbody>
		</table>
	));


	return (
		<div>
			<div>
				<h1>Farms</h1>
				{farmList}
				<Link href="/farms">
					<button>
						<a>New Farm</a>
					</button>
				</Link>			
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