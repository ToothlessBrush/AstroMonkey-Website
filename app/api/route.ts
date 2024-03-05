
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

const API_KEY = process.env.MAILGUN_API_KEY || '';
const DOMAIN = process.env.MAILGUN_DOMAIN || '';

export async function GET() {
    return NextResponse.json({
        hello: "world",
    })
}
