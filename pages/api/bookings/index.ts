import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
      return;
  }

  const bookings = await prisma.findMany({
    where: {
      
    },
    include: {
      attendees: true
    }
  });
}
