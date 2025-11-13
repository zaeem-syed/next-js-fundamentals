import { pool } from '@/lib/db';

export async function GET(req) {
  try {
    // Simple test query to check connection
    const result = await pool.query('SELECT NOW()');
    return new Response(JSON.stringify({ connected: true, time: result.rows[0] }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ connected: false, error: err.message }), { status: 500 });
  }
}
