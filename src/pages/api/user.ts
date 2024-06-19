import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line jest/no-mocks-import
import userMock from '../../../__mocks__/user.json';

export const SIMULATE_SLOW_REQUEST_TIMEOUT = 3000;

const pause = () =>
  // eslint-disable-next-line no-promise-executor-return
  new Promise(resolve => setTimeout(resolve, SIMULATE_SLOW_REQUEST_TIMEOUT));

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Simulate a slow XHR call
  await pause();

  res.status(200).json(userMock);
}
