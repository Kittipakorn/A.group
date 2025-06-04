"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface ImageShowProps {
    data: string;
    onClose: () => void;
}

export default function ImageShow({ data, onClose }: ImageShowProps) {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-40">
            <div className="absolute inset-0 bg-black  opacity-60 z-40"></div>    
                <div className="relative w-full h-full max-w-[90%] max-h-[90%] rounded-lg flex items-center justify-center">
                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                        </div>
                    )}

                    <div className="z-50 relative w-full h-full aspect-[8.27/11.69] flex items-center justify-center">
                        <Image alt={`Selected Image ${data}`} src={data} className={`object-contain rounded-lg ${isLoading ? "opacity-0" : "opacity-100"}`} layout="fill" onLoad={() => setIsLoading(false)} />
                    </div>

                    <button className="absolute z-50 pt-1 max-md:-right-3 opacity-60 top-5 right-5 text-black bg-white text-2xl rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200" onClick={() => { onClose(); }}>
                        &times;
                    </button>

                </div>
            </div>
        </>
    );
}

