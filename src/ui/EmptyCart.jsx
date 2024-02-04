import { FaPlus } from 'react-icons/fa6';
function EmptyCart() {
  let iconStyles = { color: '#9ca3af', fontSize: '2em' };
  return (
    <div className=" bg-# relative mt-20 h-[312px] w-[283.64px] rounded-2xl bg-[#EDEDED]">
      <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <FaPlus style={iconStyles} />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5 text-center text-[#A0A0A0]">
        You haven’t uploaded any videos with aBit yet. Add now!
      </div>
    </div>
  );
}

export default EmptyCart;
