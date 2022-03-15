import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import FarmService from "../lib/services/farm-service"

export default function Farm( props ) {
	const [farm, setfarms] = useState([props]);

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
              <tr key={farmList.key}>
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
	const props = await res.json();
  //console.log(props)
	return {
		props: { 
      props 
    }
	};
};