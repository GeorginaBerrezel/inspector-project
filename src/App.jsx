import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import { githubRequest } from './api';

function App() {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (query) => {
        if (query.trim() === '') return;

        try {
            const response = await githubRequest(
                `https://api.github.com/search/users?q=${query}`
            );

            // Affiche la réponse de l'API dans la console
            console.log('Réponse de l\'API pour la recherche :', response);

            // Met à jour les résultats de la recherche dans l'état local
            setSearchResults(response.items || []);
        } catch (error) {
            console.error('Erreur lors de la recherche :', error);

            // En cas d'erreur, réinitialise les résultats de la recherche
            setSearchResults([]);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">GitHub Research</h1>
            <SearchBar onSearch={handleSearch} />

            {/* Affiche les résultats de la recherche dans la console */}
            {searchResults.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-xl font-bold mb-2">Résultats de la recherche :</h2>
                    <ul className="mt-4">
                        {searchResults.map((user) => (
                            <li key={user.id}>{user.login}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default App;
