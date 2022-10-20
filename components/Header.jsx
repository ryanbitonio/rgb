import { TbMoonStars } from "react-icons/tb";
import { Nav } from "../styles/Nav";
import { NavMenu } from "../styles/NavMenu";

function Header() {
  return (
    <Nav>
      <NavMenu>
        <h3>HOME</h3>
        <h3>SKILLS</h3>
        <h3>PORTFOLIO</h3>
        <h3>CONTACT</h3>
      </NavMenu>
      <TbMoonStars />
    </Nav>
  );
}

export default Header;
