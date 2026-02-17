'use client';

import TabList from '@/data/Projects';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';
import FlipCard from './FlipCard';

export default function PortFolioPage({ main = false }) {
    const [activeTab, setActiveTab] = useState(TabList[0]);

    console.log('activeTab', activeTab);
    

    const renderTabContent = (activeTab) => {
        return (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {main
                    ? activeTab?.projects?.map((project, idx) => (
                          <FlipCard
                              key={Math.random()}
                              imageSrc={project.imageSrc}
                              title={project.title}
                              subtitle={project.subtitle}
                              backContent={project.backContent}
                              client={project.client}
                              year={project.year}
                              technologies={project.technologies}
                              href={`/portfolio/${project.title
                                  .toLowerCase()
                                  .replace(/\s+/g, '-')}`}
                          />
                      ))
                    : activeTab?.projects
                          ?.slice(0, 4)
                          ?.map((project, idx) => (
                              <FlipCard
                                  key={Math.random()}
                                  imageSrc={project.imageSrc}
                                  title={project.title}
                                  subtitle={project.subtitle}
                                  backContent={project.backContent}
                                  client={project.client}
                                  year={project.year}
                                  technologies={project.technologies}
                                  href={`/portfolio/${project.title
                                      .toLowerCase()
                                      .replace(/\s+/g, '-')}`}
                              />
                          ))}
            </div>
        );
    };

    return (
        <div className='container py-10 md:py-20'>
            {!main && (
                <div className='flex justify-between items-center gap-2 flex-wrap pb-6'>
                    <div>
                        <p className='text-base text-[#9ca3af] uppercase font-semibold'>
                            Portfolio
                        </p>
                        <h2 className='text-3xl text-[#475569] font-bold mb-2'>Our Portfolio</h2>
                    </div>
                    <div className='text-slate-600 max-w-2xl text-lg leading-relaxed'>
                        Explore our portfolio of cutting-edge software solutions that have helped
                        businesses increase efficiency by 40%, boost revenue by 35%, and enhance
                        customer satisfaction. Each project represents our commitment to innovation
                        and measurable results.
                    </div>
                </div>
            )}
            <div className='flex space-x-4 justify-center items-center'>
                {TabList?.map((tab, idx) => (
                    <button
                        type='button'
                        key={idx}
                        onClick={() => setActiveTab(tab)}
                        className={`py-2 px-4 rounded-md transition-all duration-200 cursor-pointer
            ${
                activeTab?.id == tab?.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
                    >
                        {tab?.title}
                    </button>
                ))}
            </div>

            <div className='py-12'>{renderTabContent(activeTab)}</div>

            {!main && (
                <div className='text-center w-[130px] mx-auto'>
                    <Link
                        href='/portfolio'
                        className='group relative px-6 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-500 ease-out transform hover:scale-105 focus:outline-none focus:scale-105 text-white bg-[#002a57] border border-white/20 flex items-center gap-2 mx-auto'
                    >
                        <span className='relative z-10 whitespace-nowrap'>View All</span>
                        <FontAwesomeIcon icon={faArrowRight} className='w-4 h-4 relative z-10' />

                        {/* Animated gradient background */}
                        <div className='absolute inset-0 rounded-full bg-gradient-to-r from-white/30 to-white/20 opacity-0 transition-all duration-500 ease-out transform scale-75 group-hover:opacity-100 group-hover:scale-100 group-focus:opacity-100 group-focus:scale-100' />

                        {/* Glow effect */}
                        <div className='absolute inset-0 rounded-full bg-white/10 blur-md opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-focus:opacity-100' />
                    </Link>
                </div>
            )}
        </div>
    );
}
