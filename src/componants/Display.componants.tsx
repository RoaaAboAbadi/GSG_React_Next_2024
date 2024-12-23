interface IProp {
  input: string;
  result: string;
}

const Display = ({ input, result }: IProp) => {
  return (
    <div
      style={{
        // border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        marginBottom: "10px",
        textAlign: "right",
        fontSize: "18px",
        backgroundColor: "#f9f9f9",
        color: "#333",
        height: "30px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <div>{input}</div>
      <div style={{ fontWeight: "bold", fontSize: "22px", color: "green" }}>
        {"="} {result}
      </div>
    </div>
  );
};
export default Display;
