const PokemonImage = ({
  src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrgu4a7W_OM8LmAuN7Prk8dzWXm7PVB_FmA&usqp=CAU",
  width = "8.39vh",
  height = "9vh",
  backgroundSize = "cover",
}) => {
  return (
    <div
      style={{
        margin: "auto",
        height,
        width,
        background: `url(${src}}) gray`,
        backgroundRepeat: "no-repeat",
        backgroundSize,
      }}
    />
  );
};

export default PokemonImage;
