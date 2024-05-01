import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResultsList from './components/SearchResultsList';
import UserDetails from './components/UserDetails';
import { githubRequest } from './api';

function App() {
    const [searchResults, setSearchResults] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [userDetails, setUserDetails] = useState(null);
    const [userRepos, setUserRepos] = useState([]);

    const handleSearch = async (query) => {
        try {
            const response = await githubRequest(
                `https://api.github.com/search/users?q=${query}`
            );
            setSearchResults(response.items || []);
        } catch (error) {
            console.error('Erreur lors de la recherche :', error);
            setSearchResults([]);
        }
    };

    const handleUserSelect = async (username) => {
        try {
            const userResponse = await githubRequest(`https://api.github.com/users/${username}`);
            const reposResponse = await githubRequest(`https://api.github.com/users/${username}/repos`);
            setUserDetails(userResponse);
            setUserRepos(reposResponse);
        } catch (error) {
            console.error('Erreur lors de la récupération des détails de l\'utilisateur :', error);
            setUserDetails(null);
            setUserRepos([]);
        }
        setSelectedUser(username);
    };

    const clearSearch = () => {
        setSearchResults([]);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">GitHub Research</h1>
            <div className="p-4">
                <SearchBar onSearch={handleSearch} />
                <div className="flex-1">
                    {searchResults.length > 0 && (
                        <SearchResultsList
                            results={searchResults}
                            onUserSelect={handleUserSelect}
                            clearSearch={clearSearch} // Passer la fonction de réinitialisation du champ de recherche
                            selectedUser={selectedUser} // Passer l'utilisateur sélectionné à SearchResultList
                            setSelectedUser={setSelectedUser} // Passer la fonction pour mettre à jour l'utilisateur sélectionné
                            setUserDetails={setUserDetails} // Passer la fonction pour mettre à jour les détails de l'utilisateur
                            setUserRepos={setUserRepos} // Passer la fonction pour mettre à jour les dépôts de l'utilisateur
                        />
                    )}
                </div>
                {selectedUser && userDetails && (
                    <div className="flex-1 mt-8">
                        <UserDetails username={selectedUser} userDetails={userDetails} userRepos={userRepos} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
