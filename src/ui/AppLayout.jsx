import Header from './Header';
import Cover from './Cover';
import ProfileCard from './ProfileCard';
import UserTagline from './UserTagline';
import Stats from './Stats';
function LandingPage() {
  return (
    <div>
      <Header />
      <div className="relative h-1/2">
        <Cover />
        <UserTagline />
        <ProfileCard />
      </div>
      <div className=" ">
        <Stats />
      </div>
    </div>
  );
}

export default LandingPage;
