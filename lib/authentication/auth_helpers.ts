import jwt from 'jsonwebtoken';

const key = process.env.JWT_KEY;
export const extractToken = (header: string | undefined) => {
  if (!header || !header.startsWith('Bearer')) {
    throw new Error('Unauthorized');
  }
  const token = header.split(' ')[1];
  if (!token) throw new Error('Authentication token not found');

  return token;
};

export const decodeToken = (token: string) => {
  const payload = jwt.verify(token, String(key));

  return payload;
};

export const encodeToken = (payload: object) => {
  const token = jwt.sign(payload, String(key), { expiresIn: '1d' });

  return token;
};
