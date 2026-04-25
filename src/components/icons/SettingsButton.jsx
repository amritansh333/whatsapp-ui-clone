import SettingsIcon from "./SettingsIcon";

function SettingsButton() {
  return (
    <button className="p-2 rounded-full hover:bg-[#f0f2f5] active:bg-[#e5e7eb] transition">
      <SettingsIcon />
    </button>
  );
}

export default SettingsButton;