import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return;
  }

  try {
    const { id } = req.query;
    const bookings = await prisma.booking.findMany({
      where: {
        userId: Number(id),
      },
      include: {
        attendees: true,
      },
    });

    return res.status(200).json({
      status: 'success',
      message: 'user bookings log',
      data: bookings,
    });
  } catch (err) {
    return res.status(200).json({
      status: 'failed',
      message: 'error getting bookings',
      data: 'error',
    });
  }
}
