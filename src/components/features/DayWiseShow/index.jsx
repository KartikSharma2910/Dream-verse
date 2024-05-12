import { Footer, Header } from "components/common";
import { Fragment } from "react";
import Banner from "./Banner";
import Creativity from "./Creativity";
import DaysRenderer from "./DaysRenderer";
import ImageRenderer from "./ImageRenderer";
import LivePerformance from "./LivePerformance";
import Map from "./Map";

const DayWiseShow = () => {
  return (
    <Fragment>
      <Header as="UniversalHeader" />
      <Banner />
      <DaysRenderer />
      <ImageRenderer />
      <LivePerformance />
      <Creativity />
      {/* <Map /> */}
      <Footer />
    </Fragment>
  );
};

export default DayWiseShow;
