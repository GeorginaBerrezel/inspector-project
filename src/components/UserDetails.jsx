// components/UserDetails.jsx
import React from 'react';

const UserDetails = ({ username, userDetails, userRepos }) => {
    const formatDate = (dateString) => {
        const options = { day: 'numeric', year: 'numeric', month: 'short',  };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex mb-8">
            {userDetails && (
                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${userDetails.avatar_url})` }} title={`Avatar de ${username}`}>
                </div>
            )}
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="flex items-center">
                    {userDetails && (
                        <img className="w-10 h-10 rounded-full mr-4" src={userDetails.avatar_url} alt={`Avatar de ${username}`} />
                    )}
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">{username}</p>
                        {userDetails && (
                            <p className="text-gray-600">Since {formatDate(userDetails.created_at)}</p>
                        )}
                        <p className="text-gray-600 mb-2">Followers : {userDetails.followers}</p>
                    </div>
                </div>
                {userDetails && (
                    <div>
                        <p className="text-gray-900 font-bold text-xl mb-2">Nombre de dépôts publics : {userDetails.public_repos}</p>
                        {userDetails.bio && (
                            <div>
                                <h3 className="text-lg font-bold mt-4">Description :</h3>
                                <p className="text-gray-700 text-base">{userDetails.bio}</p>
                            </div>
                        )}
                        <h3 className="text-lg font-bold mt-4">Dépôts publics :</h3>
                        <ul className="mt-2">
                            {userRepos.map((repo) => (
                                <li key={repo.id}>{repo.name}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserDetails;
