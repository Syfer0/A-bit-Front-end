import Profileimg from '../assets/Rectangle.png';
import BgCard from '../assets/card-img.jpeg';
function ProfileCard() {
  const userData = {
    name: 'Dan Mace',
    username: '/Johny_Films/',
    bio: 'Simply a film fan creating original content for YouTube. Let’s Collaborate.',
  };

  return (
    <div className=" absolute left-[83px] top-[420px] flex h-[234px] w-[600px]   rounded-l-3xl rounded-r-3xl">
      <div className="">
        <img
          className="h-[234px] w-[234px] border-r-black"
          src={Profileimg}
          alt=""
        />
      </div>
      <div
        className=" flex w-[300px] flex-col items-center  justify-evenly rounded-r-3xl px-6"
        style={{ backgroundImage: `url(${BgCard})`, backgroundSize: 'cover' }}
      >
        <div className=" flex items-center ">
          <h3 className="text-2xl font-bold uppercase">{userData.name}</h3>
          <span className="ml-8 text-sm text-[#696969]">
            {userData.username}
          </span>
        </div>
        <div className="text-[#696969] ">
          <span className="font-semibold">Bio</span>
          <p>{userData.bio}</p>
        </div>
        <div className="relative flex w-full overflow-hidden rounded-lg border">
          <button className="relative z-10 -mr-[1px] w-[10rem] cursor-auto rounded-l-md rounded-r-[4px] border border-black px-10 py-1 font-serif ">
            Creator
          </button>
          <span className="z-0 w-[10rem] rounded-r-md bg-[#000000A6]  px-10 py-1 "></span>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
