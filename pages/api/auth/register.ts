import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import prisma from '../../../lib/prisma';

import { encodeToken } from '../../../lib/authentication/auth_helpers';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
  ) {
    if (req.method !== 'POST') {
    return;
    }

  try {
    const { username, email, password } = req.body;
    
    const userExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    console.log(userExists);
    
    if (userExists) {
      return res.status(400).json({
        status: false,
        error: 'User account found',
        data: {},
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const user:any = await prisma.user.create({
      data: {
        username,
        email,
        password: hash,
      },
    });
    console.log(user);
    
  
    const token = encodeToken(user);
    console.log("token", token);
    
    delete user.password;

    res.status(200).json({
      status: true,
      message: 'User registration succeeded',
      token,
      data: user
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      error: 'Action failed ',
      data: error,
    });
  }
}
