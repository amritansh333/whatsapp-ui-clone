const Divider = ({ className = "" }) => {
  return (
    <hr
      className={`border-t border-black opacity-40 my-3 ${className}`}
    />
  );
};

export default Divider;