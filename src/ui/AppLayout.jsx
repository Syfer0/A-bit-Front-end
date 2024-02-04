import Header from './Header';
import Cover from './Cover';
import ProfileCard from './ProfileCard';
import UserTagline from './UserTagline';
import Stats from './Stats';
import EmptyCart from './EmptyCart';
import Card from './Card';
function LandingPage() {
  return (
    <div>
      <Header />
      <div className="relative h-1/2">
        <Cover />
        <UserTagline />
        <ProfileCard />
      </div>
      <div className=" ml-16">
        <Stats />
      </div>
      <div className="ml-16 flex gap-8">
        <EmptyCart />
        <Card />
      </div>
    </div>
  );
}

export default LandingPage;
