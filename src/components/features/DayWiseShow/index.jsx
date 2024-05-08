import { Footer, Header } from "components/common";
import { Fragment } from "react";
import Banner from "./Banner";
import DaysRenderer from "./DaysRenderer";

const DayWiseShow = () => {
  return (
    <Fragment>
      <Header as="UniversalHeader" />
      <Banner />
      <DaysRenderer />
      <Footer />
    </Fragment>
  );
};

export default DayWiseShow;
