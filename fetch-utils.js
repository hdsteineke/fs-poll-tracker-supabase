const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkamZ3c3djcWxzZnVodGVtYnVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc1NTM1ODksImV4cCI6MTk2MzEyOTU4OX0.UL14baUjdJa7Tgx9CS1Ky_ZJ78nsDmyOwDEPePPJe10';
const SUPABASE_URL = 'https://kdjfwswcqlsfuhtembua.supabase.co';

const client = createClient(SUPABASE_URL, SUPABASE_KEY);


export async function createPoll(pastPoll) {
    const response = await client
        .from('past_polls')
        .insert(pastPoll);

    return checkError(response);
}

export async function getPolls() {
    const response = await client
        .from('past_polls')
        .select('*');

    return checkError(response);
}

function checkError({ data, error}) {
    return error ? console.error(error) : data;
}