import { Footer, Header } from "components/common";
import { Fragment } from "react";
import Banner from "./Banner";
import Privacy from "./Privacy";

const PrivacyPolicy = () => {
  return (
    <Fragment>
      <Header as="UniversalHeader" />
      <Banner />
      <Privacy />
      <Footer />
    </Fragment>
  );
};

export default PrivacyPolicy;
