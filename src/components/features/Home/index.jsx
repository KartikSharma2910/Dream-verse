import { Fragment } from "react";
import Banner from "./Banner";
import FoodAndBevereges from "./FoodAndBeverage";
import Gallery from "./Gallery";
import NomineeShowcase from "./NomineeShowcase";
import UnleashDream from "./UnleashDream";
import VideoContainer from "./VideoContainer";
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
    </Fragment>
  );
};

export default Home;
