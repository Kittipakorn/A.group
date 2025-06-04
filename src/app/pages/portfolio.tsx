"use client";

import Image from 'next/image';

export default function Portfolio() {

    const portfolio = [{
        src : "https://scontent.fbkk12-6.fna.fbcdn.net/v/t39.30808-6/493672089_9997674136921408_2935433200254977566_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OV8OkfBsFBkQ7kNvwEpCPzt&_nc_oc=AdnNR8Em8XC7DyPhZ8X9km-cOei43b8XOftlnWhe-pFD1YkoLClG9PlwoCfuTrhr4h0gywLoa8BOknhYU7cy2g4L&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&_nc_gid=UYiJwShBNka9ZaEn0NiLjg&oh=00_AfI8TCL3UtIe0CNfWMy9AxVQCnP72xglHcHFr_ZVTMIyog&oe=6845D6DC",
        alt : "alt"
    },
    {
        src : "https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.30808-6/498668250_23921531904109063_5680569133039129227_n.jpg?stp=c256.0.1536.1536a_dst-jpg_s552x414_tt6&_nc_cat=102&ccb=1-7&_nc_sid=50ad20&_nc_ohc=QJ_JC7_FYSsQ7kNvwGlR2VK&_nc_oc=Adm4c0GDuEQsTzHmXL8jY4zGZX7o2HOAT5LM--ycTTk2QUAzQznV31IjU9UbeCfn_6pZGAMzmbtjpYn-ReMqiv-x&_nc_zt=23&_nc_ht=scontent.fbkk12-3.fna&_nc_gid=ETuScI8a0hGPjIFBCXm52A&oh=00_AfIgSa44vFwZR1ihkLXtpqbtexgW6nRFdlwONfm1O7bZtA&oe=68461027",
        alt :"alt"
    },
    {
        src : "https://scontent.fbkk12-4.fna.fbcdn.net/v/t39.30808-6/466037004_9026574970698001_7702879315696935740_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=dnXMjrwytCcQ7kNvwFQa2BK&_nc_oc=Adl19Y9r1Uh-LNzojeC2_hTikc2okm9S0GhEtSWZhCOcJ45sPHrsGK9ua12brchzjPgtYkeLJAVubtApY_Tljhf-&_nc_zt=23&_nc_ht=scontent.fbkk12-4.fna&_nc_gid=uubeuh_0Pdggeq-bZL0jXA&oh=00_AfITyn2jNFDK4Im0mS_ZSN02bpLFO40ZzyDUElKR7NajSA&oe=6845EFFE",
        alt : "alt"
    },
    {
        src : "https://scontent.fbkk12-2.fna.fbcdn.net/v/t39.30808-6/465464947_8935784019777097_7592094451623045543_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NFx9u-4QyocQ7kNvwEiI5sl&_nc_oc=AdmYJ-cXWhjunjNGlyTROdwpP0aqGzhynkhPu0XbVUfFGwimhG7NmbWhYNcUQwK_XJJakb05nNhqU3CVZWaagFoG&_nc_zt=23&_nc_ht=scontent.fbkk12-2.fna&_nc_gid=MFC0nNsCskvRP49qc6rHbA&oh=00_AfL6TJnEnUk6MtA4eZrS_ZECR--HsqGYGAqJfBiWu9lVDg&oe=6845D671",
        alt :"alt"
    },
    {
        src : "https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/461400706_8672030809485754_2672088068354012195_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MV-ysBaLDTEQ7kNvwHSCQ9W&_nc_oc=AdkNc_WHnF0eLlk54KqM1Ocss3kUf9hQt8rVCV67Cpe_ikrSIYhGXVJ0SELIRGyzxDUoN1zOjmzFkkZMqbi4xXXV&_nc_zt=23&_nc_ht=scontent.fbkk13-2.fna&_nc_gid=4GrYKMTOQ0xIhtdFcw-ErA&oh=00_AfKnhEiuS8F2L9hAuRJcOIiCQKG7GybPRdBT4Oezkl7S_A&oe=68451E75",
        alt : "alt"
    },
    {
        src : "https://scontent.fbkk8-2.fna.fbcdn.net/v/t39.30808-6/499221255_23929283896667197_1420243719973461743_n.jpg?stp=c0.169.1536.1536a_dst-jpg_s552x414_tt6&_nc_cat=110&ccb=1-7&_nc_sid=50ad20&_nc_ohc=jaq0ma2s4mAQ7kNvwHtJ3it&_nc_oc=AdlWOHquAVjhcuKV_oXsIlWPl39DHw_SFPXulzYE-V2kHFR-MiMQNtlWPApDq255QOZcyXOB5Mctutod405MOyxj&_nc_zt=23&_nc_ht=scontent.fbkk8-2.fna&_nc_gid=0dgFGFdejWlv62YhLpBXCQ&oh=00_AfJvNwTIMzcqymFa-hiv_ggfwYpVBOlCOdWkhRe8NTMxGQ&oe=6845C6C7",
        alt : "alt"
    },
    {
        src : "https://scontent.fbkk12-4.fna.fbcdn.net/v/t39.30808-6/499533055_23926345613627692_1568434574019524784_n.jpg?stp=c256.0.1536.1536a_dst-jpg_s552x414_tt6&_nc_cat=103&ccb=1-7&_nc_sid=50ad20&_nc_ohc=-yX2zNCJ48cQ7kNvwFVlfYS&_nc_oc=AdkCA8C9M-s5utFNUD0DwsCpRBCnXkb9N14EnzQ7_Oc42Lrwlu42SBQqk8JQJtt7TQg1rm8g3bsRUhNI_syL7bGS&_nc_zt=23&_nc_ht=scontent.fbkk12-4.fna&_nc_gid=tudjz1_MPK0ibt7RtFbPYw&oh=00_AfKfdm_0mJuAxe-V0bAkXK_hftk3Ez4HIijEvKzLkSYFAw&oe=6845CD53",
        alt : "alt"
    },
    {
        src : "https://scontent.fbkk8-2.fna.fbcdn.net/v/t39.30808-6/497960651_23923258613936392_8637860250473782821_n.jpg?stp=c185.0.1108.1108a_cp6_dst-jpg_s552x414_tt6&_nc_cat=110&ccb=1-7&_nc_sid=50ad20&_nc_ohc=S_zuK40c4xMQ7kNvwG5B1d_&_nc_oc=AdljNp5K-cU7KVU4mCDRs2AitKdkhMHVyJKsSFp5Y8d1vJiFaj08dNe-UgscVFsHMok9tTVPAXAjIfGxFVdnEkSx&_nc_zt=23&_nc_ht=scontent.fbkk8-2.fna&_nc_gid=pLZGmBQJbo941zJCZ4cbOw&oh=00_AfJQPTFEB0YYftP0uFZZIjwckkxOc9yqeDDHiABb_CKRKA&oe=6845D559",
        alt : "alt"
    },
    {
        src : "https://scontent.fbkk9-2.fna.fbcdn.net/v/t39.30808-6/496148314_23875103648751889_4238924197363977314_n.jpg?stp=c0.206.1424.1424a_dst-jpg_s552x414_tt6&_nc_cat=109&ccb=1-7&_nc_sid=50ad20&_nc_ohc=91ejlT7LFgsQ7kNvwGsjo85&_nc_oc=AdkaYe4NVaxNfRUc_pWpbCo8T6Hm6einnP-wVaQ97VXUWnHTKbAmcOA7RjK_dPSaxqlauaO8olKXuhe5I260NVjy&_nc_zt=23&_nc_ht=scontent.fbkk9-2.fna&_nc_gid=Iau5_eIVlMHcQyOoLPJNiw&oh=00_AfKeR6Ql_5X0_I1t0JHEZ2aOHuoVjCvB6FSklMnpcdxkuA&oe=6845AE0D",
        alt : "alt"
    },
    {
        src : "https://scontent.fbkk13-3.fna.fbcdn.net/v/t39.30808-6/497499156_23873991005529820_5070425115123037288_n.jpg?stp=c256.0.1536.1536a_dst-jpg_s552x414_tt6&_nc_cat=108&ccb=1-7&_nc_sid=50ad20&_nc_ohc=Z6KJWT98nPEQ7kNvwH3J5h0&_nc_oc=AdlroH8blF06wOddRAzWMMnryrj_C0LIF8Zm5AqGZmBcADZGWhK36AXQ5WIMQ96Dc9klJHsReHXUUcM4afQGyOkd&_nc_zt=23&_nc_ht=scontent.fbkk13-3.fna&_nc_gid=HzHT9yqDKsKZuUlvHTQp0Q&oh=00_AfKT5hj3jTjL3I6J1Y7M4BTvVjvtd2HBej-xoLlcM82P5A&oe=6845AC95",
        alt : "alt"
    },
    {
        src : "https://scontent.fbkk12-6.fna.fbcdn.net/v/t39.30808-6/494196071_10011538435534978_6681102015340557805_n.jpg?stp=c256.0.1536.1536a_dst-jpg_s552x414_tt6&_nc_cat=106&ccb=1-7&_nc_sid=50ad20&_nc_ohc=_MnscR3A-ucQ7kNvwFqxcq-&_nc_oc=AdmUDxupGXOUa1XBwNPpQo48nIq6uiwVMiL2its6wh99jlgO1j2KiyhnLvLEVRd1sRtHMrHFqxkklINz8FI86IAY&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&_nc_gid=EwYY9tL3H2rWnUhLlMTYSQ&oh=00_AfLgWV031gh14QkEqhhIUMrxZiBQz8X1GU7m4L-Rln1-Ww&oe=6845D9D0",
        alt : "alt"
    },
    {
        src : "https://scontent.fbkk12-1.fna.fbcdn.net/v/t39.30808-6/492299423_9971021452920010_8255356835125060970_n.jpg?stp=c160.0.960.960a_dst-jpg_s552x414_tt6&_nc_cat=101&ccb=1-7&_nc_sid=50ad20&_nc_ohc=Qsv0XMikU_MQ7kNvwHltsVN&_nc_oc=AdlS2KeSk4qzFbeubi7bo3bkkuvTqF9AP2Q1D2UJ1hFHHve9VpjggRRLy2HAHjplq9nNtt7n7CCOCxambtX7oxL_&_nc_zt=23&_nc_ht=scontent.fbkk12-1.fna&_nc_gid=uAegM8Hb0BFeAzWKoFS91A&oh=00_AfLJJDUi4FV9JkwM9OhWT0d0ujdwlSmpH4RWdMn8NCoeSg&oe=6845BB10",
        alt : "alt"
    },
    {
        src : "https://scontent.fbkk12-5.fna.fbcdn.net/v/t39.30808-6/490856493_9894552170566939_6538940198042693708_n.jpg?stp=c185.0.1108.1108a_dst-jpg_s552x414_tt6&_nc_cat=107&ccb=1-7&_nc_sid=50ad20&_nc_ohc=eLM1QYldTigQ7kNvwEHM50W&_nc_oc=AdnJ2ahEfF0YkepKro9WDSi1kjN-kD545mV3OkhJF3kr-qfJJ2hpih-mRR-uSp4t_Le_2jwnDynqAi2Og2BICQf7&_nc_zt=23&_nc_ht=scontent.fbkk12-5.fna&_nc_gid=3eL7WBURo03_uaSNvqoNcQ&oh=00_AfIZ3qgHLlb74Lufj8nONUfSG0fidWSBtrLReTaG2dt8pw&oe=6845D552",
        alt : "alt"
    },
    {
        src : "https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.30808-6/490237999_9894550627233760_6646609089511552920_n.jpg?stp=c0.295.1155.1155a_dst-jpg_s552x414_tt6&_nc_cat=102&ccb=1-7&_nc_sid=50ad20&_nc_ohc=a50Wb5vyljYQ7kNvwGX9L6M&_nc_oc=AdlOHAlOZWMhf-TSZ6xr9a6rwpriw_3uWgtcJq1Vm2or09yec4bsJDWWzm6ZEN0P8MQEyT6f1ZFg7kdIVFgjEReO&_nc_zt=23&_nc_ht=scontent.fbkk12-3.fna&_nc_gid=J4AO5wNVypaxOhLGbW8JDg&oh=00_AfLJV_IU_o683tehlAbr0KhHE23R1pbUP1etH1I92IPgfA&oe=6845BF35",
        alt : "alt"
    },
    {
        src : "https://scontent.fbkk12-5.fna.fbcdn.net/v/t39.30808-6/490362875_9892851520737004_457479155363594177_n.jpg?stp=c447.0.1155.1155a_dst-jpg_s552x414_tt6&_nc_cat=107&ccb=1-7&_nc_sid=50ad20&_nc_ohc=kDehaDYtaUwQ7kNvwFoA1pe&_nc_oc=AdlNnBN_k0tpEQ2CculWYmaebF0RY0-FJGtL9-0OpbbjCavxTki7nnjNlc4WqfqJd-3bTBLTYfOBMmYuUXO7gDUE&_nc_zt=23&_nc_ht=scontent.fbkk12-5.fna&_nc_gid=cbGlS40d8yU0QmtXDTGYuQ&oh=00_AfK5tutu4Jk0LrVT9nBmDSdKK6rz3Sxgt1umII4tbOiizA&oe=6845E121",
        alt : "alt"
    },
    {
        src : "https://scontent.fbkk13-3.fna.fbcdn.net/v/t39.30808-6/490361300_9874353655920124_3751108249276414443_n.jpg?stp=c0.122.1108.1108a_dst-jpg_s552x414_tt6&_nc_cat=108&ccb=1-7&_nc_sid=50ad20&_nc_ohc=6vKvYkrjouUQ7kNvwHc4cp-&_nc_oc=Adntf_f0ZjUQ5vEKwuA7DRizyv4TB31q_AMGf20p55kQBlm-F8dTGu7V9fxHOpxbuUwzjQn_C60V04Fz9uC7lxF8&_nc_zt=23&_nc_ht=scontent.fbkk13-3.fna&_nc_gid=q5iyGjWrtf5KXnEbHaLFcQ&oh=00_AfLyj7Xot-gHzsXfu4HtftwjwjZsHKBm0wFP6YdVQXG1Kw&oe=6845F087",
        alt : "alt"
    },
    {
        src : "https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.30808-6/489029994_9851174948237995_1331226111001746992_n.jpg?stp=c0.169.1536.1536a_dst-jpg_s552x414_tt6&_nc_cat=102&ccb=1-7&_nc_sid=50ad20&_nc_ohc=YYZHl9F2PxcQ7kNvwG443QJ&_nc_oc=AdmJcsSW8V1oXcN6m6IQ1TXcQeo1hXFRzDTj6RbUIO-Bw3Xtoq307k7_LEw3sZgLM-6qPE4EGHJOhFfnGbvdgdUo&_nc_zt=23&_nc_ht=scontent.fbkk12-3.fna&_nc_gid=B3h26hcC-9ln0HgqtDpv0g&oh=00_AfIBq3Z_2_G64krDLZmLDlKJxxgWt8ZQJlAUD6OoyCOU7w&oe=6845FA20",
        alt : "alt"
    },
    {
        src : "https://scontent.fbkk12-4.fna.fbcdn.net/v/t39.30808-6/488275650_9837907452898078_7188568766979429743_n.jpg?stp=c0.122.1108.1108a_dst-jpg_s552x414_tt6&_nc_cat=103&ccb=1-7&_nc_sid=50ad20&_nc_ohc=6jOOtAFm-MIQ7kNvwEKlEq1&_nc_oc=Adm7-x8GwiKPxPXgdhMtj8OktTpkepURSkMItvwrN615fqBHkD5_0cmiqfUIclVxCFX40r85e9dqDIhEylvKO10n&_nc_zt=23&_nc_ht=scontent.fbkk12-4.fna&_nc_gid=ts1350kCtSQLXmb1jlVDsQ&oh=00_AfIWCqSrtYR1QFvm3kJhfTn-S246VjcYCbK7ksAW271PmA&oe=684608BC",
        alt : "alt"
    }]

    return (
        <>
            <section id="portfolio" className="py-16 px-6 bg-gray-100">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-7 text-[#002f5e]">ผลงานของเรา</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                        {
                            portfolio.map((e) => 
                                <Image
                                    key={e.src}
                                    src={e.src}
                                    alt={e.alt}
                                    width={300}
                                    height={300}
                                    className="rounded-lg object-cover w-full h-52  shadow-md hover:scale-105 transition transform border border-gray-300" 
                                />
                            )
                        }
                    </div>
                    <h2 className="text-md font-bold text-center mt-5 text-gray-600">ขอบคุณทุกท่านที่ไว้ใจทีมงานเอกรุ๊ป</h2>
                </div>
            </section>
        </>
    );
}