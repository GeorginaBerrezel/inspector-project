import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setQuery(inputValue);
        onSearch(inputValue);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleSearch = () => {
        if (query.trim() !== '') {
            onSearch(query);
        }
    };

    return (
        <div className="flex justify-center">
            <div className="flex items-center space-x-4">
                <input
                    className="border border-gray-700 rounded-md py-2 px-4 w-auto focus:outline-none focus:ring focus:ring-blue-500 text-orange-400"
                    type="text"
                    placeholder="Search GitHub user"
                    value={query}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
                <button
                    className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-orange-500"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
