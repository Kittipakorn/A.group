"use client";

import Image from 'next/image';

export default function Messenger() {

    return (
        <>
        <div className='fixed bottom-4 right-6 z-10'>
            <a href="https://m.me/100069191867358" target="_blank" className="flex items-center gap-2">
                <div className="bg-gradient-to-br from-purple-600 to-blue-500 text-white  px-2 py-1 rounded-md">
                    ติดต่อสอบถาม
                </div>
                <Image
                    width={100}
                    height={100}
                    className="w-10 h-10"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/768px-Facebook_Messenger_logo_2020.svg.png"
                    alt="messenger"
                />
            </a>
        </div>
        </>
    );
}