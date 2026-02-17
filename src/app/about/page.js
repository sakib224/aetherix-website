import About from '@/components/about/About';
import Team from '@/components/about/Team';
import HeaderSection from '@/components/global/HeaderSecton';
import FeaturesServiceSection from '@/components/home/FeaturesServiceSection';
import aboutpage from '@/seo/aboutpage';

import founder_1 from '@/assets/about/founder_1.jpeg';
import founder_2 from '@/assets/about/founder_2.jpeg';
import founder_3 from '@/assets/about/founder_3.jpeg';


import team_1 from '@/assets/about/team_1.jpeg';
import team_2 from '@/assets/about/team_2.png';
import team_3 from '@/assets/about/team_3.png';
import team_4 from '@/assets/about/team_4.png';

import team_7 from '@/assets/about/team_7.png';
import team_8 from '@/assets/mdManna.png';
import team_9 from '@/assets/sajal.png';
import team_10 from '@/assets/sajal.png';
import team_11 from '@/assets/team_11.jpg';
// import team_10 from '@/assets/talukder.jpeg';


import dummy from '@/assets/about/dummy.jpg';
import { generateSEOMetadata } from '@/utils/metadata';

export const metadata = generateSEOMetadata(aboutpage);
const index = () => {
    return (
        <>
            <HeaderSection />
            <About />
            <FeaturesServiceSection />
            {/* <CustomerFeedbackSection /> */}
            <div className='pt-10 md:pt-20'>
                <Team
                    start_line='Meet the Founders'
                    title='Founders'
                    title_2=''
                    description='Aetherix was founded by a group of passionate individuals who are committed to delivering high-quality services and solutions. Our founders bring a wealth of experience and expertise to the company, ensuring that we are always at the forefront of innovation and excellence.'
                    teamMembers={[
                        {
                            id: 1,
                            name: 'SM Robiul Islam',
                            designation: 'Managing Director & Co-Founder',
                            department: ' & Co-Founder',
                            image: founder_1,
                            slug: 'Managing-Director-and-Co-Founder',
                        },
                        {
                            id: 2,
                            name: 'Md Tauhidul Islam',
                            designation: 'Technical Consultant',
                            department: ' & Co-Founder',
                            image: founder_2,
                            slug: 'Technical-Consultant',
                        },
                        {
                            id: 3,
                            name: 'ASM Iftekharul Islam',
                            designation: 'Chief Executive Officer & Co-Founder',
                            department: ' & Co-Founder',
                            image: founder_3,
                            slug: 'Cheif-Executive-Officer-and-Co-Founder',
                        },
                    ]}
                />
            </div>
            <Team
                start_line='Meet the team'
                title='Leadership Team'
                title_2='Industry Experience'
                description='Our leadership team is composed of seasoned professionals with extensive industry experience. They are dedicated to driving the company forward and ensuring that we meet the highest standards of quality and service.'
                teamMembers={[
                    {
                        id: 1,
                        name: 'Md. Imrul Afnan',
                        designation: 'CTO',
                        department: ', Development',
                        image: team_1,
                    },
                    {
                        id: 7,
                        name: 'S.M. Shoyaib',
                        designation: 'Software Quality Assurance (SQA)',
                        department: ', Human Resource',
                        image: team_7,
                    },
                    {
                        id: 3,
                        name: 'Md Mamun Hawlader',
                        designation: 'Frontend Developer',
                        department: ', Development',
                        image: team_3,
                    },

                    {
                        id: 8,
                        name: 'Md. Manna Mia',
                        designation: 'Software Developer',
                        department: ', Human Resource',
                        image: team_8,
                    },
                    {
                        id: 9,
                        name: 'Sajal Roy',
                        designation: 'Software Developer',
                        department: ', Human Resource',
                        image: team_9,
                    },
                    {
                        id: 10,
                        name: 'Talukdar Md Arifuzzaman Shumon',
                        designation: 'Digital Marketing Executive',
                        department: ', Human Resource',
                        image: dummy,
                    },

                    {
                        id: 11,
                        name: 'Sadman Sakib',
                        designation: 'Frontend Developer',
                        department: ', Development',
                        image: team_11,
                    },
                    {
                        id: 4,
                        name: 'Md Rafiqun Raiyan',
                        designation: 'Python Developer',
                        department: ', Development',
                        image: team_4,
                    },
                    {
                        id: 5,
                        name: 'MAS Nahian Khan',
                        designation: 'Intern',
                        department: ', Development',
                        image: dummy,
                    },
                    {
                        id: 6,
                        name: 'Md Abdullah',
                        designation: 'Intern',
                        department: ', Development',
                        image: dummy,
                    },




                ]}
            />
        </>
    );
};
export default index;
