import type { NextPage } from "next";

const about: NextPage = () => {
  const handleButton = () => {
    alert("hali");
  };

  return (
    <div>
      <h1>About</h1>
      <button onClick={handleButton}>Click</button>
    </div>
  );
};

export default about;
