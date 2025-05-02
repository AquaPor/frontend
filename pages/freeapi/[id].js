'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function CharacterDetail() {
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        async function fetchCharacter() {
            if (!id) return;

            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
                if (!response.ok) {
                    throw new Error('Character not found');
                }
                const data = await response.json();
                setCharacter(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchCharacter();
    }, [id]);

    if (loading) return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="animate-pulse flex flex-col items-center">
                <div className="w-32 h-32 bg-green-500 rounded-full opacity-75 mb-4"></div>
                <p className="text-green-400 text-2xl font-bold">Loading...</p>
            </div>
        </div>
    );
    
    if (error) return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
                <p className="text-red-500 text-2xl mb-4">⚠️ {error}</p>
                <button 
                    onClick={() => router.push('/')} 
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg transition duration-300"
                >
                    Return Home
                </button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6 relative">
            <button 
                onClick={() => router.back()} 
                className="fixed top-6 left-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-10 flex items-center justify-center"
                aria-label="Go back"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            </button>
            
            <div className="max-w-4xl mx-auto mt-16">
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-102">
                    <div className="relative w-full h-96 overflow-hidden">
                        <div className="absolute inset-0 bg-green-500 opacity-20 animate-pulse"></div>
                        <Image 
    src={character.image} 
    alt={character.name} 
    layout="fill"
    objectFit="cover"
    priority
/>

                    </div>
                    
                    <div className="p-8 relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent opacity-50"></div>
                        
                        <div className="relative z-10">
                            <h1 className="text-5xl font-bold text-center mb-6 text-green-400 tracking-wider">
                                {character.name}
                            </h1>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                <div className="bg-gray-900 p-6 rounded-lg shadow-inner">
                                    <div className="flex items-center mb-4">
                                        <div className={`w-4 h-4 rounded-full mr-2 ${character.status === 'Alive' ? 'bg-green-500' : character.status === 'Dead' ? 'bg-red-500' : 'bg-gray-500'}`}></div>
                                        <h2 className="text-xl font-semibold">Status: {character.status}</h2>
                                    </div>
                                    <p className="text-lg text-gray-300 mb-3">Species: <span className="text-yellow-300">{character.species}</span></p>
                                    <p className="text-lg text-gray-300">Gender: <span className="text-yellow-300">{character.gender}</span></p>
                                </div>
                                
                                <div className="bg-gray-900 p-6 rounded-lg shadow-inner">
                                    <h2 className="text-xl font-semibold mb-4">Location Info</h2>
                                    <p className="text-lg text-gray-300 mb-3">Origin: <span className="text-blue-400">{character.origin.name}</span></p>
                                    <p className="text-lg text-gray-300">Last seen: <span className="text-blue-400">{character.location.name}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="text-center mt-6 text-gray-500">
                    <p>Data from Rick and Morty API</p>
                </div>
            </div>
        </div>
    );
}