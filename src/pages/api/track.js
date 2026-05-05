import pg from 'pg';

const { Client } = pg;

export const prerender = false;

export async function POST({ request }) {
  const { action, timestamp } = await request.json();

  const client = new Client({
    connectionString: import.meta.env.DATABASE_URL,
    ssl: false,
  });

  await client.connect();

  await client.query(`
    CREATE TABLE IF NOT EXISTS events (
      id         SERIAL      PRIMARY KEY,
      action     TEXT        NOT NULL,
      timestamp  BIGINT      NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);

  await client.query(
    'INSERT INTO events (action, timestamp) VALUES ($1, $2)',
    [action, timestamp],
  );

  await client.end();

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
