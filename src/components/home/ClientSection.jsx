'use client';

import clients_1 from '@/assets/clients/clients_1.png';
import clients_10 from '@/assets/clients/clients_10.png';
import clients_2 from '@/assets/clients/clients_2.png';
import clients_3 from '@/assets/clients/clients_3.png';
import clients_4 from '@/assets/clients/clients_4.png';
import clients_5 from '@/assets/clients/clients_5.png';
import clients_6 from '@/assets/clients/clients_6.png';
import clients_7 from '@/assets/clients/clients_7.png';
import clients_8 from '@/assets/clients/clients_8.png';
import clients_9 from '@/assets/clients/clients_9.png';

import Image from 'next/image';

const clients = [
    { name: 'Oracle', src: clients_1 },
    { name: 'Google', src: clients_2 },
    { name: 'Microsoft', src: clients_3 },
    { name: 'Amazon', src: clients_4 },
    { name: 'Apple', src: clients_5 },
    { name: 'IBM', src: clients_6 },
    { name: 'Facebook', src: clients_7 },
    { name: 'Twitter', src: clients_8 },
    { name: 'LinkedIn', src: clients_9 },
    { name: 'Salesforce', src: clients_10 },
];

const marqueeClients = [...clients, ...clients];

function MarqueeRow({ reverse = false }) {
    return (
        <div className="overflow-hidden whitespace-nowrap relative">
            <div
                className={`flex gap-6 py-4 animate-marquee ${reverse ? 'animate-marquee-reverse' : ''
                    }`}
            >
                {marqueeClients.map((client, index) => (
                    <div
                        key={index}
                        className="flex justify-center items-center min-w-[140px]
                                   border rounded-xl p-4 h-[100px]
                                   bg-white/10 backdrop-blur-xl border-white/20
                                   hover:scale-105 transition-all duration-300"
                    >
                        <Image
                            src={client.src}
                            alt={client.name}
                            height={80}
                            width={120}
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

function ClientSection() {
    return (
        <section className="py-10 container">
            <div className="flex justify-between items-center gap-2 flex-wrap pb-6">
                <div>
                    <p className="text-base text-[#9ca3af] uppercase font-semibold">
                        Global
                    </p>
                    <h2 className="text-3xl text-[#475569] font-bold mb-2">Our clients</h2>
                </div>

                <div className="text-slate-600 max-w-xl text-lg leading-relaxed">
                    Our highly qualified global team is uniquely qualified to deliver
                    high-performance sustainable landmark buildings through our integrated suite
                </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 space-y-2">
                <MarqueeRow />
                <MarqueeRow reverse />
                <MarqueeRow />
            </div>
        </section>
    );
}

export default ClientSection;
