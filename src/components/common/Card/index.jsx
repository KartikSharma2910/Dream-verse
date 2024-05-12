import DreamCards from "./DreamCards";
import FoodCard from "./FoodCard";
import GlowCard from "./GlowCard";
import NomineeCards from "./NomineeCards";
import VoteCard from "./VoteCard";

const CardTypeMapping = {
  NomineeCards,
  DreamCards,
  FoodCard,
  VoteCard,
  GlowCard,
};

const defaultCardType = "NomineeCards";

const Card = ({ as, ...rest }) => {
  const CardType =
    (as && CardTypeMapping[as]) || CardTypeMapping[defaultCardType];

  return <CardType {...rest} />;
};

export default Card;
