import pg from 'pg';

const { Client } = pg;

export const prerender = false;

export async function POST({ request }) {
  try {
    const { action, timestamp, email = null, quantity = null, period = null, message = null } =
      await request.json();

    const connectionString = import.meta.env.DATABASE_URL;
    if (!connectionString) {
      return new Response(JSON.stringify({ ok: false, error: 'DATABASE_URL not set' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const client = new Client({ connectionString, ssl: false });

    await client.connect();

    await client.query(`
      CREATE TABLE IF NOT EXISTS events (
        id         SERIAL      PRIMARY KEY,
        action     TEXT        NOT NULL,
        timestamp  BIGINT      NOT NULL,
        email      TEXT,
        quantity   INTEGER,
        period     TEXT,
        message    TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `);

    await client.query(`ALTER TABLE events ADD COLUMN IF NOT EXISTS email    TEXT`);
    await client.query(`ALTER TABLE events ADD COLUMN IF NOT EXISTS quantity INTEGER`);
    await client.query(`ALTER TABLE events ADD COLUMN IF NOT EXISTS period   TEXT`);
    await client.query(`ALTER TABLE events ADD COLUMN IF NOT EXISTS message  TEXT`);

    await client.query(
      'INSERT INTO events (action, timestamp, email, quantity, period, message) VALUES ($1, $2, $3, $4, $5, $6)',
      [action, timestamp, email, quantity ? parseInt(quantity) : null, period, message],
    );

    await client.end();

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
