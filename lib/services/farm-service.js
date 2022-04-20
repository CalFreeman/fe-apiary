const API_HOST = process.env.API_HOST;

const FarmService = {
	findAll: () => fetch(`${API_HOST}/api/farms`, { method: "GET", headers: {"Content-Type":  "application/json" }}),
	create: (farm) => fetch(`${API_HOST}/api/farms`, { method: "POST", headers: { "Content-Type": "*/*" }, body: farm }),
};
 
export default FarmService;