import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/dbConnect';

type Data = {
    name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET': {
            // return get(req, res);
        }

        case 'POST': {
            // return get(req, res);
        }

        case 'PUT': {
            // return get(req, res);
        }

        case 'DELETE': {
            // return get(req, res);
        }
    }

}