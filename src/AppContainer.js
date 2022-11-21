import React, { useState } from "react";
import App from "./App";

const AppContainer = () => {
	
	const [index, setIndex] = useState(0)
  return (
    <>
      <App ind={index} setInd={setIndex}/>
    </>
  );
};

export default AppContainer;
