interface IProp {
  num: number | string;
  onClick: (num: number | string) => void;
  style?: React.CSSProperties;
}
const Numbers = ({ num, onClick, style }: IProp) => {
  return (
    <>
      <button
        onClick={() => onClick(num)}
        style={{
          background: "blue",
          color: "white",
          ...style,
        }}
      >
        {num}
      </button>
    </>
  );
};

export default Numbers;
