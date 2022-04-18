const API_HOST = process.env.REACT_APP_API_HOST;

const FarmService = {
	findAll: () => fetch(`${API_HOST}/api/farms`, 
	 	{ method: "GET", 
		headers: {"Content-Type":  "application/json" }}),
	create: (farm) => await fetch(`${API_HOST}/api/farms`, 
	 	{ method: "POST", 
		mode: 'cors',
		headers: {
			'Access-Control-Allow-Origin': '*',			
			'Content-Type': 'Accept',
			'Accept': 'application/json',                  
		},		
		body: JSON.stringify(farm) }),
};
 
export default FarmService;