import Coverimg from '../assets/cover.png';
import '../index.css';
function Cover() {
  const userData = ' John Bill / Creator / Moved to NYC / 27.11.22 / Live now';
  return (
    <div>
      <div className="">
        <img
          src={Coverimg}
          alt="Cover"
          className="relative inset-0 h-52 w-full object-cover"
        />
      </div>
      <div className="gloria-font absolute flex h-20 w-full items-center justify-center bg-zinc-800">
        <p className=" animate-move-right animate-move-left-to-right text-2xl  font-extralight text-zinc-300 ">
          {userData}
          {userData}
        </p>
      </div>
    </div>
  );
}

export default Cover;
