"use client"; // Required for interactivity (useState)

import { useState } from "react";
import { posts, Post } from "../Posts"; // Adjust the import path as needed

export default function GalleryPage() {
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            {/* Expanded Post Modal */}
            {selectedPost && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-xl font-bold text-gray-900">Szczegóły posta</h2>
                                <button
                                    onClick={() => setSelectedPost(null)}
                                    className="text-2xl text-gray-500 hover:text-gray-700"
                                >
                                    ✕
                                </button>
                            </div>
                            <p className="text-gray-700 mb-6">{selectedPost.text}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {selectedPost.pictures.map((pic, index) => (
                                    <img
                                        key={index}
                                        src={pic}
                                        alt={`Gallery image ${index + 1}`}
                                        className="w-full h-auto rounded-lg object-cover"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Gallery Grid */}
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Nasza <span className="text-amber-500">Galeria</span>
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedPost(post)}
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                        >
                            {/* Show first image as thumbnail */}
                            {post.pictures.length > 0 && (
                                <img
                                    src={post.pictures[0]}
                                    alt={`Thumbnail for post ${index + 1}`}
                                    className="w-full h-48 object-cover"
                                />
                            )}
                            <div className="p-4">
                                <p className="text-gray-700 line-clamp-2">{post.text}</p>
                                <p className="text-sm text-gray-500 mt-2">
                                    {post.pictures.length} photo{post.pictures.length !== 1 ? "s" : ""}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
