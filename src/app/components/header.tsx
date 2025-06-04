"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center py-3 px-6">
                    <div className='flex items-center gap-2'>
                        <Image 
                            src="/images/logo.png"
                            alt="logo"
                            width={500}
                            height={500} 
                            className='h-10 w-12'
                        />

                        <div className="text-2xl font-bold text-primary">A.GROUP</div>
                    </div>

                    <nav className={`hidden lg:flex w-xl justify-between text-secondary font-medium`}>
                        <a href="#" className="hover:text-gray-800 hover:underline hover:scale-105">หน้าแรก</a>
                        <a href="#services" className="hover:text-gray-800 hover:underline hover:scale-105">บริการ</a>
                        <a href="#portfolio" className="hover:text-gray-800 hover:underline hover:scale-105">ผลงาน</a>
                        {/* <a href="#testimonials" className="hover:text-gray-800 hover:underline hover:scale-105">รีวิวจากลูกค้า</a> */}
                        <a href="#contact" className="hover:text-gray-800 hover:underline hover:scale-105">ติดต่อเรา</a>
                    </nav>
                    <a href="#contact" className="hidden lg:inline-block bg-[#002f5e] text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                        ติดต่อจองคิว
                    </a>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden focus:outline-none">
                        <svg className="w-6 h-6 text-gray-900"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                {/* Mobile Menu */}
                {menuOpen && (
                    <nav className="lg:hidden text-center text-lg bg-white shadow-md px-6 py-4 space-y-3">
                        <a href="#" className="block hover:text-gray-600">หน้าแรก</a>
                        <a href="#services" className="block hover:text-gray-600">บริการ</a>
                        <a href="#portfolio" className="block hover:text-gray-600">ผลงาน</a>
                        {/* <a href="#testimonials" className="block hover:text-gray-600">รีวิวลูกค้า</a> */}
                        <a href="#contact" className="block hover:text-gray-600">ติดต่อเรา</a>
                        <a href="#contact" className="block bg-[#002f5e] text-white text-center py-2 rounded hover:bg-gray-800">
                            ติดต่อจองคิว
                        </a>
                    </nav>
                )}
            </header>
        </>
    );
}