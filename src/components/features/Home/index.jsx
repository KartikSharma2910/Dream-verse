import { Fragment } from "react";
import Banner from "./Banner";
import EventPlanner from "./EventPlanner";
import FAQ from "./FAQ";
import FoodAndBevereges from "./FoodAndBeverage";
import Gallery from "./Gallery";
import NomineeShowcase from "./NomineeShowcase";
import UnleashDream from "./UnleashDream";
import VideoContainer from "./VideoContainer";
import VoteCreators from "./VoteCreators";
import WhyChoose from "./WhyChoose";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <WhyChoose />
      <NomineeShowcase />
      <VideoContainer />
      <Gallery />
      <UnleashDream />
      <FoodAndBevereges />
      <VoteCreators />
      <EventPlanner />
      <FAQ />
    </Fragment>
  );
};

export default Home;
