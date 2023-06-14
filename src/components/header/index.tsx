import Logo from './logo';
import NavBar from './navbar';
import Cart from './cart';
import Search from './search';
import Profile from './profile';

function Header() {
  return (
    <header
      className="flex justify-between items-center
     fixed inset-x-0 w-screen border py-3 px-10"
    >
      <div className='flex gap-10 items-center'>
        <Logo />
        <NavBar />
      </div>
      <div className="flex gap-5">
        <Search />
        <Cart />
        <Profile />
      </div>
    </header>
  );
}

export default Header;
