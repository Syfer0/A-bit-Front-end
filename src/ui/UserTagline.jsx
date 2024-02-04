const userData =
  ' John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill /Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator / Moved to NYC / 27.11.22 / Live now';
function UserTagline() {
  return (
    <div className="gloria-font   ">
      <p className="-ml-8 overflow-hidden   whitespace-nowrap bg-[#292828] p-4 text-[1.4rem] text-gray-200">
        {userData}
      </p>
    </div>
  );
}

export default UserTagline;
