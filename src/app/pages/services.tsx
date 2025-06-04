"use client";

import { useEffect,useState,useRef } from "react";
import Image from 'next/image';

export default function Services() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsLoaded(true);

              const timer = setTimeout(() => {
                setIsFinished(true);
              }, 900);

              return () => clearTimeout(timer);
            }
          },
          {
            threshold: 0.2,
          }
        );
    
        if (sectionRef.current) {
          observer.observe(sectionRef.current);
        }
    
        return () => {
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        };
      }, []);
    
    



    const services = [{
        title: "Air Conditioning",
        description: "ติดตั้ง ซ่อมบำรุง ล้างแอร์ทุกยี่ห้อ พร้อมบริการตรวจเช็คระบบ",
        img: "https://scontent.fbkk12-5.fna.fbcdn.net/v/t39.30808-6/481253390_946344031015317_8845112066100670795_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0nG1f7bQSjAQ7kNvwEe_yxs&_nc_oc=AdkQiwXYzPs_jwvBYPII36TPAKEAuuMp12GFlAsqmFm4AYq9QGHoimWdAu6HGgRz2gcwUdxrrF8pZM13Obc1xOTJ&_nc_zt=23&_nc_ht=scontent.fbkk12-5.fna&_nc_gid=FrCB0ItIOTfMWwqbSlJkbw&oh=00_AfL67g0iruschF1Aqt59rledj3mvmVIMtNB_eoVVmgdV9g&oe=6845B3FD",
        classname: "lg:col-span-4 lg:col-end-5 md:col-span-2 md:col-start-0  md:col-end-3"
    },
    {
        title: "Electric",
        description: "งานระบบไฟฟ้าภายในอาคาร บ้านและสำนักงาน งานเดินสายไฟ อุปกรณ์ไฟฟ้า",
        img: "https://scontent.fbkk8-4.fna.fbcdn.net/v/t39.30808-6/480732615_9545514225470737_7439761881051654826_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_1nVRj3Twm8Q7kNvwF9bA5N&_nc_oc=Adl1fujCLTRrXcjBZ11e_V2S6vPYLE6vriLAz1T9wwvP2EWKbrHCVCdr1GUxMC8xhyUVXgR_RFdQt8l7ZR5bT3DM&_nc_zt=23&_nc_ht=scontent.fbkk8-4.fna&_nc_gid=jOGRaWVOQq_4x_FAkL9-cA&oh=00_AfLzMrqHl_j6z68gguVjrTvstRU2j7Tcnag2w4X0Do9_0Q&oe=6845CEAF",
        classname: "lg:col-start-5 lg:col-end-9 md:col-span-2 md:col-start-3  md:col-end-5"
    },
    {
        title: "Security",
        description: "ติดตั้งกล้องวงจรปิด ระบบสัญญาณกันขโมย ระบบควบคุมการเข้าออก",
        img: "https://scontent.fbkk12-1.fna.fbcdn.net/v/t39.30808-6/490354367_9895341827154640_1559686703643752522_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=uRQlESiykH0Q7kNvwGoixH3&_nc_oc=Adnz-veyE5pkdn63kDN9XKfkqXLYCjQlB-sM7KwXAGZoqqghQcl69G6BvQXJiC3I0J7rswKAsoNzVHYz3Iwigggu&_nc_zt=23&_nc_ht=scontent.fbkk12-1.fna&_nc_gid=Zm2N71D0arlTuBBLOxZoEA&oh=00_AfJdPY2m33bFGEwjDOXDH7w24sgqbGj1i6BOny70Bcr23Q&oe=6845CCC8",
        classname: "lg:col-start-9 lg:col-end-13 md:col-span-2 md:col-start-0  md:col-end-3"
    },
    {
        title: "Live Streaming",
        description: "ถ่ายทอดสดผ่านหลายแพลตฟอร์ม รองรับการถ่ายทอดสดทุกประเภท",
        img: "https://scontent.fbkk12-4.fna.fbcdn.net/v/t39.30808-6/490338929_9881609808527842_3134256234072605535_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OFSA7ffCOHcQ7kNvwFJomBu&_nc_oc=AdloC2xU9Lw6tTQ0by3yUYIsUWyXF0KT6lgSMaNCk2snfXyydFCfhn22ubcLpdu16SH6yGoi0WSQqt42hVounxyX&_nc_zt=23&_nc_ht=scontent.fbkk12-4.fna&_nc_gid=v65isroe9P-GP0sLUvxgzg&oh=00_AfLHHQdCEAoF8aUiVALLTbLjq0VDTKdCwSVSAZYxVMUo5g&oe=6845DB39",
        classname: "lg:col-start-3 lg:col-end-7 md:col-span-2 md:col-start-3  md:col-end-5"
    },
    {
        title: "Network",
        description: "ออกแบบและติดตั้งระบบเครือข่ายอินเทอร์เน็ต รองรับทั้งบ้านและสำนักงาน",
        img: "https://scontent.fbkk8-2.fna.fbcdn.net/v/t39.30808-6/490380139_9892851414070348_6640499077348230455_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=e7zjA_bv9uwQ7kNvwER5dEk&_nc_oc=AdmEOGC6xjqUddmeYfhC-MiF61gM6vqTG3XeOfJQ9C7LUUHoMniAWD5TmdY--LqS4wx9R-ur3zce86ara5IjfwgH&_nc_zt=23&_nc_ht=scontent.fbkk8-2.fna&_nc_gid=r3rZZLIrl2PcCF5QpTitUA&oh=00_AfI1BTvqQv9srF-MT6Vhbo4qzxvwxV3ullQWR7Q0GGi2vw&oe=6845BE50",
        classname: "lg:col-start-7 lg:col-end-11 md:col-span-2 md:col-start-2  md:col-end-4"
    },
    ]

    return (
        <>
            <section id="services" className="py-16 px-6 bg-gray-100">
                <div className="container mx-auto max-w-6xl">
                    <h2 className={`text-3xl font-bold text-[#002f5e] text-center mb-12 transition-all duration-700 ${isLoaded? "" : " translate-y-10 opacity-0"} `}>
                        บริการที่ตอบสนองทุกความต้องการ
                    </h2>
                    
                    <div className="grid grid-rows-2 lg:grid-cols-12 md:grid-cols-4 gap-8" ref={sectionRef}>
                        {
                            services.map((e) =>
                                <div key={e.title} className={`bg-white p-6 rounded-lg ${e.classname} shadow hover:shadow-lg border border-gray-300 transition-all ${isFinished? "duration-75" : "duration-1000"}  ${isLoaded? "" : " translate-y-10 opacity-0"} `}>
                                    <div className="relative w-full h-52 md:h-60 p-2 rounded-md">
                                        <Image
                                            src={e.img}
                                            className="object-cover w-full h-full rounded-md"
                                            alt="Image"
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                    <h3 className="text-xl text-center font-semibold mb-3 text-[#002f5e]">{e.title}</h3>
                                    <p className="text-gray-600">{e.description}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    );
}