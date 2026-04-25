import PlusIcon from "./PlusIcon";

function PlusButton() {
  return (
    <button className="p-2 rounded-full hover:bg-[#f0f2f5] active:bg-[#e5e7eb] transition">
      <PlusIcon />
    </button>
  );
}

export default PlusButton;