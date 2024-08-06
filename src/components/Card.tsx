import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

interface CardProps {
  result: { [key: string]: any }; // Adjust the type based on your data structure
}

export default function Card({ result }: CardProps) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400  sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          alt="movie image"
          className="sm:rounded-t-lg w-full group-hover:opacity-75 transition-opacity duration-300"
        ></Image>
        <div className="p-2">
          <h2 className="text-lg font-bold mb-2">
            {result.title || result.name}
          </h2>
          <p className="line-clamp-2 text-md mb-2">{result.overview}</p>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
