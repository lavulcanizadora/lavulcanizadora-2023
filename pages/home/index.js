import React from "react";
import PropTypes from "prop-types";
import fetchEntries from "@/util/contentfulQuery";
import fetchAsset from "@/util/contentfulAsset";
import Homepage from "@/src/layouts/Homepage";

const Home = ({ logoUrl, homeInfo, globalContent }) => {
  return <Homepage logoUrl={logoUrl} homeInfo={homeInfo[0]} globalContent={globalContent[0]} />;
};

Home.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  homeInfo: PropTypes.array.isRequired,
  globalContent: PropTypes.array.isRequired
};

export const getStaticProps = async (context) => {
  // Traer homepage content

  const res = await fetchEntries({
    content_type: "home",
    locale: context.locale === "en" ? "en-US" : "es-CO",
  });

  const homeInfo = await res.map((p) => {
    return p.fields;
  });

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

  return {
    props: {
      logoUrl,
      homeInfo,
      globalContent,
    },
  };
};

export default Home;
