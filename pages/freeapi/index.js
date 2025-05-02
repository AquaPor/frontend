'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RickAndMorty() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        async function fetchCharacters() {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character');
                if (!response.ok) {
                    throw new Error('Failed to fetch characters');
                }
                const data = await response.json();
                setCharacters(data.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchCharacters();
    }, []);

    if (loading) return (
        <div className="flex items-center justify-center h-screen bg-black">
            <div className="text-center">
                <div className="animate-spin w-16 h-16 border-4 border-t-green-400 border-r-blue-500 border-b-yellow-400 border-l-purple-500 rounded-full mb-4"></div>
                <p className="text-green-400 text-xl font-bold animate-pulse">Loading interdimensional data...</p>
            </div>
        </div>
    );

    if (error) return (
        <div className="flex items-center justify-center h-screen bg-black">
            <div className="bg-red-900 text-yellow-300 p-6 rounded-lg border-2 border-red-500 max-w-md text-center">
                <h2 className="text-2xl font-bold mb-2">WUBBA LUBBA DUB DUB!</h2>
                <p>Something went wrong: {error}</p>
                <p className="mt-2 text-sm">The Council of Ricks is investigating the issue.</p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-black p-6 text-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-green-400">
                        Rick and Morty <span className="text-yellow-300">Multiverse</span>
                    </h1>
                    <p className="text-blue-300 text-lg">Explore characters from across dimensions</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {characters.map((character) => (
                        <div 
                            key={character.id} 
                            className="border-4 border-green-500 rounded-lg overflow-hidden bg-gray-900 h-full flex flex-col"
                        >
                            <div className="relative w-full h-48">
                                <Image 
                                    src={character.image} 
                                    alt={character.name} 
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    priority
                                />

                                <div className="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium text-white"
                                    style={{
                                        backgroundColor: character.status === 'Alive' ? '#10b981' : 
                                                        character.status === 'Dead' ? '#ef4444' : 
                                                        '#6b7280'
                                    }}>
                                    {character.status}
                                </div>
                            </div>

                            <div className="bg-gray-800 p-3 w-full">
                                <h2 className="text-xl font-bold text-white truncate">{character.name}</h2>
                            </div>
                            
                            <div className="p-4 flex-grow flex flex-col">
                                <div className="flex justify-between mb-4">
                                    <span className="text-yellow-300 font-medium">{character.species}</span>
                                    <span className="text-blue-400">{character.gender}</span>
                                </div>
                                
                                <div className="text-sm text-gray-300 mb-4 flex-grow">
                                    <div className="mb-1">
                                        <span className="text-gray-400">Origin: </span>
                                        <span className="text-gray-200">{character.origin.name}</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-400">Location: </span>
                                        <span className="text-gray-200">{character.location.name}</span>
                                    </div>
                                </div>
                                
                                <button 
                                    className="w-full py-2 px-4 bg-green-600 hover:bg-green-500 text-white rounded transition-colors duration-200 font-medium flex items-center justify-center mt-auto"
                                    onClick={() => router.push(`/freeapi/${character.id}`)}
                                >
                                    <span>View Details</span>
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}