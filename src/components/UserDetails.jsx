import React, { useState } from 'react';

const UserDetails = ({ username, userDetails, userRepos }) => {
    const [isOpen, setIsOpen] = useState(false);

    const formatDate = (dateString) => {
        const options = { day: 'numeric', year: 'numeric', month: 'short' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div onClick={handleOpenModal} className="cursor-pointer max-w-sm w-full lg:max-w-full lg:flex mb-8">
                {userDetails && (
                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${userDetails.avatar_url})` }} title={`Avatar of ${username}`}>
                    </div>
                )}
                <div className="border-r border-b border-l border-gray-600 lg:border-l-0 lg:border-t lg:border-gray-600 bg-gray-900 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="flex items-center">
                        {userDetails && (
                            <img className="w-10 h-10 rounded-full mr-4" src={userDetails.avatar_url} alt={`Avatar of ${username}`} />
                        )}
                        <div className="text-sm">
                            <p className="text-white leading-none">{username}</p>
                            {userDetails && (
                                <p className="text-gray-400">Since {formatDate(userDetails.created_at)}</p>
                            )}
                            <p className="text-gray-400 mb-2">Followers: {userDetails.followers}</p>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex justify-center items-center">
                    <div className="bg-gray-900 bg-opacity-50 fixed inset-0 overflow-y-auto flex justify-center items-center">
                        <div className="bg-gray-800 p-4 rounded-lg max-w-lg">
                            <button onClick={handleCloseModal} className="absolute top-0 right-0 m-2 text-gray-400 hover:text-gray-300">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                            <div className="text-center">
                                {userDetails && (
                                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${userDetails.avatar_url})` }} title={`Avatar of ${username}`}>
                                    </div>
                                )}
                                <div className="bg-gray-800 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                    <div className="flex items-center">
                                        {userDetails && (
                                            <img className="w-10 h-10 rounded-full mr-4" src={userDetails.avatar_url} alt={`Avatar of ${username}`} />
                                        )}
                                        <div className="text-sm">
                                            <p className="text-white leading-none">{username}</p>
                                            {userDetails && (
                                                <p className="text-gray-400">Since {formatDate(userDetails.created_at)}</p>
                                            )}
                                            <p className="text-gray-400 mb-2">Followers: {userDetails.followers}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {userDetails && (
                                <div className="max-h-60 overflow-y-auto">
                                    <p className="text-white font-bold text-xl mb-2">Number of public repositories: {userDetails.public_repos}</p>
                                    {userDetails.bio && (
                                        <div>
                                            <h3 className="text-lg font-bold mt-4">Description:</h3>
                                            <p className="text-gray-400 text-base">{userDetails.bio}</p>
                                        </div>
                                    )}
                                    <h3 className="text-gray-100 text-lg font-bold mt-4">Public repositories:</h3>
                                    <ul className="mt-2">
                                        {userRepos.map((repo) => (
                                            <li className="text-gray-400" key={repo.id}>{repo.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserDetails;
