import { useState } from 'react';

const SearchTodo = ({ todos }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const results = todos.filter(todo => todo.title.toLowerCase().includes(term.toLowerCase()));
    setSearchResults(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchTodo;
