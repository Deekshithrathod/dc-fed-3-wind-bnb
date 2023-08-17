import "./SearchHeading.css";

const SearchHeading = ({ count = 10 }: { count?: number }) => {
  return (
    <div className="search-results-heading">
      <h1>Stays in Finland</h1>
      <p>{count - 1}+ search results</p>
    </div>
  );
};

export default SearchHeading;
