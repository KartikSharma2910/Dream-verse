import DefaultHeader from "./DefaultHeader";
import UniversalHeader from "./UniversalHeader";

const HeaderTypeMapping = {
  DefaultHeader,
  UniversalHeader,
};

const defaultHeaderType = "DefaultHeader";

const Header = ({ as, ...rest }) => {
  const HeaderType =
    (as && HeaderTypeMapping[as]) || HeaderTypeMapping[defaultHeaderType];
  return <HeaderType {...rest} />;
};

export default Header;
