"use client";

export default function Testimonials() {

    const testimonials = [{
        text: "บริการดีมาก ทีมงานมืออาชีพ แก้ปัญหาแอร์ได้เร็วมากครับ",
        author: "คุณสมชาย, กรุงเทพมหานคร"
    },
    {
        text: "ติดตั้งระบบกล้องวงจรปิดครบวงจร คุณภาพดี คุ้มค่า",
        author: "คุณศิริภา, นครราชสีมา"
    },
    {
        text: "บริการไฟฟ้าครบวงจรของร้านนี้เยี่ยมมาก! ทำให้บ้านสะดวกสบายขึ้นเยอะเลยค่ะ",
        author: "คุณอรัญญา, ชลบุรี"
    },]

    return (
        <>
            <section id="testimonials" className="py-16 px-6 bg-white">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-10 text-[#002f5e]">รีวิวจากลูกค้า</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            testimonials.map((e) =>
                                <blockquote key={e.author} className="bg-gray-100 p-8 rounded-lg shadow text-[#002f5e] italic border border-gray-300">
                                    <div className="flex h-5 mx-auto w-full mb-5 justify-center">
                                        <img src="https://www.svgrepo.com/show/111254/star.svg" alt="star" />
                                        <img src="https://www.svgrepo.com/show/111254/star.svg" alt="star" />
                                        <img src="https://www.svgrepo.com/show/111254/star.svg" alt="star" />
                                        <img src="https://www.svgrepo.com/show/111254/star.svg" alt="star" />
                                        <img src="https://www.svgrepo.com/show/111254/star.svg" alt="star" />
                                    </div>
                                    “{e.text}”
                                    <br />
                                    <span className="font-semibold not-italic mt-3 block text-gray-500">– {e.author}</span>
                                </blockquote>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    );
}