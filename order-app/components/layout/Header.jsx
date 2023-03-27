import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { useState } from "react";
import Search from "../ui/Search";
import Logo from "../ui/Logo";


function Header() {
  // modal'ı acıp kapatacak state true ise modal ekrana gelecek.
  const [isSearcModal, setİsSerchModal] = useState(false);

  return (
    <header className="h-[5.5rem] bg-secondary ">
      <div className="container flex justify-between mx-auto text-white items-center h-full">
        <Logo />
        <nav>
          <ul className="flex gap-x-2">
            <li className="px-[5px] py-[10px] hover:text-primary cursor-pointer">
              <a href="">HOME</a>
            </li>
            <li className="px-[5px] py-[10px] hover:text-primary cursor-pointer">
              <a href="">MENU</a>
            </li>
            <li className="px-[5px] py-[10px] hover:text-primary cursor-pointer">
              <a href="">ABOUT</a>
            </li>
            <li className="px-[5px] py-[10px] hover:text-primary cursor-pointer">
              <a href="">BOOKTABLE</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-x-3 items-center ">
          <a href="#">
            <FaUser className="hover:text-primary transition-all" />
          </a>
          <a href="#">
            <FaShoppingCart className="hover:text-primary transition-all" />
          </a>
          <button onClick={() => setİsSerchModal(true)}>
            <FaSearch className="hover:text-primary transition-all" />
          </button>
          <a href="#">
            <button className="btn">Order Online</button>
          </a>
        </div>
      </div>
      {isSearcModal && (
        <Search setİsSerchModal={setİsSerchModal}  />
      )}
    </header>
  );
}

export default Header;