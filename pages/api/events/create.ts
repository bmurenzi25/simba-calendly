import { NextApiRequest, NextApiResponse } from 'next';
import slugify from 'slugify';
import prisma from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return;
  }

  try {
    const { title, length, timeZone, userId } = req.body;
    const slug = slugify(title, '_');
    const event = await prisma.eventType.create({
      data: {
        title: title,
        length: length,
        timeZone: timeZone,
        userId: userId,
        slug: slug,
      },
    });

    return res.status(200).json({
      status: 'success',
      message: 'user event created',
      data: event,
    });
  } catch (err) {
    return res.status(200).json({
      status: 'failed',
      message: 'error creating event',
      data: 'error',
    });
  }
}
