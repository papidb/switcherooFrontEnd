import React, { useState, useEffect, Component } from "react";
import { Row, Col, Collapse, Layout, Icon, message } from "antd";
import "./chat.css";
import "./bubble.css";
import ChatBox from "./chatBox";
import Rightbar from "../home/rightbar/rightbar";
import rightIcon from "../../assets/Icon ionic-md-arrow-round-forward.png";
import CutLogo from "../../assets/cut_log.png";
import moment from "moment";
import styled from "styled-components";
import Chatbubble from "./ChatBubble";
import api from "../../redux/api";
import { connect } from "react-redux";
const { Panel } = Collapse;

const { Header, Content, Footer } = Layout;

class ExpertChat extends Component {
  constructor(props) {
    super(props);
    this.setLoading = this.setLoading.bind(this);
    this.setResponse = this.setResponse.bind(this);
    this.setChat = this.setChat.bind(this);
    this.clearResponse = this.clearResponse.bind(this);
  }
  // const [state, setState] = useState();
  // const [isLoading, setLoading] = useState(true);
  state = {
    isLoading: true,
    chats: [],
    possibleResponse: []
  };
  // const [chats, setChat] = useState([]);
  setLoading = isLoading => {
    this.setState({ isLoading });
  };
  setResponse = possibleResponse => {
    this.setState({ possibleResponse });
  };
  clearResponse = _ => {
    this.setState({ possibleResponse: [] });
  };
  setChat = chats => {
    const { state } = this;
    this.setState({ chats });
  };
  componentDidMount() {
    const { dispatch } = this.props;
    const { chats } = this.state;
    const { setChat, setLoading, setResponse } = this;
    (async () => {
      const token = localStorage.getItem("tokenas");
      const root = await api.get(
        "/api/expertChat/root",
        null,
        token,
        dispatch,
        (err, res) => {
          if (!err) {
            const chat = res.chat;
            let waitTime = 0;
            if (chat) {
              const questions = chat.questions;
              let newChat = [
                ...chats,
                {
                  message: questions[0],
                  time: Date.now(),
                  status: "message",
                  ...chat
                }
              ];
              setChat(newChat);
              let possibleResponse = chat.children.map(({ _id, response }) => ({
                _id,
                response
              }));
              questions.forEach((question, i) => {
                if (i == 0) return;
                setLoading(true);
                waitTime = waitTime + 2000;
                setTimeout(() => {
                  let newChat = [
                    ...this.state.chats,
                    {
                      message: question,
                      time: Date.now(),
                      status: "message",
                      ...chat
                    }
                  ];
                  // console.log({ newChat });
                  // console.log({ newChat: this.state.chats });
                  setChat(newChat);
                  if (questions.length - 1 == i) {
                    setLoading(false);
                    setResponse(possibleResponse);
                  }
                }, waitTime);
              });
            }
          }
          console.log(res, err);
        }
      );
      setLoading(false);
    })();
  }
  render() {
    const { dispatch } = this.props;
    const { isLoading, chats } = this.state;

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
              <div
                className="chat_header"
                style={{
                  background: "#707070",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "10px 30px",
                  borderTopRightRadius: "20px",
                  borderTopLeftRadius: "20px"
                }}
              >
                <img className="img" src={CutLogo} />
                <span
                  style={{
                    color: "#fb9500",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginLeft: "20px"
                  }}
                >
                  Swicheroo Expert
                </span>
              </div>

              <ul
                className="chat-container"
                style={{
                  display: "flex",
                  flex: 1,
                  height: "90%",
                  flexDirection: "column",
                  padding: "10px"
                }}
              >
                {chats.map(({ status, message, time, _id }, i) => {
                  return (
                    <Chatbubble
                      key={i}
                      time={time}
                      message={status == "message"}
                    >
                      {message}
                    </Chatbubble>
                  );
                })}
                {/* <Chatbubble message>Hey</Chatbubble>
              <Chatbubble>Hey</Chatbubble> */}
                {isLoading && <strong>Expert typing...</strong>}
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
                {this.state.possibleResponse.map(({ _id, response }) => {
                  return (
                    <div
                      key={_id}
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
                      onClick={async () => {
                        const { setChat, setLoading, setResponse } = this;
                        let newChat = [
                          ...this.state.chats,
                          {
                            message: response,
                            time: Date.now(),
                            status: "response"
                            // ...chat
                          }
                        ];

                        this.setChat(newChat);
                        this.clearResponse();
                        this.setLoading(true);
                        const token = localStorage.getItem("tokenas");
                        await api.post(
                          "/api/expertChat/getResponse",
                          { _id },
                          token,
                          dispatch,
                          (err, res) => {
                            if (!err) {
                              const chat = res;
                              let waitTime = 0;
                              if (chat) {
                                console.log({ chat });
                                const questions = chat.questions;
                                let newChat = [
                                  ...this.state.chats,
                                  {
                                    message: questions[0],
                                    time: Date.now(),
                                    status: "message",
                                    ...chat
                                  }
                                ];
                                console.log({ newChat });
                                setChat(newChat);
                                let possibleResponse =
                                  chat.children &&
                                  chat.children.map(({ _id, response }) => ({
                                    _id,
                                    response
                                  }));
                                questions.forEach((question, i) => {
                                  if (i == 0) return;
                                  setLoading(true);
                                  waitTime = waitTime + 2000;
                                  setTimeout(() => {
                                    let newChat = [
                                      ...this.state.chats,
                                      {
                                        message: question,
                                        time: Date.now(),
                                        status: "message",
                                        ...chat
                                      }
                                    ];
                                    // console.log({ newChat });
                                    // console.log({ newChat: this.state.chats });
                                    setChat(newChat);
                                    if (questions.length - 1 == i) {
                                      setLoading(false);
                                      possibleResponse &&
                                        setResponse(possibleResponse);
                                    }
                                  }, waitTime);
                                });
                              }
                            }
                            console.log(res, err);
                          }
                        );
                      }}
                    >
                      {response}
                    </div>
                  );
                })}
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
}

const mapDispatchToProps = dispatch => ({
  dispatch: state => dispatch(state)
});

const mapStateToProps = state => ({
  UserState: state.userReducer
});

export default connect(null, mapDispatchToProps)(ExpertChat);
