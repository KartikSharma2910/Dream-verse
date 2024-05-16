import { Footer, Header } from "components/common";
import { Fragment } from "react";
import Banner from "./Banner";
import Terms from "./Terms";

const TermsAndConditions = () => {
  return (
    <Fragment>
      <Header as="UniversalHeader" />
      <Banner />
      <Terms />
      <Footer />
    </Fragment>
  );
};

export default TermsAndConditions;
