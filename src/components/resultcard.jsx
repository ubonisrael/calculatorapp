import React from "react";
import { decode } from "../lib/decode";
import { FcCheckmark } from "react-icons/fc";
import { HiOutlineXMark } from "react-icons/hi2";
import { Underline } from "./underline";

const Resultcard = ({ que, answer, userAnswer }) => {
  return (
    <>
      <Underline />
      <div className="result-card">
        <p>{decode(que)}</p>
        <p className={answer === userAnswer ? "correct" : "wrong"}>
          {answer === userAnswer ? <FcCheckmark /> : <HiOutlineXMark />}{" "}
          {decode(answer)}
        </p>
      </div>
    </>
  );
};

export default Resultcard;
