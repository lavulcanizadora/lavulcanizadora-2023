import React from "react";
import PropTypes from "prop-types";
import fetchAsset from "@/util/contentfulAsset";
import IndexLayout from "@/src/layouts/IndexLayout";
import fetchEntries from "@/util/contentfulQuery";

const Index = ({ logoUrl, globalContent, homepageContent }) => {
  return <IndexLayout logoUrl={logoUrl} globalContent={globalContent[0]} homepageContent={homepageContent[0]} />;
};

Index.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  globalContent: PropTypes.array.isRequired,
  homepageContent: PropTypes.array.isRequired
};

export const getStaticProps = async (context) => {
  // Traer ruta del asset del logo

  const logoRes = await fetchAsset("5i0dBBi4xawJgl0718IpMy");

  const logoUrl = logoRes.fields.file.url;

  // Traer "Global content"

  const globalContentRes = await fetchEntries({
    content_type: "globalContent",
    locale: context.locale === "en" ? "en-US" : "es-CO",
  });

  const globalContent = await globalContentRes.map((p) => {
    return p.fields;
  });

  // Traer homepage content

  const homepageRes = await fetchEntries({
    content_type: "home",
    locale: context.locale === "en" ? "en-US" : "es-CO",
  });

  const homepageContent = await homepageRes.map((p) => {
    return p.fields;
  });

  return {
    props: {
      logoUrl,
      globalContent,
      homepageContent
    },
  };
};

export default Index;
