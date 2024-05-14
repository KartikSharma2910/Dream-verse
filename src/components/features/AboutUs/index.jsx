import { Footer, Header } from "components/common";
import { Fragment } from "react";
import Banner from "./Banner";

const AboutUs = () => {
  return (
    <Fragment>
      <Header as="UniversalHeader" />
      <Banner />
      <Footer />
    </Fragment>
  );
};

export default AboutUs;
