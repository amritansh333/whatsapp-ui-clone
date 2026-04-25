import VideoCallIcon from "./VideoCallIcon";
import DropdownIcon from "./DropdownIcon";

const CallButton = () => {
  return (
    <button className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-400 hover:bg-[#F6F5F4] transition">

      {/* Video Icon */}
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-current"
      >
        <path d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H16C16.55 4 17.0208 4.19583 17.4125 4.5875C17.8042 4.97917 18 5.45 18 6V10.5L21.15 7.35C21.3167 7.18333 21.5 7.14167 21.7 7.225C21.9 7.30833 22 7.46667 22 7.7V16.3C22 16.5333 21.9 16.6917 21.7 16.775C21.5 16.8583 21.3167 16.8167 21.15 16.65L18 13.5V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H4ZM4 18H16V6H4V18Z" />
      </svg>

      {/* Text */}
      <span className="text-sm font-medium">Call</span>

      {/* Dropdown Arrow */}
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4 opacity-70"
      >
        <path d="M7 10l5 5 5-5H7z" />
      </svg>

    </button>
  );
};

export default CallButton;