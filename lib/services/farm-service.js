const API_HOST = process.env.API_HOST;

const FarmService = {
	findAll: () => fetch(`${API_HOST}/api/farms`),
	create: (farm) => fetch(`${API_HOST}/farms`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(farm) }),
};

export default FarmService;