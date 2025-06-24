"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import ImageShow from '../components/ImageShow';

type ImageFile = {
  src: string;
  alt: string;
};

export default function Portfolio() {
  const [selectedData, setSelectedData] = useState<string | null>(null);
  const [portfolio, setPortfolio] = useState<ImageFile[]>([]);

  useEffect(() => {
    async function fetchImages() {
      const FOLDER_ID = '1bJdXn9wfEUIrd-uoVOGUWZfmKOCLV5K5';
      const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
      if (!API_KEY) {
        console.error('Missing Google API key');
        return;
      }
      const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&key=${API_KEY}&fields=files(id,name,mimeType)`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (!data.files) {
          setPortfolio([]);
          return;
        }
        const images = data.files
          .filter((file: any) => file.mimeType.startsWith('image/'))
          .map((file: any) => ({
            src: `https://drive.google.com/uc?export=view&id=${file.id}`,
            alt: file.name,
          }));
        setPortfolio(images);
      } catch (error) {
        console.error('Failed to fetch images from Google Drive', error);
      }
    }
    fetchImages();
  }, []);

  return (
    <>
      <section id="portfolio" className="py-16 px-6 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-7 text-[#002f5e]">
            ขอบคุณทุกท่านที่ไว้ใจทีมงานเอกรุ๊ป
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {portfolio.map((e) => (
              <div key={e.src} onClick={() => setSelectedData(e.src)}>
                <Image
                  src={e.src}
                  alt={e.alt}
                  width={300}
                  height={300}
                  className="rounded-lg object-cover w-full h-52 shadow-md hover:scale-105 transition transform border border-gray-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedData && (
        <ImageShow data={selectedData} onClose={() => setSelectedData(null)} />
      )}
    </>
  );
}
