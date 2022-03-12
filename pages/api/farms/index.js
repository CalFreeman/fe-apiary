//import dbConnect from '../../../utils/dbConnect';
//import Farm from '../../../models/Farm';
//dbConnect();
//const fetch = require('cross-fetch');
import nextConnect from "next-connect";
import FarmService from "../../../lib/services/farm-service";
import EventSource from "eventsource";
const API_HOST = process.env.API_HOST;

const stream = async (req, res) => {
	console.log("Conenct to SSE stream");

	let eventSource = new EventSource(`${process.env.API_HOST}/farms/sse`);

	eventSource.onopen = (e) => {
		console.log("listen to see endpoint now", e);
	};

	eventSource.onmessage = (e) => {
		res.flushData(e.data);
	};

	eventSource.onerror = (e) => {
		console.log("error ", e);
	};

	res.on("close", () => {
		console.log("close connection...");
		eventSource.close();
		eventSource = null;
		res.end();
	});
};

const sseMiddleware = (req, res, next) => {
	res.setHeader("Content-Type", "text/event-stream");
	res.setHeader("Cache-Control", "no-cache");
	res.flushHeaders();

	const flushData = (data) => {
		const sseFormattedResponse = `data: ${data}\n\n`;
		res.write("event: message\n");
		res.write(sseFormattedResponse);
		res.flush();
	};

	Object.assign(res, { flushData });

	next();
};

const createFarmHandler = async (req, res) => {
	const farm = req.body.farm;
	const response = await FarmService.create(farm);
	if (response.status === 201) {
		res.json({ message: "ok" });
	} else {
		res.statusCode(response.status).json({ status: response.status, message: response.statusText });
	}
};

const handler = nextConnect();
handler.get(sseMiddleware, stream);
handler.post(createFarmHandler);


//export default async (req, res) => {
//    const API_ENDPOINT = '${API_HOST}/farms'
//    const {
//        method
//      } = req
//  
//    switch (method) {
//        case 'GET': 
//            try {
//                const response = await fetch('http://localhost:8080/api/farms');
//                //const response = await fetch('${API_ENDPOINT}');
//                data = await res.status(200).json( {success:true, query:response});
//                console.log( {hello:tt , data});
//                return { props: {res} }
//
//            } catch (error) { 
//                res.status(400).json({ success: false, message: 'This is a problem now!' });
//            }
// 
//            break;
//        case 'POST':
//            try {
//                const farm = await farm.create(req.body);
//                res.status(201).json({ success: true, data: farm });
//            } catch (error) {
//                res.status(400).json({ success: false });
//            }
//            break;
//        default:
//            res.status(400).json({ success: false });
//            break;
//    }
//
//    
//}

export default handler;
