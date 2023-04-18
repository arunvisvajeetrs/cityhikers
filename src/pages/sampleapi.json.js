export async function get({params, request}) {
    return {
      body: JSON.stringify({
        name: 'Try Astro',
        body: 'Astro demo in the url',
        url: 'https://localhost:3000/',
      }),
    };
  }