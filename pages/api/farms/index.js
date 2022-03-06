//import dbConnect from '../../../utils/dbConnect';
//import Farm from '../../../models/Farm';
//dbConnect();

export default async (req, res) => {
    const { method } = req;

  
    switch (method) {
        case 'GET':
            try {
                //const farms = await Farm.find({});
                const farms = await fetch('http://localhost:8080/api/farms')

                res.status(200).json({ success: true, data: farms })
            } catch (error) {
                res.status(400).json({ success: false, message: 'This is a problem now!' });
            }
            break;
        case 'POST':
            try {
                const farm = await Farm.create(req.body);

                res.status(201).json({ success: true, data: farm })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }


}