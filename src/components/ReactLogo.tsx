import reactLogo from "../assets/react.svg";

// ----------------------------------------------------------------------

export const ReactLogo = () => {
  return (
    <img
      src={reactLogo}
      className="logo react"
      alt="React logo"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "70px",
      }}
    />
  );
};
