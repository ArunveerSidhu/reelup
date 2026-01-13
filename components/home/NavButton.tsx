type NavButton = {
  title: string;
  onClick?: () => void;
};

export const NavButton = ({ title, onClick }: NavButton) => {
  return (
    <button
      className="bg-[#fb7da8] hover:bg-[#fd5a46] cursor-pointer active:scale-95 py-1.5 px-4 leading-tight font-lato font-bold text-lg border-b-4 border-l-2 border-r-4 border-t-2 capitalize"
      onClick={onClick}
    >
      {title}
    </button>
  );
};
