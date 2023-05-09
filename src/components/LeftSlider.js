import React from "react";

const LeftSlider = ({ current }) => {
  console.log(current);
  return (
    <>
      <div className="side-nav position-absolute top-50 start-1 translate-middle-y">
        <div className="snav">
          <ul>
          {/* <div className="li-block"></div> */}

            {Array(5)
              .fill(1)
              .map((x, i) => (
                <>
                  <li key={i} className={`${current == i ? "active" : ""}`}>
                    {`0`}{i + 1}
                  </li>
                  <div className={`li-block ${((current == i)||current == (i+1)) ? "active" : ""}`}></div>
                </>
              ))}
            {/*                 
                    for(let i=0;i<3;i+=1){
                        (<li className="active">1</li>)
                    } */}

            {/* <li className="active">1</li>
            <li>2</li>
            <li>3</li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeftSlider;
