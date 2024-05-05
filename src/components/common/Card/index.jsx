import DreamCards from "./DreamCards";
import FoodCard from "./FoodCard";
import NomineeCards from "./NomineeCards";
import VoteCard from "./VoteCard";

const CardTypeMapping = {
  NomineeCards,
  DreamCards,
  FoodCard,
  VoteCard,
};

const defaultCardType = "NomineeCards";

const Card = ({ as, ...rest }) => {
  const CardType =
    (as && CardTypeMapping[as]) || CardTypeMapping[defaultCardType];

  return <CardType {...rest} />;
};

export default Card;
