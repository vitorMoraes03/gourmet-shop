import Logo from "./logo";
import NavBar from "./navbar";
import Cart from "./cart";
import Search from "./search";
import Profile from "./profile";

function Header() {
  return (
    <header>
      <Logo />
      <NavBar />
      <Search />
      <Cart />
      <Profile />
    </header>
  )
};

export default Header;
