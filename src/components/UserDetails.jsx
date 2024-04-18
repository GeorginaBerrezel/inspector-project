// components/UserDetails.jsx
import React from 'react';

const UserDetails = ({ username, userDetails, userRepos }) => {
    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-2">
                Détails de l'utilisateur {username} :
            </h2>
            <p>Nombre de dépôts publics : {userDetails.public_repos}</p>
            <h3 className="text-lg font-bold mt-4">Dépôts publics :</h3>
            <ul className="mt-2">
                {userRepos.map((repo) => (
                    <li key={repo.id}>{repo.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserDetails;
