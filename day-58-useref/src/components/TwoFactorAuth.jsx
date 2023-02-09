import React, { useState, useRef } from "react";

const TwoFactorAuth = () => {
  const [isVerify, setIsVerify] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const inputGroupRef = useRef(0);
  const numArr = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];

  function handleChange(i) {
    console.log(inputGroupRef.current.children[i].value);
    if (
      inputGroupRef.current.children[i].value != "" &&
      i < inputGroupRef.current.children.length - 1
    ) {
      console.log(i);
      inputGroupRef.current.children[i + 1].focus();
    }
    const fill = [...inputGroupRef.current.children].every(
      (num) => num.value != ""
    );
    [...inputGroupRef.current.children].forEach((num) =>
      console.log(num.value)
    );
    setIsFilled(fill);
    console.log(isFilled);
  }

  function handleVerify() {
    if (isFilled) {
      console.log("verified");
    }
  }

  return (
    <>
      <h1>Two factor authentication кодын жишээ useRef ашигласан.</h1>
      {isFilled ? (
        <h1>Verified</h1>
      ) : (
        <section className="box" ref={inputGroupRef}>
          {numArr.map((num, index) => (
            <input
              style={{ width: "30px", marginLeft: "5px" }}
              maxLength={1}
              ref={num.ref}
              type="text"
              onChange={() => handleChange(index)}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default TwoFactorAuth;
