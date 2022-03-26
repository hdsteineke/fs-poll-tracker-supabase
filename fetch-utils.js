const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkamZ3c3djcWxzZnVodGVtYnVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc1NTM1ODksImV4cCI6MTk2MzEyOTU4OX0.UL14baUjdJa7Tgx9CS1Ky_ZJ78nsDmyOwDEPePPJe10';
const SUPABASE_URL = 'https://kdjfwswcqlsfuhtembua.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


export async function createPoll(pastPoll) {
    const response = await client
        .from('past_polls')
        .insert(pastPoll);

    return checkError(response);
}

export async function getPolls() {
    const response = await client
        .from('past_polls')
        .select();

    return checkError(response);
}


//Is this when the user is initially assigned an ID upon signing in?
export async function getUser() {
    return client.auth.session();
}


//connects the id to the user for tracking their activity and access to polls
export async function checkAuth() {
    const user = await getUser();
//returns unauthorized user to Home page
    if (!user) location.replace('../');
}


//takes user to polls page if they are authorized?
export async function redirectToPolls() {
    if (await getUser()) {
        location.replace('./polls');
    }
}

//stores username and password in Supabase for future use (creates an account for user)
export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

//sends sign-in information to Supabase to check against existing user accounts, and logs user in if info matches existing account
export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return window.location.href = '../';
}

function checkError({ data, error}) {
    return error ? console.error(error) : data;
}

