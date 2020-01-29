import React from "react";
import { Row, Col, Collapse, Layout, Icon, message } from "antd";
import "./chat.css";
import "./bubble.css";
import ChatBox from "./chatBox";
import Rightbar from "../home/rightbar/rightbar";
import rightIcon from "../../assets/Icon ionic-md-arrow-round-forward.png";
import logo from "../../assets/Icon-Prototype-Screens (3)/icons/logo.png";
import moment from "moment";
import styled from "styled-components";
import Chatbubble from "./ChatBubble";
const { Panel } = Collapse;

const { Header, Content, Footer } = Layout;

function expertChat() {
  return (
    <>
      <Col lg={18}>
        <div className="chat-section">
          <div
            // className="chat-parent"
            style={{
              display: "flex",
              flex: 1,
              height: "auto",
              minHeight: "70vh",
              flexDirection: "column"
            }}
          >
            <div className="chat_header" style={{ background: "#707070" }}>
              <h1 style={{ color: "#fb9500" }}>Swicheroo Expert</h1>
            </div>

            <ul
              className="chat-container"
              style={{
                display: "flex",
                flex: 1,
                height: "90%",
                flexDirection: "column"
              }}
            >
              <Chatbubble message>Hey</Chatbubble>
              <Chatbubble>Hey</Chatbubble>
              {<strong>Expert typing...</strong>}
            </ul>
            <div
              className="actions-part"
              style={{
                justifySelf: "flex-end",
                height: "50px",
                borderTop: "1px solid #707070",
                display: "flex",
                alignItems: "center",

                //
                display: "flex"
              }}
            >
              <span>
                To send reply choose from the selected pop ups{" "}
                {/* <Icon type="arrow-right" /> */}
                <img className="img" src={rightIcon} />
              </span>
              <div
                style={{
                  background: "#FB9500",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  fontSize: "18px",
                  color: "white",
                  fontWeight: "bold",
                  margin: "0px 5px",
                  cursor: "pointer"
                }}
              >
                Certainty
              </div>
              <div
                style={{
                  background: "#FB9500",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  fontSize: "18px",
                  color: "white",
                  fontWeight: "bold",
                  margin: "0px 5px",
                  cursor: "pointer"
                }}
              >
                Best Rate
              </div>
            </div>
          </div>
        </div>
      </Col>

      <Col className="gutter-row" lg={6}>
        <div className="gutter-box rightbar-container">
          <Rightbar />
        </div>
      </Col>
    </>
  );
}
export default expertChat;
