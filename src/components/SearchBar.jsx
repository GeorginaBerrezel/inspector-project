import React, {useState} from 'react';

const SearchBar = ({onSearch}) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        if (query.trim() !== '') {
            onSearch(query);
        }
    };

    return (
        <div className="flex items-center space-x-4">
            <input
                className="border border-gray-300 rounded-md py-2 px-4 w-auto focus:outline-none focus:ring focus:ring-blue-500"
                type="text"
                placeholder="Search GitHub user"
                value={query}
                onChange={handleInputChange}
            />
            <button
                className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
