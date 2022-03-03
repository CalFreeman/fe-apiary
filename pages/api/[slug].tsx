/*import { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import { funcFoo } from "../../lib/utils/api";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await NextCors(req, res, {
    methods: ["GET", "POST"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  const { query } = req.body as { query: string };
  try {
    const phrase = await funcFoo(query);
    res.json({ phrase });
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
};*/

//http://localhost:3000/api/<slug(anything)>
import { NextApiRequest, NextApiResponse } from "next";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query as { slug: string };
  res.send(slug);
};