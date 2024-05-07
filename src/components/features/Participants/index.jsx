import { Footer, Header } from "components/common";
import { Fragment } from "react";
import Banner from "./Banner";
import Creativity from "./Creativity";
import NomineeShowcase from "./NomineeShowcase";
import VoteCreators from "./VoteCreators";

const Participants = () => {
  return (
    <Fragment>
      <Header as="UniversalHeader" />
      <Banner />
      <NomineeShowcase />
      <VoteCreators />
      <Creativity />
      <Footer />
    </Fragment>
  );
};

export default Participants;
