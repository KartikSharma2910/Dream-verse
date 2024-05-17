import { Footer, Header } from "components/common";
import { Fragment } from "react";
import Banner from "./Banner";
import Form from "./Form";

const ContactUs = () => {
  return (
    <Fragment>
      <Header as="UniversalHeader" />
      <Banner />
      <Form />
      <Footer />
    </Fragment>
  );
};

export default ContactUs;
