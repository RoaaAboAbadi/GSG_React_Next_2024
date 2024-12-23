import Numbers from "./numbers.componants";

interface IProp {
  onClick: (num: number | string) => void;
}

const NumbersList = ({ onClick }: IProp) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        maxWidth: "180px",
        margin: "0 auto",
      }}
    >
      {numbers.map((num) => (
        <Numbers key={num} num={num} onClick={(value) => onClick(value)} />
      ))}

      <Numbers
        num={"+"}
        onClick={(value) => onClick(value)}
        style={{
          backgroundColor: "#ffd700",
          color: "white",
          fontWeight: "bold",
        }}
      />
      <Numbers
        num={"-"}
        onClick={(value) => onClick(value)}
        style={{
          backgroundColor: "#ffd700",
          color: "white",
          fontWeight: "bold",
        }}
      />
      <Numbers
        num={"="}
        onClick={(value) => onClick(value)}
        style={{
          backgroundColor: "green",
          color: "white",
          fontWeight: "bold",
          flex: "1 1 100%",
        }}
      />
    </div>
  );
};
export default NumbersList;
