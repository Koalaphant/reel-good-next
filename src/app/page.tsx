import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

interface MovieData {
  results: Array<{ [key: string]: any }>;
}

interface HomeProps {
  searchParams: {
    genre?: string;
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  // Check if the response is okay before parsing JSON
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  // Await the JSON data after checking response
  const data: MovieData = await res.json();

  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
