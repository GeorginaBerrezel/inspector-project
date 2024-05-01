import React from 'react';

const SearchResultsList = ({ results, onUserSelect, selectedUser, setSelectedUser, setUserDetails, setUserRepos, clearSearch }) => {
    const handleDeselectUser = () => {
        setSelectedUser(null);
        setUserDetails(null);
        setUserRepos([]);
        clearSearch();
    };

    const filteredResults = selectedUser ? results.filter(user => user.login === selectedUser) : results;

    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-2">Search Results:</h2>
            <ul className="mt-4 space-y-2">
                {filteredResults.map((user) => (
                    <li key={user.id} className="flex items-center">
                        <button
                            onClick={() => onUserSelect(user.login)}
                            className="block w-full px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-orange-300 transition-colors duration-300"
                        >
                            {user.login}
                        </button>
                        {selectedUser && user.login === selectedUser && (
                            <button onClick={handleDeselectUser} className="ml-2">
                                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResultsList;
