import { Footer, Header } from "components/common";
import { Fragment } from "react";
import Banner from "./Banner";
import EventPlanner from "./EventPlanner";
import MeetTeam from "./MeetTeam";
import OurStory from "./OurStory";
import OurValues from "./OurValues";

const AboutUs = () => {
  return (
    <Fragment>
      <Header as="UniversalHeader" />
      <Banner />
      <OurStory />
      <OurValues />
      <MeetTeam />
      <EventPlanner />
      <Footer />
    </Fragment>
  );
};

export default AboutUs;
