const Sprite = ({src=""}) => {
  return (
    <div
      style={{
        border: "1px solid white",
        marginRight: "10px",
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        backgroundImage:`url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"contain",
      }}
    >
    </div>
  );
};

export default Sprite;
