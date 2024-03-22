import Link from "next/link";
import { API_URL } from "../../components/config";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  const response = fetch(API_URL).then((response) => response.json());
  return response;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
