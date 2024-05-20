import React, { useState } from "react";

function Search({ onSearching }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    onSearching(search);
  };

  return (
    <div className="ui large fluid icon input">
      <input
        value={search}
        onChange={handleChange}
        type="text"
        placeholder="Search your Recent Transactions"
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;

