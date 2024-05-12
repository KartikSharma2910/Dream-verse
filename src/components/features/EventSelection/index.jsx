import { Footer, Header } from "components/common";
import { Fragment } from "react";
import Awards from "./Awards";
import Banner from "./Banner";
import Creativity from "./Creativity";

const EventSelection = () => {
  return (
    <Fragment>
      <Header as="UniversalHeader" />
      <Banner />
      <Awards />
      <Creativity />
      <Footer />
    </Fragment>
  );
};

export default EventSelection;
