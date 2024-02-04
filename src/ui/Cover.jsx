import Coverimg from '../assets/cover.png';
import '../index.css';
function Cover() {
  return (
    <img
      src={Coverimg}
      alt="Cover img"
      className=" h-[498px] w-full object-cover object-center"
    />
  );
}

export default Cover;
