import { Footer, Header } from "components/common";
import { Fragment } from "react";
import Banner from "./Banner";

const Participants = () => {
  return (
    <Fragment>
      <Header as="UniversalHeader" />
      <Banner />
      <Footer />
    </Fragment>
  );
};

export default Participants;
