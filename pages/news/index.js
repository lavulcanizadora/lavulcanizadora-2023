import React from "react";
import PropTypes from "prop-types";
import fetchEntries from "@/util/contentfulQuery";
import fetchAsset from "@/util/contentfulAsset";
import News from "@/src/layouts/News";

const Project = ({ logoUrl, news }) => {
  return <News logoUrl={logoUrl} news={news[0]} />;
};

Project.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  news: PropTypes.array.isRequired,
};

export const getStaticProps = async (context) => {
  // Traer bios

  const res = await fetchEntries({
    content_type: "news",
    locale: context.locale === "en" ? "en-US" : "es-CO",
  });

  const news = await res.map((p) => {
    return p.fields;
  });

  // Traer ruta del asset del logo

  const logoRes = await fetchAsset("5i0dBBi4xawJgl0718IpMy");

  const logoUrl = logoRes.fields.file.url;

  return {
    props: {
      logoUrl,
      news,
    },
  };
};

export default Project;
