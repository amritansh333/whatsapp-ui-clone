const ProfileIcon = ({ className = "", src }) => {
  return (
    <div className={`w-7 h-7 rounded-full overflow-hidden ${className}`}>
      <img
        src="https://i.pravatar.cc/150?img=12"
        alt="profile"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ProfileIcon;