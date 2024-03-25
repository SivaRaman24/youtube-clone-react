import MiniSideNav from "./MiniSideNav";
import NormalSideNav from "./NormalSideNav";

const SideNavRenderer = ({ type }) => {
  switch(type) {
    case "normal":
      return <NormalSideNav />;
    case "mini":
      return <MiniSideNav />;
    default:
      return null;
  };
};

export default SideNavRenderer;
