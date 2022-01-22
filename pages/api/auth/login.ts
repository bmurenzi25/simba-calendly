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
    const { email, password } = req.body;
    console.log(req.body);

    const userExists: any = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    console.log('EXISTS', userExists);

    const verifyPassword = await bcrypt.compareSync(
      password,
      userExists.password
    );

    if (!userExists || !verifyPassword) {
      return res.status(401).json({
        status: 'failed',
        error: 'Unauthorized',
        data: {},
      });
    }

    const token = encodeToken(userExists);

    delete userExists.password;

    res.status(200).json({
      status: 'ok',
      message: 'Signin success',
      token,
      data: {
        userExists,
      },
    });
  } catch (error) {
    return res.status(400).json({
      status: 'failed',
      error: 'Invalid credentials',
      data: error,
    });
  }
}
