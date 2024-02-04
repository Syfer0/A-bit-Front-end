import Header from './Header';
import Cover from './Cover';
import ProfileCard from './ProfileCard';
import UserTagline from './UserTagline';
function LandingPage() {
  return (
    <div>
      <Header />
      <div className="relative h-1/2">
        <Cover />
        <UserTagline />
        <ProfileCard />
      </div>
    </div>
  );
}

export default LandingPage;
