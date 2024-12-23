import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/proshop.png"
          title="ProShop"
          description="Full Stack E-Commerce Platform Build in With The MERN Stack"
        />
        <ProjectCard
          src="/smsxx.png"
          title="Smsxx"
          description="Chat App With Real Time Chats"
        />
      </div>
    </div>
  );
};

export default Projects;
