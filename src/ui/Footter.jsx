function Footer() {
  return (
    <div className="mx-auto flex w-full max-w-[1360px] justify-between ">
      <div>
        <h3 className="text-[40px] font-bold">aBit</h3>
        <p className="w-[60%] font-serif text-[20px]">
          Changing the way in which creators and fans interact.
        </p>
      </div>
      <div className="flex flex-col justify-center gap-y-6 border-l border-black pl-6 text-[14px] font-semibold">
        <p>Home</p>
        <p>Are you a Creator?</p>
        <p>Support</p>
      </div>
    </div>
  );
}

export default Footer;
