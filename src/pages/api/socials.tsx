import { socials } from "./data/socials";
import { NextApiRequest, NextApiResponse } from "next";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'GET') {
    res.status(200).json(socials);
  }
  
}
