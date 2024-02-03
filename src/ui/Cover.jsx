import Coverimg from '../assets/cover.png';
import '../index.css';
function Cover() {
  const userData =
    ' John Bill / Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator / Moved to NYC / 27.11.22 / Live now /John Bill / ';
  return (
    <div className=" relative">
      <div>
        <img
          src={Coverimg}
          alt="Cover"
          className="relative inset-0 h-52 w-full object-cover"
        />
      </div>
      <div className="gloria-font  flex h-20 w-full items-center justify-center overscroll-none  bg-zinc-800">
        <p className=" animate-move-left-to-right animate-move-right-to-left duration-300font-extralight  text-2xl   text-zinc-300 transition-all ">
          {userData}
        </p>
      </div>
    </div>
  );
}

export default Cover;
