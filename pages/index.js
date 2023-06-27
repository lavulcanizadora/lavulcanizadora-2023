import React from "react";
import PropTypes from "prop-types";
import fetchAsset from "@/util/contentfulAsset";
import IndexLayout from "@/src/layouts/IndexLayout";

const Index = ({ logoUrl }) => {
  return <IndexLayout logoUrl={logoUrl} />;
};

Index.propTypes = {
  logoUrl: PropTypes.string.isRequired,
};

export const getStaticProps = async () => {
  // Traer ruta del asset del logo

  const logoRes = await fetchAsset("5i0dBBi4xawJgl0718IpMy");

  const logoUrl = logoRes.fields.file.url;

  return {
    props: {
      logoUrl,
    },
  };
};

export default Index;
