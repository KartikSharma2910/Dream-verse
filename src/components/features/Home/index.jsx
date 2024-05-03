import { Fragment } from "react";
import Banner from "./Banner";
import Gallery from "./Gallery";
import NomineeShowcase from "./NomineeShowcase";
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
    </Fragment>
  );
};

export default Home;
