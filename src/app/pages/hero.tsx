"use client";

import { useEffect,useState } from "react";


export default function Hero() {

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <>
            <section className="relative bg-[url(/images/bg.png)] bg-cover bg-right text-[#002f5e] md:py-32 xl:py-40 py-28 px-6 2xl:py-60 text-center">
                <div className="absolute lg:hidden inset-0 bg-white opacity-60 z-0"></div>    
                <div className="absolute inset-0 bg-gradient-to-r from-[#002f5e] opacity-20 z-0"></div>
                
                
                <div className="relative flex flex-col lg:pr-[39vw] md:pl-10 justify-center">
                    <h1 className={`text-3xl md:text-5xl font-extrabold mb-4 transition-all duration-800 ${isLoaded? "" : " translate-y-10 opacity-0"} `}>
                        A.group Air & Network ติดตั้งแอร์ ล้างแอร์ และไฟฟ้าครบวงจร
                    </h1>
                    <p className={`max-w-3xl mx-auto mb-16 text-md md:text-xl transition-all delay-300 duration-1000 ${isLoaded? "" : " translate-y-10 opacity-0"} `}>
                        &quot;ติดตั้งแอร์ ล้างแอร์ เดินสายไฟ โดยทีมช่างมืออาชีพ&quot;
                    </p>

                
                    
                    <div className={`flex flex-col pt-2 md:flex-row gap-5 justify-center transition-all delay-500 duration-1000 ${isLoaded? "" : " translate-y-10 opacity-0"} `}>
                        <a href="tel:089-190-0277" className="w-full md:w-5/12 inline-block bg-[#002f5e] text-white font-semibold px-6 py-3 rounded shadow hover:scale-105 hover:bg-[#314e75] transition" >
                            โทรเลย: 089-190-0277 (ช่างเอ)
                        </a>
                        <a href="https://m.me/100069191867358" target="_blank" className="gap-4 w-full md:w-5/12 inline-block border border-[#002f5e] text-[#002f5e] px-6 py-3 rounded hover:scale-105 transition" >
                            <div className="flex gap-3 w-full justify-center h-full">
                                <img className="w-5 h-5 my-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/768px-Facebook_Messenger_logo_2020.svg.png" alt="messenger" />
                                <div className="my-auto">ขอรับคำปรึกษาฟรี</div>
                            </div>
                        </a>
                    </div>
                    <p className={`max-w-3xl mx-auto mt-5 text-gray-700 text-sm transition-all delay-700 duration-1000 ${isLoaded? "" : " translate-y-10 opacity-0"} `}>
                        ให้บริการในนครราชสีมาและจังหวัดใกล้เคียง จังหวัดอื่น ๆ ติดต่อรายละเอียดเพิ่มเติม
                    </p>
                </div>
            </section>
        </>
    );
}