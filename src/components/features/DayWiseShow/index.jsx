import { Footer, Header } from "components/common";
import { Fragment } from "react";
import Banner from "./Banner";
import DaysRenderer from "./DaysRenderer";
import ImageRenderer from "./ImageRenderer";

const DayWiseShow = () => {
  return (
    <Fragment>
      <Header as="UniversalHeader" />
      <Banner />
      <DaysRenderer />
      <ImageRenderer />
      <Footer />
    </Fragment>
  );
};

export default DayWiseShow;
