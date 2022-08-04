import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET': {
        // return get(req, res);
        const { email } = req.body;
        await dbConnect();
        const user = await User.findOne({email: email});
        if (user){
          res.status(200).json(user);
        } else {
          console.log('no user');
        }
    }

    case 'POST': {
        const {email, uid} = req.body;
        await dbConnect();

        try {
          const userExist = await User.findOne({email: email});
          if (userExist){
            return res.status(422).json({error: "An account associated with that email already exists."})
          }
          const user = await User.create(req.body);
          if (user){
            res.status(200).json(user);
          }
        } catch (err: any) {
          console.log(err);
        }
      
    }

    case 'PUT': {
        // return get(req, res);
    }

    case 'DELETE': {
        // return get(req, res);
    }
}
}
