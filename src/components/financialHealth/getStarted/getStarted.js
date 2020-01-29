import React, { useState, useEffect } from "react";
import { Row, Col, Button, Select, Modal } from "antd";
import { withRouter } from "react-router-dom";
import "./getStarted.css";
import Api from "../../../redux/api/financialHealthCheck";
import { connect } from "react-redux";
const phoneno = /^\d{10}$/;
const { Option } = Select;
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function info1() {
  Modal.info({
    title: "Sorry we don't do Investment Properties yet - check back with us later",
  });
}
function info2() {
  Modal.info({
    title: "Sorry we don't do Self-build properties yet - check back with us later",
  });
}
function GetStarted(props) {
  const [questions, setQuestions] = useState({
    filedBankruptcy: "",
    filedBankruptcyValidation: false,
    filedBankruptcyHelp: "",
    filedBankruptcyValidationStatus: "error",

    failedToPayLoan: "",
    failedToPayLoanValidation: false,
    failedToPayLoanHelp: "",
    failedToPayLoanValidationStatus: "error",

    purposeOfMortgage: "",
    purposeOfMortgageValidation: "",
    purposeOfMortgageHelp: "",
    purposeOfMortgageValidationStatus: "error",

    peopleOnMortgage: "one",

    firstNameSecondApplicant: "",
    lastNameSecondApplicant: "",
    contructionNature: "",
    emailSecondApplicant: "",
    emailSecondApplicantValidation: false,
    emailSecondApplicantHelp: "",
    emailSecondApplicantValidationStatus: "error",

    emailSecondApplicantre: "",
    emailSecondApplicantreValidation: false,
    emailSecondApplicantreHelp: "",
    emailSecondApplicantreValidationStatus: "error",
    phoneSecondApplicant: "",
    phoneSecondApplicantValidateStatus: "error",
    phoneSecondApplicanteHelp: "Enter a phone Number!",
    phoneSecondApplicantIsValid: false
  });
  const [q4, setQ4] = useState(false);
  function clickRadio(e) {
    var label = e.target.childNodes[1];
    if (label) {
      label.click();
    }
  }

  const validateRadio = (name, value) => {
    switch (name) {
      case "filedBankruptcy":
      case "failedToPayLoan":
      case "purposeOfMortgage":
        if (value === "") {
          setQuestions({
            ...questions,
            [name]: value,
            [`${name}Validation`]: "error",
            [`${name}Help`]: "please Select one of above",
            [`${name}ValidationStatus`]: false
          });
        } else {
          setQuestions({
            ...questions,
            [name]: value,
            [`${name}Validation`]: "success",
            [`${name}Help`]: "",
            [`${name}ValidationStatus`]: true
          });
        }
        break;
      case "emailSecondApplicant":
        if (!emailPattern.test(value)) {
          setQuestions({
            ...questions,
            [name]: value,
            emailSecondApplicantValidationStatus: "error",
            emailSecondApplicantHelp: "You email is not valid",
            emailSecondApplicantValidation: false
          });
        } else {
          setQuestions({
            ...questions,
            [name]: value,
            emailSecondApplicantValidationStatus: "success",
            emailSecondApplicantHelp: "",
            emailSecondApplicantValidation: true
          });
        }
        break;
      case "emailSecondApplicantre":
        if (value !== questions.emailSecondApplicant) {
          setQuestions({
            ...questions,
            [name]: value,
            emailSecondApplicantreValidationStatus: "error",
            emailSecondApplicantreHelp: "You email is not match",
            emailSecondApplicantreValidation: false
          });
        } else {
          setQuestions({
            ...questions,
            [name]: value,
            emailSecondApplicantreValidationStatus: "success",
            emailSecondApplicantreHelp: "",
            emailSecondApplicantreValidation: true
          });
        }
        break;
      case "phoneSecondApplicant":
        if (!phoneno.test(value)) {
          console.log(value);
          setQuestions({
            ...questions,
            [name]: value,
            phoneSecondApplicantValidateStatus: "error",
            phoneSecondApplicanteHelp: "Enter a valid Number!",
            phoneSecondApplicantIsValid: false
          });
        } else {
          setQuestions({
            ...questions,
            [name]: value,
            phoneSecondApplicantValidateStatus: "success",
            phoneSecondApplicantHelp: "",
            phoneSecondApplicantIsValid: true
          });
        }
        break;
    }
  };
  var handleQ = e => {
    var radioContainers = e.target.parentNode.parentNode.childNodes;
    var qs = questions;
    qs[e.target.name] = e.target.value;
    setQ4(!q4);
    validateRadio(e.target.name, e.target.value);
    for (var i = 0; i < radioContainers.length; i++) {
      var input = radioContainers[i].childNodes[0];
      if (input.checked) {
        input.parentNode.style.background = "#fb9500";
        input.parentNode.style.border = "2px solid #fb9500";
      } else {
        input.parentNode.style.background = "lightgray";
        input.parentNode.style.border = "2px solid gray";
      }
    }
  };

  const handleinput = e => {
    if (
      e.target.name === "emailSecondApplicant" ||
      e.target.name === "emailSecondApplicantre" ||
      e.target.name === "phoneSecondApplicant"
    ) {
      validateRadio(e.target.name, e.target.value);
    } else {
      setQuestions({ ...questions, [e.target.name]: e.target.value });
    }
    if (e.target.value !== "") {
      e.target.style.background = "#fb9500";
      e.target.style.border = "2px solid #fb9500";
    } else {
      e.target.style.background = "lightgray";
      e.target.style.border = "2px solid gray";
    }
  };
  useEffect(() => {
    console.log(props.financial_back_data)
    if (props.financial_back_data !== "") {
      const {
        filedBankruptcy,
        failedToPayLoan,
        purposeOfMortgage,
        peopleOnMortgage,
        firstNameSecondApplicant,
        lastNameSecondApplicant,
        emailSecondApplicant,
        contructionNature,
        phoneSecondApplicant
      } = props.financial_back_data;

      setQuestions({
        ...questions,
        filedBankruptcy,
        failedToPayLoan,
        purposeOfMortgage,
        peopleOnMortgage,
        firstNameSecondApplicant,
        lastNameSecondApplicant,
        contructionNature,
        emailSecondApplicant,
        emailSecondApplicantre: emailSecondApplicant,
        phoneSecondApplicant,
        emailSecondApplicantreValidationStatus: "success",
        emailSecondApplicantreHelp: "",
        emailSecondApplicantreValidation: true,
        emailSecondApplicantValidationStatus: "success",
        emailSecondApplicantHelp: "",
        emailSecondApplicantValidation: true,
        phoneSecondApplicantValidateStatus: "success",
        phoneSecondApplicantHelp: "",
        phoneSecondApplicantIsValid: true
      });
    }
  }, [props.filedBankruptcy]);

  const onsubmitForm = () => {
    const {
      filedBankruptcy,
      failedToPayLoan,
      purposeOfMortgage,
      peopleOnMortgage,
      firstNameSecondApplicant,
      lastNameSecondApplicant,
      emailSecondApplicant,
      contructionNature,
      phoneSecondApplicant
    } = questions;
    const sigle = {
      filedBankruptcy,
      failedToPayLoan,
      purposeOfMortgage,
      peopleOnMortgage,
      contructionNature
    };
    const double = {
      filedBankruptcy,
      failedToPayLoan,
      purposeOfMortgage,
      peopleOnMortgage,
      firstNameSecondApplicant,
      lastNameSecondApplicant,
      emailSecondApplicant,
      contructionNature,
      phoneSecondApplicant
    };
    console.log(questions);
    if (peopleOnMortgage === "two") {
      props.set_financial_BackGround(
        {
          userId: props.userId,
          applicants: {
            ...props.financial_back_data,
            ...double
          }
        },
        callback
      );
    } else {
      props.set_financial_BackGround(
        {
          userId: props.userId,
          applicants: {
            ...props.financial_back_data,
            ...sigle
          }
        },
        callback
      );
    }
  };
  const callback = () => {
    props.present && props.changeProfRout(1);
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }



  return (
    <div className="financial-health innerIConinner">
      <Row className="fh-row-gs">
        <Col lg={24} className="col3">
          <p className="heading3">What is the mortgage for?</p>
        </Col>
        <Col lg={24} className="q1 q3">
          <div
            onClick={e => clickRadio(e)}
            className={
              questions.purposeOfMortgage === "First Time Buyer"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="purposeOfMortgage"
              id="mortf"
              className=""
              checked={questions.purposeOfMortgage === "First Time Buyer"}
              value="First Time Buyer"
            />
            <label for="mortf">First Time Buyer</label>
          </div>
          <div
            onClick={clickRadio}
            className={
              questions.purposeOfMortgage === "House Mover"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="purposeOfMortgage"
              id="mortf1"
              checked={questions.purposeOfMortgage === "House Mover"}
              className=""
              value="House Mover"
            />
            <label for="mortf1">Moving House</label>
          </div>
          <div
            onClick={clickRadio}
            className={
              questions.purposeOfMortgage === "Switcher"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="purposeOfMortgage"
              id="mortf2"
              checked={questions.purposeOfMortgage === "Switcher"}
              className=""
              value="Switcher"
            />
            <label for="mortf2">Switching to better rate</label>
          </div>
          <div
            onClick={info1}
            className={
              questions.purposeOfMortgage === "Looking For Investment Property"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="purposeOfMortgage"
              id="mortfp"
              className=""
              checked={
                questions.purposeOfMortgage ===
                "Finance for investment property"
              }
              value="Finance for investment property"
            />
            <label for="mortfp">Finance for investment property</label>
          </div>
        </Col>

        <Col lg={24} className="col3">
          <p className="heading3">Nature of the construction?</p>
        </Col>
        <Col lg={24} className="q1 q3">
          <div
            onClick={e => clickRadio(e)}
            className={
              questions.contructionNature === "Looking For Investment Property"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="contructionNature"
              id="mortfl"
              className=""
              checked={
                questions.contructionNature ===
                "Part of a new development"
              }
              value="Part of a new development"
            />
            <label for="mortfl">Part of a new development</label>
          </div>
          <div
            onClick={clickRadio}
            className={
              questions.contructionNature === "Second Hand Home"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="contructionNature"
              id="mortf1s"
              checked={questions.contructionNature === "Second-hand property"}
              className=""
              value="Second-hand property"
            />
            <label for="mortf1s">Second-hand property</label>
          </div>
          <div
            onClick={info2}
            className={
              questions.contructionNature === "Self Build"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="contructionNature"
              id="mortf2b"
              checked={questions.contructionNature === "Self-build"}
              className=""
              value="Self-build"
            />
            <label for="mortf2b">Self-build</label>
          </div>
        </Col>
        <Col lg={24} className="col2">
          <p className="heading3">
            How many people do you want named on the mortgage?
          </p>
        </Col>
        <Col lg={24} className="note-col">
          <p className="heading2">
            It's ok if the person you're applying with doesn't have an income,
            they can still ba named on your mortgage. choose option "Two" if
            you'd like to own the property together.
          </p>
        </Col>
        <Col lg={24} className="q1">
          <div
            onClick={e => clickRadio(e)}
            className={
              questions.peopleOnMortgage === "one"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="peopleOnMortgage"
              id="q41"
              className=""
              checked={questions.peopleOnMortgage === "one"}
              value="one"
            />
            <label for="q41">One</label>
          </div>
          <div
            onClick={clickRadio}
            className={
              questions.peopleOnMortgage === "two"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="peopleOnMortgage"
              id="q42"
              className=""
              checked={questions.peopleOnMortgage === "two"}
              value="two"
            />
            <label for="q42">Two</label>
          </div>
        </Col>
        {questions.peopleOnMortgage === "two" && (
          <Col lg={24}>
            <div className="input">
              <p className="input-lbl">
                What is the First name of Second Applicant ?
              </p>
              <input
                type="text"
                className={questions.firstNameSecondApplicant ? "ifExit" : ""}
                value={questions.firstNameSecondApplicant}
                onChange={handleinput}
                name="firstNameSecondApplicant"
                placeholder="First Name"
              />
            </div>
            <div className="input">
              <p className="input-lbl">
                What is the Surname of Second Applicant ?
              </p>
              <input
                type="text"
                // className="ifExit"
                className={questions.lastNameSecondApplicant ? "ifExit" : ""}
                value={questions.lastNameSecondApplicant}
                onChange={handleinput}
                name="lastNameSecondApplicant"
                placeholder="Surname"
              />
            </div>
            <div className="input">
              <p className="input-lbl">
                What is their email? We'll invite them to fill out this application with you as we need their details also.
              </p>
              <input
                type="email"
                className={
                  questions.emailSecondApplicant &&
                    questions.emailSecondApplicantValidation
                    ? "ifExit"
                    : ""
                }
                // value={questions.emailSecondApplicant}
                onChange={handleinput}
                name="emailSecondApplicant"
                placeholder="Co-applicant@example.com"
              />
            </div>
            <div className="input">
              <p className="input-lbl">Type it one more time.</p>
              <input
                className={questions.emailSecondApplicantre ? "ifExit" : ""}
                type="email"
                // value={questions.emailSecondApplicantre}
                onChange={handleinput}
                name="emailSecondApplicantre"
                placeholder="Co-applicant@example.com"
              />
            </div>
            <div className="input">
              <p className="input-lbl">what's their Phone Number?</p>
              <input
                type="text"
                className={
                  questions.phoneSecondApplicant &&
                    questions.phoneSecondApplicantIsValid
                    ? "ifExit"
                    : ""
                }
                // value={questions.phoneSecondApplicant}
                onChange={handleinput}
                name="phoneSecondApplicant"
                placeholder=" ###########"
              />
            </div>
          </Col>
        )}
        <Col className="questionme123">
          <h6 className="heading2">
            In the last 6 years, have you or anyone you're applying with
          </h6>
          <ul className="q1-ul">
            <li>1). filled for bankruptcy</li>
            <li>2). been issued a county court judgement (CCJ)</li>
            <li>3). had your home repossesed</li>
            <li>4). entered into a Debt Relief Notice (DRN)</li>
            <li>5). entered into a Debt Sattlement Arrangement (DSA)</li>
            <li>6). entered into a Personal Insolvancy Arrangement (PIA)?</li>
          </ul>
        </Col>
        <Col lg={24} className="q1">
          <div
            onClick={e => clickRadio(e)}
            className={
              questions.filedBankruptcy === "Yes"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="filedBankruptcy"
              id="yes"
              className=""
              value="Yes"
              checked={questions.filedBankruptcy === "Yes"}
            />
            <label for="yes">Yes</label>
          </div>
          <div
            onClick={e => clickRadio(e)}
            className={
              questions.filedBankruptcy === "No"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="filedBankruptcy"
              id="no"
              className=""
              checked={questions.filedBankruptcy === "No"}
              value="No"
            />
            <label for="no">No</label>
          </div>
        </Col>
        <Col lg={24} className="col2">
          <p className="heading3">
            In the past two years, have you or anyone you're applying with
            failed to pay a loan or a bill (like utility bills, credit cards or
            personal loans) for more than 3 months in a row?
          </p>
        </Col>
        <Col lg={24} className="q1">
          <div
            onClick={e => clickRadio(e)}
            className={
              questions.failedToPayLoan === "Yes"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="failedToPayLoan"
              id="yes1"
              className=""
              checked={questions.failedToPayLoan === "Yes"}
              value="Yes"
            />
            <label for="yes1">Yes</label>
          </div>
          <div
            onClick={clickRadio}
            className={
              questions.failedToPayLoan === "No"
                ? "radio-container container_malta"
                : "radio-container"
            }
          >
            <input
              onChange={e => handleQ(e)}
              type="radio"
              name="failedToPayLoan"
              id="no1"
              className=""
              checked={questions.failedToPayLoan === "No"}
              value="No"
            />
            <label for="no1">No</label>
          </div>
        </Col>
        <Col lg={10} offset={0}>
          <div className="btn-div">
            <Button
              onClick={onsubmitForm}
              className="btn2"
              loading={props.financial_data.loading}
              disabled={
                (questions.filedBankruptcy &&
                  questions.failedToPayLoan &&
                  questions.purposeOfMortgage &&
                  questions.contructionNature &&
                  questions.peopleOnMortgage === "one") ||
                  (questions.filedBankruptcy &&
                    questions.failedToPayLoan &&
                    questions.purposeOfMortgage &&
                    questions.peopleOnMortgage === "two" &&
                    questions.firstNameSecondApplicant &&
                    questions.phoneSecondApplicantIsValid &&
                    questions.lastNameSecondApplicant &&
                    questions.emailSecondApplicantValidation &&
                    questions.emailSecondApplicantreValidation)
                  ? false
                  : true
              }
            >
              Save & Countinue
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = ({
  userReducer: {
    user: { _id }
  },
  Financial_data: { loading, error, modal, financial_Health_Check }
}) => ({
  financial_data: { loading, error, modal },
  financial_back_data: financial_Health_Check,
  userId: _id
});

const mapDispatchToProps = dispacth => ({
  set_financial_BackGround: (props, callback) =>
    dispacth(Api.financialDataPost(props, callback))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(GetStarted));

{
  /* <Col lg={24} className="q1">
<div onClick={e => clickRadio(e)} className="radio-container">
  <input
    onChange={e => handleQ(e)}
    type="radio"
    name="failedToPayLoan"
    id="yes1"
    className=""
    
    value="Yes"
  />
  <label for="yes1">Yes</label>
</div>
<div onClick={clickRadio} className="radio-container">
  <input
    onChange={e => handleQ(e)}
    type="radio"
    name="failedToPayLoan"
    id="no1"
    className=""
    value="No"
  />
  <label for="no1">No</label>
</div>
</Col> */
}
