import { Fragment } from "react";
import Banner from "./Banner";
import NomineeShowcase from "./NomineeShowcase";
import WhyChoose from "./WhyChoose";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <WhyChoose />
      <NomineeShowcase />
    </Fragment>
  );
};

export default Home;
