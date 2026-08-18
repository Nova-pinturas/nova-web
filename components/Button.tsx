type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
    onClick={onClick}
      className="
      bg-orange-500
      hover:bg-orange-600
      text-white
      font-semibold
      px-8
      py-4
      rounded-xl
      transition-all
      duration-300
      hover:scale-105
      shadow-lg
      hover:shadow-xl
      "
    >
      {children}
    </button>
  );
}