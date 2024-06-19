import { jest } from '@jest/globals';
import { NextApiRequest, NextApiResponse } from 'next';
import handler from './user';

const json = jest.fn();

const status = jest.fn(() => ({ json }));

interface UserI {
  id: number;
  name: string;
  department: string;
  avatar: string;
}

let req: NextApiRequest;

describe('getUser', () => {
  beforeEach(() => {
    json.mockClear();
  });

  it('should mock this test', async () => {
    const res: jest.Mocked<NextApiResponse> = {
      status,
      json,
    } as unknown as jest.Mocked<NextApiResponse>;
    await handler(req, res);

    const response = json.mock.calls[0][0] as UserI;

    expect(res.status).toHaveBeenCalledWith(200);
    expect(response?.name).toBe('Test User');
  });
});
