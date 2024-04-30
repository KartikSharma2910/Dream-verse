import DreamCards from "./DreamCards";
import NomineeCards from "./NomineeCards";

const CardTypeMapping = {
  NomineeCards,
  DreamCards,
};

const defaultCardType = "NomineeCards";

const Card = ({ as, ...rest }) => {
  const CardType =
    (as && CardTypeMapping[as]) || CardTypeMapping[defaultCardType];

  return <CardType {...rest} />;
};

export default Card;
