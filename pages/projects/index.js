import React from "react";
import PropTypes from "prop-types";
import fetchEntries from "@/util/contentfulQuery";
import fetchAsset from "@/util/contentfulAsset";
import ProjectList from "@/src/layouts/ProjectList";

const Project = ({ logoUrl, projectList }) => {
  console.log(projectList);

  return <ProjectList logoUrl={logoUrl} projectList={projectList} />;
};

Project.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  projectList: PropTypes.array.isRequired,
};

export const getStaticProps = async (context) => {
  // Traer listado de proyectos

  const projectList = [];

  const res = await fetchEntries({
    content_type: "project",
    locale: context.locale === "en" ? "en-US" : "es-CO",
  });

  //   const projectInfo = await res.map((p) => {
  //     return p.fields;
  //   });

  res.forEach((project) =>
    projectList.push({
      projectName: project.fields.title,
      projectSlug: project.fields.slug,
      projectCover: project.fields.coverPhoto.fields.file.url,
    })
  );

  // Traer ruta del asset del logo

  const logoRes = await fetchAsset("5i0dBBi4xawJgl0718IpMy");

  const logoUrl = logoRes.fields.file.url;

  return {
    props: {
      logoUrl,
      projectList,
    },
  };
};

export default Project;
