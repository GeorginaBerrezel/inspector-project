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
            console.error('Error during search:', error);
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
            console.error('Error retrieving user details:', error);
            setUserDetails(null);
            setUserRepos([]);
        }
        setSelectedUser(username);
    };

    const clearSearch = () => {
        setSearchResults([]);
    };

    const hideSearchResults = () => {
        setSearchResults([]);
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <h1 className="text-3xl font-bold mb-4">GitHub Research</h1>
            <div className="p-4">
                <SearchBar onSearch={handleSearch} />
                <div className="flex-1">
                    {searchResults.length > 0 && (
                        <SearchResultsList
                            results={searchResults}
                            onUserSelect={handleUserSelect}
                            clearSearch={clearSearch} // search field reset function
                            hideSearchResults={hideSearchResults} // hide search results
                            selectedUser={selectedUser} // selected user to SearchResultList
                            setSelectedUser={setSelectedUser} // update the selected user
                            setUserDetails={setUserDetails} // update user details
                            setUserRepos={setUserRepos} // update user repositories
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
