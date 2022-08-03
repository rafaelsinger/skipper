import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User'
import { UserType } from '../../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserType>
) {
  switch (req.method) {
    case 'GET': {
        // return get(req, res);
    }

    case 'POST': {
        const {email, uid} = req.body;
        await dbConnect();
      
        const user = await User.create(req.body) as UserType;
      
        res.status(200).json(user);
    }

    case 'PUT': {
        // return get(req, res);
    }

    case 'DELETE': {
        // return get(req, res);
    }
}
}
