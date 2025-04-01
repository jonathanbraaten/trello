import { describe, expect, it, vi } from 'vitest';
import { PoolConnection } from '.';
import pg from 'pg';

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
};

vi.mock('pg', () => {
  return {
    default: {
      Pool: vi.fn().mockImplementation(() => {
        return {
          query: vi.fn(),
        };
      }),
    },
  };
});

describe('PoolConnection', () => {
  it('is the same singleton instance', async () => {
    const getInstanceOne = PoolConnection.getInstance(config);
    const getInstanceTwo = PoolConnection.getInstance(config);
    expect(getInstanceOne).toEqual(getInstanceTwo);
  });

  it('should call query method on pg.Pool instance', async () => {
    const instance = PoolConnection.getInstance(config);
    await instance.query('SELECT * FROM list');
    expect(instance.query).toHaveBeenCalledWith('SELECT * FROM list');
  });
});
