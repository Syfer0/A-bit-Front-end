import Box from './Box';

function Card() {
  return (
    <div className="bg-card-image relative mb-56 mt-20 h-[312px]  w-[283.64px] rounded-2xl bg-cover bg-center">
      <p className="pl-4 pt-3 font-semibold text-white">The Sound of Silence</p>

      <div className="absolute bottom-0 left-0 right-0 px-4 py-3 text-center ">
        <div className="flex justify-between rounded-2xl bg-slate-200/20 px-6 py-2 backdrop-blur-md">
          <Box heading="Shares" value="317" />
          <Box heading="offered" value="75%" />
          <Box heading="Raised" value="$9510" />
        </div>
      </div>
    </div>
  );
}

export default Card;
