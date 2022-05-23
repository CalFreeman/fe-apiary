const API_HOST = process.env.API_HOST;

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
	create: (farm) => fetch(`${API_HOST}/api/farms`, { method: "POST", headers: { "Content-Type": "application/json" }, body: { name: farm.name, location: farm.location}})
};
 
export default FarmService;
