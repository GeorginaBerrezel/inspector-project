import React from 'react';

const SearchResultsList = ({ results, onUserSelect, selectedUser, setSelectedUser, setUserDetails, setUserRepos, clearSearch }) => {
    const handleDeselectUser = () => {
        setSelectedUser(null);
        setUserDetails(null);
        setUserRepos([]);
        clearSearch();
    };

    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-2">Résultats de la recherche :</h2>
            <ul className="mt-4 space-y-2">
                {results.map((user) => (
                    <li key={user.id} className="flex items-center">
                        <button
                            onClick={() => onUserSelect(user.login)}
                            className="block w-full px-4 py-2 text-black bg-white rounded-md hover:bg-orange-300 transition-colors duration-300"
                        >
                            {user.login}
                        </button>
                    </li>
                ))}
            </ul>
            {selectedUser && (
                <button className="mt-4" onClick={handleDeselectUser}>
                    Désélectionner l'utilisateur
                </button>
            )}
        </div>
    );
};

export default SearchResultsList;
