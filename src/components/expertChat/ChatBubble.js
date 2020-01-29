import React from "react";
import styled from "styled-components";
import moment from "moment";
import { Icon } from "antd";

const Bubble = styled.div`
  ${({ message }) => `background: ${message ? "#FB9500" : "#707070"};`}
  position: relative;
  min-width: 60%;
  border-radius: 5px;
  padding: 15px 10px;
  margin: 10px 0px;
  color: white;
  font-size: 16px;
  &:after {
    // whatever you want with normal CSS syntax. Here, a custom orange line as example
    content: " ";
    position: absolute;
    width: 0;
    height: 0;
    left: 20px;
    right: auto;
    top: auto;
    bottom: -20px;
    border: 22px solid;
    z-index: -1;
    // 
    ${({ message }) =>
      `${
        message
          ? `
          border-color: transparent transparent transparent #FB9500;
          
          `
          : `
            border-color: #707070 #707070 transparent transparent;
            left: auto;
            right: 20px;
            `
      }`}
  },
`;

const Chatbubble = ({ children, message }) => {
  return (
    <li
      style={{ position: "relative" }}
      className={`chat__ ${!message && "reply_message"}`}
    >
      <Bubble
        message={message}
        className="talk-bubble tri-right round btm-left"
      >
        {children}
      </Bubble>
      {!message && (
        <span
          style={{
            position: "absolute",
            top: "15px",
            right: "10px",
            cursor: "pointer"
          }}
        >
          <Icon type="edit" style={{ color: "white", fontSize: "26px" }} />
        </span>
      )}
      <span style={{ marginLeft: "60px", marginTop: "10px" }}>
        {moment().format("HH:MM")}
      </span>
    </li>
  );
};

export default Chatbubble;
