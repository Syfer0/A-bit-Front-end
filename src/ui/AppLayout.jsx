import Header from './Header';
import Cover from './Cover';
import ProfileCard from './ProfileCard';
import UserTagline from './UserTagline';
import Stats from './Stats';
import EmptyCart from './EmptyCart';
import Card from './Card';
import Footer from './Footter';
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
      <div className=" ml-16 flex gap-8 ">
        <EmptyCart />
        <Card />
      </div>
      <div className="flex items-center border-t border-[#D8D8D8] pb-32 pt-40">
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
