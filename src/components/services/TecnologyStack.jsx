'use client';

import Image from 'next/image';

const technologies = [
    { name: 'React', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
    { name: 'Node.js', logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
    { name: 'Python', logo: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
    { name: 'Java', logo: 'https://cdn.worldvectorlogo.com/logos/java.svg' },
    { name: '.NET', logo: 'https://cdn.worldvectorlogo.com/logos/dot-net-core-7.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg' },
    { name: 'MongoDB', logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
    { name: 'Redis', logo: 'https://cdn.worldvectorlogo.com/logos/redis.svg' },
];

function TechnologyStack() {
    if (!technologies || technologies.length === 0) {
        return null;
    }

    return (
        <section className='py-20 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/20 '>
            <div className='container'>
                <div className='flex justify-between items-center gap-2 flex-wrap pb-6'>
                    <div>
                        <p className='text-base text-[#9ca3af] uppercase font-semibold'>Global</p>
                        <h2  className='text-3xl md:text-5xl font-bold text-slate-600 mb-6'>Technology Stack</h2>
                    </div>
                    <div className='text-slate-600 max-w-2xl text-lg leading-relaxed'>
                        Our highly qualified global team is uniquely qualified to deliver
                        high-performance sustainable landmark buildings through our integrated suite
                    </div>
                </div>

                <div className='bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                        {technologies.map((tech, i) => (
                            // <div
                            //     key={tech.name}
                            //     className={`bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6
                            //               hover:scale-105 transition-all duration-300
                            //               hover:bg-white/30 hover:border-white/50
                            //               float-${(i % 4) + 1}`}
                            // >
                            //     <img
                            //         src={tech.logo}
                            //         alt={tech.name}
                            //         className='w-20 h-20 mx-auto mb-4 object-contain'
                            //     />
                            //     <p className='text-gray-800 text-center font-semibold text-lg'>
                            //         {tech.name}
                            //     </p>
                            // </div>

                            
                            <div
                                key={i}
                                className='flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-xl border-2 border-transparent hover:border-primary-200 transform hover:-translate-y-1 transition-all duration-300 cursor-default'
                            >
                                <div className='relative w-8 h-8 flex-shrink-0'>
                                    <Image
                                        src={tech.logo}
                                        alt={tech.name}
                                        fill
                                        className='object-contain'
                                    />
                                </div>
                                <span className='text-lg font-semibold text-gray-800'>
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%,
                    100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
                .float-1 {
                    animation: float 3s ease-in-out infinite;
                }
                .float-2 {
                    animation: float 3s ease-in-out 0.5s infinite;
                }
                .float-3 {
                    animation: float 3s ease-in-out 1s infinite;
                }
                .float-4 {
                    animation: float 3s ease-in-out 1.5s infinite;
                }
            `}</style>
        </section>
    );
}

export default TechnologyStack;
