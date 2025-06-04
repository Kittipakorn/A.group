"use client";

import { useState } from "react";


export default function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: '',
      });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        const response = await fetch('https://formspree.io/f/mgvyvagk', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
          },
          body: JSON.stringify(formData),
        });
    
        if (response.ok) {
          alert('ขอบคุณ คุณ ' + formData.name + ' ที่ติดต่อเรา เราจะรีบดำเนินการและติดต่อกลับหาคุณโดยเร็ว\nผ่านเบอร์: ' + formData.phone);    
          setFormData({
            name: '',
            phone: '',
            message: '',
          });
        } else {
            alert('เกิดข้อผิดพลาดในการส่งข้อความ');
        }
        setIsSubmitting(false);
      };

    return (
        <>
            <section id="contact" className="py-16 px-6 bg-gray-100">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center text-[#002f5e]">ติดต่อเรา</h2>

                    <div className="grid gap-5 lg:grid-cols-2 grid-cols-1">
                        <form onSubmit={handleSubmit} className="bg-white  p-8 rounded-lg shadow space-y-6 border border-gray-300">
                            <div>
                                <label htmlFor="name" className="block mb-2 font-medium text-[#002f5e]">ชื่อ</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                                />
                            </div>
                            <div>
                                <label htmlFor="tel" className="block mb-2 font-medium text-[#002f5e]">เบอร์โทรติดต่อกลับ</label>
                                <input
                                    type="phone"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 font-medium text-[#002f5e]">รายละเอียด</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full max-h-32 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
                                />
                            </div>
                            <button
                                type="submit" disabled={isSubmitting}
                                className="w-full bg-[#002f5e] hover:bg-gray-400 text-white py-3 rounded font-semibold cursor-pointer transition"
                            >
                                ส่งข้อความ
                            </button>
                        </form>

                        <div className="grid grid-cols-1 grid-rows-2">
                            <div className="mt-2 text-center space-y-8 pb-3">
                                <div className="space-y-2">
                                    <p className="text-[#002f5e] text-xl">โทรศัพท์</p>
                                    <p className="text-gray-600">089-190-0277 (ช่างเอ)</p>
                                </div>

                                <div>
                                    <p className="text-[#002f5e] text-xl">อีเมล</p>
                                    <p className="text-gray-600">agroupair01@gmail.com</p>
                                </div>

                                <div>
                                    <p className="text-[#002f5e] text-xl">ที่อยู่</p>
                                    <p className="text-gray-600">123 ถนนสาทร กรุงเทพฯ 10120</p>
                                </div>
                            </div>
                            <div className="">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d936.3232910646427!2d102.27028050716325!3d15.180959946462245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sth!4v1749036813320!5m2!1sen!2sth" className="border rounded-md w-full h-full object-cover" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}