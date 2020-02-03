import React, { useState, useEffect, Component } from "react";
import {
  Row,
  Col,
  Collapse,
  Layout,
  Icon,
  message,
  Dropdown,
  Menu,
  Button
} from "antd";
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
const TIME_INCREMENT = 2000;

class ExpertChat extends Component {
  constructor(props) {
    super(props);
    this.setLoading = this.setLoading.bind(this);
    this.setResponse = this.setResponse.bind(this);
    this.setChat = this.setChat.bind(this);
    this.clearResponse = this.clearResponse.bind(this);
    this.getResponse = this.getResponse.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }
  // const [state, setState] = useState();
  // const [isLoading, setLoading] = useState(true);
  state = {
    isLoading: true,
    // chats: [
    //   {
    //     message:
    //       "Hello [waving hands emoji], we now need to talk about potential life events and how these affect the mortgage recommendation we will give you.",
    //     time: 1580759380022,
    //     status: "message",
    //     dropdown: null
    //   },
    //   {
    //     message:
    //       "It is important that we both consider the impact of your mortage choice on any future finanical plans you may be considering (or need to consider!).",
    //     time: 1580759380118,
    //     status: "message",
    //     questions: [
    //       "Hello [waving hands emoji], we now need to talk about potential life events and how these affect the mortgage recommendation we will give you.",
    //       "It is important that we both consider the impact of your mortage choice on any future finanical plans you may be considering (or need to consider!).",
    //       "There are some choices we need to make around the type of mortgage most suited to you. Some mortgage are fixed in price over a period of years, this offers the customer certainty on the cost of their mortgage payment.",
    //       "Variable rate mortgages can increase or decrease in price but provide more flexibility on repayment should you wish to move mortgage or pay early.",
    //       "Ready to start?"
    //     ],
    //     parent: null,
    //     response: ["Yes, lets go!"],
    //     child: ["5e386d4b0537e92af14c06ca"],
    //     dropdown: null,
    //     _id: "5e386cf180ab6e2ad3b803d1",
    //     createdAt: "2020-02-03T18:56:49.360Z",
    //     updatedAt: "2020-02-03T18:58:19.759Z",
    //     __v: 0
    //   },
    //   {
    //     message:
    //       "There are some choices we need to make around the type of mortgage most suited to you. Some mortgage are fixed in price over a period of years, this offers the customer certainty on the cost of their mortgage payment.",
    //     time: 1580759380129,
    //     status: "message",
    //     parent: null,
    //     dropdown: null,
    //     _id: "5e386cf180ab6e2ad3b803d1",
    //     createdAt: "2020-02-03T18:56:49.360Z",
    //     updatedAt: "2020-02-03T18:58:19.759Z",
    //     __v: 0
    //   },
    //   {
    //     message:
    //       "Variable rate mortgages can increase or decrease in price but provide more flexibility on repayment should you wish to move mortgage or pay early.",
    //     time: 1580759380131,
    //     status: "message",
    //     parent: null,
    //     dropdown: null,
    //     _id: "5e386cf180ab6e2ad3b803d1",
    //     createdAt: "2020-02-03T18:56:49.360Z",
    //     updatedAt: "2020-02-03T18:58:19.759Z",
    //     __v: 0
    //   },
    //   {
    //     message: "Ready to start?",
    //     time: 1580759380135,
    //     status: "message",
    //     parent: null,
    //     dropdown: null,
    //     _id: "5e386cf180ab6e2ad3b803d1",
    //     createdAt: "2020-02-03T18:56:49.360Z",
    //     updatedAt: "2020-02-03T18:58:19.759Z",
    //     __v: 0
    //   },
    //   {
    //     message: "Yes, lets go!",
    //     time: 1580759380946,
    //     status: "response",
    //     possibleResponse: [
    //       {
    //         _id: "5e386cf180ab6e2ad3b803d1",
    //         response: "Yes, lets go!",
    //         dropdown: null
    //       }
    //     ],
    //     dropdown: null
    //   },
    //   {
    //     message:
    //       "Which is more important to you with respect to your mortgage payment: certainty on cost over time or best rate possible for the next 12-36 months?",
    //     time: 1580759381347,
    //     status: "message",
    //     dropdown: null
    //   },
    //   {
    //     message: "Certainty",
    //     time: 1580759381721,
    //     status: "response",
    //     possibleResponse: [
    //       {
    //         _id: "5e386d4b0537e92af14c06ca",
    //         response: "Certainty",
    //         dropdown: null
    //       },
    //       {
    //         _id: "5e386d4b0537e92af14c06ca",
    //         response: "Best rate",
    //         dropdown: null
    //       }
    //     ],
    //     dropdown: null
    //   },
    //   {
    //     message:
    //       "Are you planning on moving house over the next few years (remember if you fix your rate there will be a breakage fee to move house if its during the fixed period) ?",
    //     time: 1580759382168,
    //     status: "message",
    //     dropdown: null
    //   },
    //   {
    //     message: "Yes",
    //     time: 1580759382186,
    //     status: "response",
    //     possibleResponse: [
    //       { _id: "5e386daa37d6f42b21e5f7f0", response: "Yes", dropdown: null },
    //       { _id: "5e386daa37d6f42b21e5f7f0", response: "No", dropdown: null }
    //     ],
    //     dropdown: null
    //   },
    //   {
    //     message:
    //       "Are you planning on having a child or more children if you already have them (kids are great but are expensive so you need to consider their costs)?",
    //     time: 1580759382734,
    //     status: "message",
    //     dropdown: null
    //   },
    //   {
    //     message:
    //       "As a guide the banks typically budget around €3,500 for each child per year?",
    //     time: 1580759382763,
    //     status: "message",
    //     questions: [
    //       "Are you planning on having a child or more children if you already have them (kids are great but are expensive so you need to consider their costs)?",
    //       "As a guide the banks typically budget around €3,500 for each child per year?"
    //     ],
    //     parent: "5e386daa37d6f42b21e5f7f0",
    //     response: [
    //       "Yes - we are broody [baby emoji]",
    //       "No, all done here thanks!"
    //     ],
    //     child: ["5e38705637d6f42b21e5f7f4"],
    //     dropdown: null,
    //     _id: "5e38701e37d6f42b21e5f7f3",
    //     createdAt: "2020-02-03T19:10:22.678Z",
    //     updatedAt: "2020-02-03T19:11:18.284Z",
    //     __v: 0
    //   },
    //   {
    //     message: "Yes - we are broody [baby emoji]",
    //     time: 1580759382859,
    //     status: "response",
    //     possibleResponse: [
    //       {
    //         _id: "5e38701e37d6f42b21e5f7f3",
    //         response: "Yes - we are broody [baby emoji]",
    //         dropdown: null
    //       },
    //       {
    //         _id: "5e38701e37d6f42b21e5f7f3",
    //         response: "No, all done here thanks!",
    //         dropdown: null
    //       }
    //     ],
    //     dropdown: null
    //   },
    //   {
    //     message:
    //       "Do you expect anyone other than your spouse or children to become financially dependent on you in the next few years?",
    //     time: 1580759383190,
    //     status: "message",
    //     dropdown: null
    //   },
    //   {
    //     message: "Yes",
    //     time: 1580759383260,
    //     status: "response",
    //     possibleResponse: [
    //       { _id: "5e38705637d6f42b21e5f7f4", response: "Yes", dropdown: null },
    //       {
    //         _id: "5e38705637d6f42b21e5f7f4",
    //         response: "No (fingers crossed emoji)",
    //         dropdown: null
    //       }
    //     ],
    //     dropdown: null
    //   },
    //   {
    //     message:
    //       "Are you planning any significant expenditure over the next few years i.e wedding, extension, new car?",
    //     time: 1580759384010,
    //     status: "message",
    //     dropdown: null
    //   },
    //   {
    //     message: "Yes",
    //     time: 1580759384126,
    //     status: "response",
    //     possibleResponse: [
    //       { _id: "5e38708737d6f42b21e5f7f5", response: "Yes", dropdown: null },
    //       {
    //         _id: "5e38708737d6f42b21e5f7f5",
    //         response: "No (scream emoji)",
    //         dropdown: null
    //       }
    //     ],
    //     dropdown: null
    //   },
    //   {
    //     message:
    //       "Do you want flexibity in prepaying back your mortgage? i.e. would you want to pay back over 10% of your mortgage on an annual basis?",
    //     time: 1580759384625,
    //     status: "message",
    //     dropdown: null
    //   },
    //   {
    //     message: "Yes I would",
    //     time: 1580759384786,
    //     status: "response",
    //     possibleResponse: [
    //       {
    //         _id: "5e3870c137d6f42b21e5f7f6",
    //         response: "Yes I would",
    //         dropdown: null
    //       },
    //       {
    //         _id: "5e3870c137d6f42b21e5f7f6",
    //         response: "I wish...but unlikely!",
    //         dropdown: null
    //       }
    //     ],
    //     dropdown: null
    //   },
    //   {
    //     message:
    //       "Are you intereted in Cash Back offers which provide you a cash sum on completion?",
    //     time: 1580759385229,
    //     status: "message",
    //     dropdown: null
    //   },
    //   {
    //     message:
    //       "This could be used for furnishings, a new kitchen or what ever you choose. Remember though that this cash back offer will be embedded in the pricing (its not really free money!)",
    //     time: 1580759385254,
    //     status: "message",
    //     questions: [
    //       "Are you intereted in Cash Back offers which provide you a cash sum on completion?",
    //       "This could be used for furnishings, a new kitchen or what ever you choose. Remember though that this cash back offer will be embedded in the pricing (its not really free money!)"
    //     ],
    //     parent: "5e3870c137d6f42b21e5f7f6",
    //     response: ["Show me the money (money emoji)", "Not for me"],
    //     child: ["5e3873d737d6f42b21e5f7f8", "5e38744437d6f42b21e5f7f9"],
    //     dropdown: null,
    //     _id: "5e38721537d6f42b21e5f7f7",
    //     createdAt: "2020-02-03T19:18:45.808Z",
    //     updatedAt: "2020-02-03T19:28:04.271Z",
    //     __v: 0
    //   },
    //   {
    //     message: "Show me the money (money emoji)",
    //     time: 1580759385299,
    //     status: "response",
    //     possibleResponse: [
    //       {
    //         _id: "5e38721537d6f42b21e5f7f7",
    //         response: "Show me the money (money emoji)",
    //         dropdown: null
    //       },
    //       {
    //         _id: "5e38721537d6f42b21e5f7f7",
    //         response: "Not for me",
    //         dropdown: null
    //       }
    //     ],
    //     dropdown: null
    //   },
    //   {
    //     message:
    //       "Having considered these questions how would you rate your appettite for cetrainty versus flexibility (1= max certainty please, 5 equals = max flexibility please)",
    //     time: 1580759385643,
    //     status: "message",
    //     dropdown: 10
    //   }
    // ],
    // chats: [],
    possibleResponse: [],
    chats: []
  };
  scrollToBottom = () => {
    this.messagesEnd && this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };
  componentDidUpdate() {}
  // const [chats, setChat] = useState([]);
  setLoading = isLoading => {
    this.setState({ isLoading });
  };
  setResponse = possibleResponse => {
    if (!possibleResponse) return;
    this.setState({ possibleResponse });
  };
  handleMenuClick = () => {};
  clearResponse = _ => {
    this.setState({ possibleResponse: [] });
  };
  setChat = chats => {
    const { state } = this;
    this.setState({ chats });
    this.scrollToBottom();
  };
  componentDidMount() {
    const { dispatch } = this.props;
    const { chats, possibleResponse } = this.state;
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
            this.getResponse(chat);
          }
          // console.log(res, err);
        }
      );
      setLoading(false);
    })();
  }
  render() {
    const { dispatch } = this.props;
    const { isLoading, chats } = this.state;
    const setResponse = this.setResponse;

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
                maxHeight: "80vh",
                minHeight: "80vh",
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

              <div
                className="chat-container"
                style={{
                  display: "flex",
                  flex: 1,
                  height: "90%",
                  flexDirection: "column",
                  padding: "10px",
                  position: "relative",
                  overflowY: "scroll",
                  overflowX: "hidden",
                  width: "100%",
                  height: "100%",
                  transform: "translateZ(0)"
                }}
              >
                {/* <Chatbubble
                id={'5e38721537d6f42b21e5f7f7'}
                 /> */}
                {chats.map(
                  (
                    { status, message, time, possibleResponse, dropdown },
                    i
                  ) => {
                    return (
                      <Chatbubble
                        key={i}
                        message={status == "message"}
                        setResponse={this.setResponse}
                        {...{ possibleResponse, time, dropdown }}
                      >
                        {message}
                      </Chatbubble>
                    );
                  }
                )}
                <div
                  ref={el => {
                    this.messagesEnd = el;
                  }}
                ></div>
                {isLoading && <strong>Expert typing...</strong>}
              </div>
              <div
                className="actions-part"
                style={{
                  justifySelf: "flex-end",
                  height: "50px",
                  borderTop: "1px solid #707070",
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                  //
                  display: "flex"
                }}
              >
                <span>
                  To send reply choose from the selected pop ups{" "}
                  {/* <Icon type="arrow-right" /> */}
                  <img className="img" src={rightIcon} />
                </span>
                {this.state.possibleResponse.map(
                  ({ _id, response, dropdown }) => {
                    if (dropdown) {
                      const menu = (
                        <Menu
                          onClick={async ({
                            item: {
                              props: { children }
                            }
                          }) => {
                            const { setChat, setLoading, setResponse } = this;
                            let newChat = [
                              ...this.state.chats,
                              {
                                message: children,
                                time: new Date().toJSON(),
                                status: "response",
                                // ...chat,
                                possibleResponse: this.state.possibleResponse
                              }
                            ];

                            this.setChat(newChat);
                            await this.scrollToBottom();
                            this.clearResponse();
                            this.setLoading(true);
                            const token = localStorage.getItem("tokenas");
                            this.scrollToBottom();

                            await api.post(
                              "/api/expertChat/getResponse",
                              { _id },
                              token,
                              dispatch,
                              (err, res) => {
                                if (!err) {
                                  const chat = res;
                                  let waitTime = 0;
                                  this.scrollToBottom();
                                  this.getResponse(chat);
                                }
                                console.log(res, err);
                              }
                            );
                          }}
                        >
                          {Array.from(new Array(dropdown)).map((n, i) => (
                            <Menu.Item key={Math.random() * 19302930}>
                              {i + 1}
                            </Menu.Item>
                          ))}
                        </Menu>
                      );
                      return (
                        <div
                          key={`${_id}${Math.random() * 100000}`}
                          style={{
                            background: "#FB9500",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            fontSize: "18px",
                            color: "white",
                            fontWeight: "bold",
                            margin: "0px 5px",
                            cursor: "pointer",
                            minWidth: "100px"
                          }}
                        >
                          <Dropdown placement={"topCenter"} overlay={menu}>
                            <Button
                              style={{ background: "#fb9500", border: "none" }}
                            >
                              Choose... <Icon type="up" />
                            </Button>
                          </Dropdown>
                        </div>
                      );
                    }
                    return (
                      <div
                        key={`${_id}${Math.random() * 100000}`}
                        style={{
                          background: "#FB9500",
                          padding: "5px 10px",
                          borderRadius: "5px",
                          fontSize: "18px",
                          color: "white",
                          fontWeight: "bold",
                          margin: "0px 5px",
                          cursor: "pointer",
                          minWidth: "100px"
                        }}
                        onClick={async () => {
                          const { setChat, setLoading, setResponse } = this;
                          let newChat = [
                            ...this.state.chats,
                            {
                              message: response,
                              time: new Date().toJSON(),
                              status: "response",
                              // ...chat,
                              possibleResponse: this.state.possibleResponse,
                              dropdown
                            }
                          ];

                          this.setChat(newChat);
                          await this.scrollToBottom();
                          this.clearResponse();
                          this.setLoading(true);
                          const token = localStorage.getItem("tokenas");
                          this.scrollToBottom();

                          await api.post(
                            "/api/expertChat/getResponse",
                            { _id },
                            token,
                            dispatch,
                            (err, res) => {
                              if (!err) {
                                const chat = res;
                                let waitTime = 0;
                                this.scrollToBottom();
                                this.getResponse(chat);
                              }
                              console.log(res, err);
                            }
                          );
                        }}
                      >
                        {response}
                      </div>
                    );
                  }
                )}
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
  getResponse = chat => {
    let waitTime = 0;

    const { setChat, setLoading, setResponse } = this;
    this.scrollToBottom();
    if (chat) {
      const questions = chat.questions;
      let newChat = [
        ...this.state.chats,
        {
          message: questions[0],
          time: new Date().toJSON(),
          status: "message",
          dropdown: chat.dropdown
          // ...chat
        }
      ];
      setChat(newChat);
      // console.log({ dropdown: chat.dropdown });

      let possibleResponse =
        chat.response &&
        chat.response.map(response => ({
          _id: chat._id,
          response,
          dropdown: chat.dropdown
        }));
      if (questions.length <= 1) {
        setLoading(false);
        this.setResponse(possibleResponse);
      }

      questions.forEach((question, i) => {
        if (i == 0) return;
        setLoading(true);
        waitTime = waitTime + TIME_INCREMENT;
        this.scrollToBottom();

        setTimeout(() => {
          let newChat = [
            ...this.state.chats,
            {
              message: question,
              time: new Date().toJSON(),
              status: "message",
              ...chat
            }
          ];
          setChat(newChat);
          this.scrollToBottom();

          if (questions.length - 1 == i) {
            setLoading(false);
            this.setResponse(possibleResponse);
          }
        }, waitTime);
      });
    }
  };
}

const mapDispatchToProps = dispatch => ({
  dispatch: state => dispatch(state)
});

const mapStateToProps = state => ({
  UserState: state.userReducer
});

export default connect(null, mapDispatchToProps)(ExpertChat);
