import DefaultButton from "./DefaultButton";
import GradientButton from "./GradientButton";

const ButtonTypeMapping = {
  DefaultButton,
  GradientButton,
};

const defaultButtonType = "DefaultButton";

const Button = ({ as, ...rest }) => {
  const ButtonType =
    (as && ButtonTypeMapping[as]) || ButtonTypeMapping[defaultButtonType];

  return <ButtonType {...rest} />;
};

export default Button;
