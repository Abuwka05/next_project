import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const word = searchParams.get('word');

  if (!word) {
    return NextResponse.json(
      { error: 'Word is required' },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Word not found' },
        { status: 404 }
      );
    }

    const data = await res.json();

    const meaning =
      data[0]?.meanings?.[0]?.definitions?.[0]?.definition ?? '';

    return NextResponse.json({ definition: meaning });
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch definition' },
      { status: 500 }
    );
  }
}
