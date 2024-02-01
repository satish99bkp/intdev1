import React, { createContext, useContext } from "react";

const Context = createContext(null);

const PropsPage = () => {
  const data = {
    name: "Pranjal",
    title: "Tiawri",
  };

  return (
    <div>
      <Context.Provider value={data}>
        <ComponentA />
      </Context.Provider>
    </div>
  );
};

export default PropsPage;

const ComponentA = () => {
  const data = useContext(Context);
  return (
    <div className="red">
      <h1>Component A</h1>
      <h1>{data?.name}</h1>
      <ComponentB />
    </div>
  );
};
const ComponentB = () => {
  return (
    <div className="blue">
      <h1>Component B</h1>
      <ComponentC />
    </div>
  );
};
const ComponentC = () => {
  const data = useContext(Context);
  return (
    <div className="green">
      <h1>Component C</h1>
      <h1>{data?.title}</h1>
    </div>
  );
};
