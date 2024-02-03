import Profileimg from '../assets/Rectangle.png';

function ProfileCard() {
  const userData = {
    name: 'Dan Mace',
    username: 'Johny_Films',
    bio: 'Simply a film fan creating original content for YouTube. Let’s Collaborate.',
  };

  return (
    <div className=" ... absolute inset-0 ml-20 mt-56 h-[234px]  w-[571px] overflow-hidden rounded-r-lg  bg-slate-500">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="text-center">
          <div className="overflow-hidden rounded-lg">
            <img className="h-[234px] w-[234px]" src={Profileimg} alt="" />
          </div>
        </div>
        <div className="text-white">
          <h2 className="mt-2 text-xl font-bold">{userData.name}</h2>
          <p className="text-sm">@{userData.username}</p>
          <p className="text-sm">{userData.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
