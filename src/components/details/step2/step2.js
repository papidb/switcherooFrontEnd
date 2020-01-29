import React, { useState } from "react";
import { Row, Col, Select, Button } from "antd";
import "./step2.css";

const { Option } = Select;
function StepTwo(props) {
  const [q4, setQ4] = useState(false);
  const [disDutyTaxes, setDisDutyTaxes] = useState(true);
  const [disRegistrationFee, setDisRegistrationFee] = useState(true);
  const [disLoanAmount, setDisLoanAmount] = useState(true);
  const [questions, setQuestions] = useState({
    q1: ""
  });
  const sourcesOfDeposit = ["earnings", "gift", "inheritance", "sale of assets", "equity relase", "other"];
  const years=[];
  for (var i = 1; i <= 35; i++) {
    years.push(i);
  }
  function clickRadio(e) {
    var label = e.target.childNodes[1];
    if (label) {
      label.click();
    }
  }
  var handleQ = e => {
    var radioContainers = e.target.parentNode.parentNode.childNodes;
    var qs = questions;
    qs[e.target.name] = e.target.value;
    setQ4(!q4);
    // validateRadio(e.target.name, e.target.value);
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
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const handleRoute = route => {
    props.history.push(route);
  };

  return (
    <div className="details-step-two">
      <Row className="d-row-s1">
        <Col lg={24}>
          <h1 className="heading1">Details about your loan</h1>
          <h6 className="h61">
            What is the value of the property?
          </h6>
          <h6 className="h61">

          </h6>
        </Col>

        <Col lg={24}>
          <div className="input2">
            <span className="pre">€</span>
            <input type="text" name="value" placeholder="########" />
          </div>
        </Col>
        <Col lg={24}>
          <h6 className="h61">How much of a deposit/saving do you have for the property?</h6>
        </Col>
        <Col lg={24} className="q1">
          <div className="input2">
            <span className="pre">€</span>
            <input type="text" name="value" placeholder="########" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">What is the source of this deposit</h6>
        </Col>
        <Col lg={24}>
          <div>
            <Select
              className="select-option1"
              defaultValue="Select from options"
              onChange={handleChange}
            >
              {sourcesOfDeposit.map((value, index) => {
                return <Option key={index} value={value}>{value}</Option>
              })}

            </Select>
          </div>
        </Col>


        <Col lg={24}>
          <h6 className="h61">
            There will be the stamp duty taxes of:
          </h6>
        </Col>
        <Col lg={24} className="q1">
          <div className={disDutyTaxes ? "input2 input2disabled" : "input2"}>
            <span className="pre">€</span>
            <input type="text" disabled={disDutyTaxes} name="dutyTaxes" placeholder="########" />
          </div>
          <div className="input-edit-btn" onClick={() => setDisDutyTaxes(false)} >
            <span className="far fa-edit span1"></span>
            <span className=".span">Edit</span>
          </div>
        </Col>



        <Col lg={24}>
          <h6 className="h61">
            We have estimated legel, registration and survay fees of :
          </h6>
        </Col>
        <Col lg={24} className="q1">
          <div className={disRegistrationFee ? "input2 input2disabled" : "input2"}>
            <span className="pre">€</span>
            <input type="text" disabled={disRegistrationFee} name="registrationSurvayFee" placeholder="########" />
          </div>
          <div className="input-edit-btn" onClick={() => setDisRegistrationFee(false)}>
            <span className="far fa-edit span1"></span>
            <span className=".span">Edit</span>
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">
            So, you need loan of...
          </h6>
        </Col>
        <Col lg={24} className="q1">
          <div className={disLoanAmount ? "input2 input2disabled" : "input2"}>
            <span className="pre">€</span>
            <input type="text" disabled={disLoanAmount} name="loanAmount" placeholder="########" />
          </div>
          <div className="input-edit-btn" onClick={() => setDisLoanAmount(false)}>
            <span className="far fa-edit span1"></span>
            <span className=".span">Edit</span>
          </div>
        </Col>


        <Col lg={24}>
          <h6 className="h61">How many years are you looking to borrow for?</h6>
        </Col>
        <Col lg={24}>
          <div>
            <Select
              className="select-option1"
              defaultValue="Select Year"
              onChange={handleChange}
            >
              {years.map((value, index) => {
                return <Option key={index} value={value}>{value}</Option>
              })}

            </Select>
          </div>
        </Col>




        <Col lg={24}>
          <br />
          <h1 className="heading1 heading2">Thanks for those details - now let's get further details about yourself</h1>
        </Col>

        <Col lg={10} offset={0}>
          <div className="btn-div">
            <Button
              style={{ height: "40px" }}
              onClick={() => window.history.back()}
              className="btn1"
            >
              Back
            </Button>
            <Button
              onClick={() => handleRoute("/home/details/s3")}
              // onClick={onsubmitForm}
              className="btn2"
            // loading={props.financial_data.loading}
            // disabled={
            //   (questions.filedBankruptcy &&
            //     questions.failedToPayLoan &&
            //     questions.purposeOfMortgage &&
            //     questions.peopleOnMortgage === "one") ||
            //     (questions.filedBankruptcy &&
            //       questions.failedToPayLoan &&
            //       questions.purposeOfMortgage &&
            //       questions.peopleOnMortgage === "two" &&
            //       questions.firstNameSecondApplicant &&
            //       questions.lastNameSecondApplicant &&
            //       questions.emailSecondApplicantValidation &&
            //       questions.emailSecondApplicantreValidation)
            //     ? false
            //     : true
            // }
            >
              Save & Countinue
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default StepTwo;
