interface ResultsProps {
  results: Array<{ [key: string]: any }>; // Type as per the data structure
}

export default function Results({ results }: ResultsProps) {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          <h2>{result.original_title}</h2>
        </div>
      ))}
    </div>
  );
}
