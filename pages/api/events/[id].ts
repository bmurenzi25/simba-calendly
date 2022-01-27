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
    const events = await prisma.eventType.findMany({
      where: {
        userId: Number(id),
      },
      include: {
        bookings: true,
      },
    });
    console.log("Events", events);

    return res.status(200).json({
      status: 'success',
      message: 'events data',
      data: events,
    });
  } catch (err) {
    return res.status(200).json({
      status: 'failed',
      message: 'error getting events',
      data: 'error',
    });
  }
}
