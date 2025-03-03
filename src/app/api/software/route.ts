import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import { Software } from '@/types/software';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const validCategories = [
  'Bildbehandling',
  'Videoredigering',
  'Ljudredigering',
  'Kontorsverktyg',
  'Utvecklingsverktyg',
  'Webbläsare',
  'Säkerhet',
  'Kommunikation',
  'Systemverktyg'
] as const;

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('software')
      .select('*');

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'description', 'category', 'website', 'image_url'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate category
    if (!validCategories.includes(body.category)) {
      return NextResponse.json(
        { error: 'Invalid category' },
        { status: 400 }
      );
    }

    // Validate URLs
    try {
      new URL(body.website);
      new URL(body.image_url);
    } catch {
      return NextResponse.json(
        { error: 'Invalid URL format' },
        { status: 400 }
      );
    }

    // Insert new software
    const { data, error } = await supabase
      .from('software')
      .insert([
        {
          name: body.name,
          description: body.description,
          category: body.category,
          website: body.website,
          image_url: body.image_url,
        }
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to add software' },
        { status: 500 }
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 