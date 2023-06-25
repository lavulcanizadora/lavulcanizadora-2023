import React from "react";
import PropTypes from "prop-types";
import fetchEntries from "@/util/contentfulQuery";
import fetchAsset from "@/util/contentfulAsset";
import ProjectInfo from "@/src/layouts/ProjectInfo";

const Project = ({ logoUrl, projectInfo }) => {
  return <ProjectInfo logoUrl={logoUrl} projectInfo={projectInfo[0]} />;
};

Project.propTypes = {
  projectInfo: PropTypes.array.isRequired,
  logoUrl: PropTypes.string.isRequired,
};

export const getStaticPaths = async () => {
  const projectsListObject = await fetchEntries({
    content_type: "project",
  });

  const projectsList = [];

  projectsListObject.forEach((projectObject) =>
    projectsList.push(projectObject.fields.slug)
  );

  const paths = [];

  projectsList.forEach((project) =>
    paths.push({ params: { project: project }, locale: "en" })
  );

  projectsList.forEach((project) =>
    paths.push({ params: { project: project }, locale: "es" })
  );

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {

  // Traer info del proyecto

  const res = await fetchEntries({
    content_type: "project",
    "fields.slug": context.params.project,
    locale: context.locale === "en" ? "en-US" : "es-CO",
  });

  const projectInfo = await res.map((p) => {
    return p.fields;
  });

  // Traer ruta del asset del logo

  const logoRes = await fetchAsset("5i0dBBi4xawJgl0718IpMy");

  const logoUrl = logoRes.fields.file.url;

  return {
    props: {
      projectInfo,
      logoUrl,
    },
  };
};

export default Project;
