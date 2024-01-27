import Image from "next/image";
import VidCard from "./Vidcard";

interface TechListType {
  techName: string;
  subttl: string;
  techVid: string;
  techDescription: string;
  techDescriptionFirst: string;
}

const techList: TechListType[] = [
  {
    techVid: '/techstack/resume-analyzer-api.webm',
    techName: 'Presented "Resume Analyzer" as a pitch at Ideastudio Nepal',
    techDescriptionFirst: 'In the dynamic realm of web development, Next.js and Django unite to create a seamless platform.',
    subttl: '- Introducing "Resume Analyzer"',
    techDescription: 'A Solo Venture! Are you ready to elevate the way employers perceive your skills? Dive into the innovation behind my solo project, the "Resume Analyzer,".'
  },
  {
    techVid: '/techstack/online-store.webm',
    techName: 'Online Store',
    techDescriptionFirst: '',
    subttl: '',
    techDescription: 'Explore our streamlined NextJS Online Store, integrating with the Fake Store API for product retrieval. This project highlights proficiency in React, Framer Motion, Axios, TypeScript, and Tailwind CSS. Check out the Projects section of the resume for more details.'
  },
  {
    techVid: '/techstack/resume-analyzer-postman.webm',
    techName: 'Java',
    techDescriptionFirst: 'In the dynamic realm of web development, Next.js and Django unite to create a seamless, high-performance, and feature-rich platform. Crafted with precision, the codebase is a testament to my commitment to excellence.',
    subttl: '',
    techDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia quo amet saepe id quibusdam '
  },
]

export default function TechStackList() {
  return (
    <section className="max-w-7xl px-5 mx-auto">
      <h2 className="font-black text-5xl tracking-tighter w-full text-center mb-3">Projects.</h2>
      <p className="text-1xl tracking-widest -full text-center mb-10">Here are some of my projects</p>

      <div>
        <div className="flex flex-col gap-10 w-full justify-center items-center">
          {techList &&
            techList.map((techItem: TechListType, index: number) => (
              <VidCard key={index} ttl={techItem.techName} subttl={techItem.subttl} techVid={techItem.techVid} descriptionFirst={techItem.techDescriptionFirst} description={techItem.techDescription} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
}