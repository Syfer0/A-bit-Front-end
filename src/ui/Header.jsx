import profilePic from '../assets/profile-pic.png';
import { IoWallet } from 'react-icons/io5';
import { FaBell } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';
function Header() {
  let iconStyles = { color: '#9ca3af', fontSize: '1.5em' };
  return (
    <header className="flex h-20 w-full items-center justify-between border border-gray-300 bg-gray-300 bg-opacity-20 px-5">
      <h1 className=" px-24 text-2xl font-bold">aBit</h1>
      <div className="flex items-center space-x-4">
        <button className="rounded-full border-2 border-violet-500 px-4 py-1 text-sm text-violet-500 transition-colors duration-300 hover:bg-violet-500 hover:text-white">
          <span>Share new Video</span>
        </button>

        <button>{<IoWallet style={iconStyles} />}</button>
        <button>{<FaBell style={iconStyles} />}</button>
        <button>
          <img className="h-6 w-6" src={profilePic} alt="icon" />
        </button>
        <button>{<IoIosArrowDown style={iconStyles} />}</button>
      </div>
    </header>
  );
}

export default Header;
