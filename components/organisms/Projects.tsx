import React from "react";
import ProjectCard from "../molecules/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 md:px-10"
      id="projects"
    >
      <h1 className="text-[40px] lg:text-[50px]  font-semibold text-center bg-clip-text bg-gradient-to-r text-transparent from-indigo-300 to-violet-700 py-10">
        Proker
      </h1>
      <div className="grid flex-col w-full h-full gap-10 px-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <ProjectCard
          src="/srifoton.jpg"
          title="SRIFOTON"
          description="Wadah bagi mahasiswa seluruh Indonesia untuk menuangkan kreativitas dan kemampuan dalam menggunakan dan mengembangkan teknologi yang ada dalam bentuk seminar dan berbagai macam perlombaan."
        />
        <ProjectCard
          src="/ifcup.jpg"
          title="IF CUP"
          description="Hadir dalam rangka mendukung mahasiswa Teknik Informatika Universitas Sriwijaya untuk  mengembangkan dan mengasah bakat serta potensi yang mereka miliki pada bidang olahraga.
"
        />
        <ProjectCard
          src="/pelatihan-pemrograman.jpg"
          title="Pelatihan Pemrograman Mahasiswa"
          description="Kegiatan internal Teknik Informatika Universitas Sriwijaya sebagai wadah bagi mahasiswa Teknik Informatika meningkatkan kemampuan dasar mereka di bidang pemrograman. Dalam pelatihan ini, peserta akan dibimbing langsung oleh mentor berpengalaman dengan kurikulum yang sesuai dengan perkuliahan.
."
        />
      </div>
    </div>
  );
};

export default Projects;
