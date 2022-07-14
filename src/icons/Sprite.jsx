const Sprite = ({src=""}) => {
  return (
    <div
      style={{
        border: "1px solid white",
        marginRight: "10px",
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        background: `url(${src}}) gray`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
      }}
    >
    </div>
  );
};

export default Sprite;
