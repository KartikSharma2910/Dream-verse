import {
  AboutUs,
  ContactUs,
  DayWiseShow,
  ErrorPage,
  EventSelection,
  Home,
  Participants,
  PrivacyPolicy,
  TermsAndConditions,
} from "components/features";

const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/event-planner",
    element: EventSelection,
  },
  {
    path: "/participants",
    element: Participants,
  },
  {
    path: "/day-wise-show",
    element: DayWiseShow,
  },
  {
    path: "/privacy-policy",
    element: PrivacyPolicy,
  },
  {
    path: "/terms-and-condition",
    element: TermsAndConditions,
  },
  {
    path: "/about-us",
    element: AboutUs,
  },
  {
    path: "/contact-us",
    element: ContactUs,
  },
  {
    path: "*",
    element: ErrorPage,
  },
];

export default routes;
