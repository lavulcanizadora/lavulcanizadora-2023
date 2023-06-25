import React from "react";
import PropTypes from "prop-types";
import fetchEntries from "@/util/contentfulQuery";
import fetchAsset from "@/util/contentfulAsset";
import About from "@/src/layouts/About";

const Project = ({ logoUrl, bios }) => {
  return <About logoUrl={logoUrl} bios={bios} />;
};

Project.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  bios: PropTypes.array.isRequired,
};

export const getStaticProps = async (context) => {
  // Traer bios

  const res = await fetchEntries({
    content_type: "bio",
    locale: context.locale === "en" ? "en-US" : "es-CO",
  });

  const bios = await res.map((p) => {
    return p.fields;
  });

  // Traer ruta del asset del logo

  const logoRes = await fetchAsset("5i0dBBi4xawJgl0718IpMy");

  const logoUrl = logoRes.fields.file.url;

  return {
    props: {
      logoUrl,
      bios,
    },
  };
};

export default Project;
