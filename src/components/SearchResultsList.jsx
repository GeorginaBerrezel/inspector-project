// components/SearchResultsList.jsx
import React from 'react';

const SearchResultsList = ({ results, onUserSelect }) => {
    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-2">Résultats de la recherche :</h2>
            <ul className="mt-4">
                {results.map((user) => (
                    <li key={user.id}>
                        <button onClick={() => onUserSelect(user.login)}>
                            {user.login}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResultsList;
