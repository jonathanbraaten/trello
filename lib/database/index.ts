import pg, { type PoolConfig } from 'pg';

const { Pool } = pg;

export class PoolConnection {
  private static instance: pg.Pool | null = null;

  private constructor() {}

  public static getInstance(config: PoolConfig) {
    if (!PoolConnection.instance) {
      PoolConnection.instance = new Pool(config);
    }
    return PoolConnection.instance;
  }
}

const config: PoolConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
};

export const pool = PoolConnection.getInstance(config);
