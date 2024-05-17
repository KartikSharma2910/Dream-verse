import { Header } from "components/common";
import { Fragment } from "react";
import ErrorScreen from "./ErrorScreen";

const ErrorPage = () => {
  return (
    <Fragment>
      <Header as="UniversalHeader" />
      <ErrorScreen />
    </Fragment>
  );
};

export default ErrorPage;
