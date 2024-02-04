import Stat from './Stat';

function Stats() {
  return (
    <div className="flex auto-cols-max gap-4 pt-48 ">
      <div className="w-[60%] border-r border-[#7A7A7A]">
        <span className="font-serif text-[28px]">Release</span>
        <p className="line font-serif font-light italic tracking-wider text-[#565656]">
          Videos that you upload in collaboration with aBit appear here.
        </p>
      </div>

      <div className="w-[10%] border-r border-[#7A7A7A]">
        <Stat value="1" name="Shared Videos" />
      </div>
      <div className="w-[10%] border-r border-[#7A7A7A] ">
        <Stat value="$9510" name="Funds Raised" />
      </div>
      <div className="w-[10%] border-r border-[#7A7A7A] ">
        <Stat value="317" name="Co-owner community" />
      </div>
      <div className="w-[10%] ">
        <Stat value="$3804" name="Co-owner Earnings" />
      </div>
    </div>
  );
}

export default Stats;
