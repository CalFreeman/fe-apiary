const API_HOST = process.env.NEXT_PUBLIC_REACT_APP_API_HOST;

const endPoint = { 
	//$API_HOST/api/farms
};

const reqOpts = {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify({ title: 'React POST Request Example' })
};

const FarmService = {
	findAll: () => fetch(`${API_HOST}/api/farms`, { method: "GET", headers: {"Content-Type":  "application/json" }}),
	create: (farm) => fetch(`${API_HOST}/api/farms`, { 
		method: "POST", 
 		headers: { 
			 "Content-Type": "application/json" 
		}, 
		body: JSON.stringify({
		  name:"farm.name",
	      location:"farm.location"
		}),
	})
	//create: (farm) => fetch(`${API_HOST}/api/farms`, { method: "POST", headers: { "Content-Type": "application/json" }, body: farm})
};

export default FarmService;