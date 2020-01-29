import React, { useState } from "react";
import { Row, Col, Select, Button } from "antd";
import "./step3.css";

const { Option } = Select;
function StepThree(props) {
  const [q4, setQ4] = useState(false);
  const [questions, setQuestions] = useState({
    q1: ""
  });
  const lenders = ["KBC", "Ulster Bank", "AIB", "Bank of Ireland", "ICS", "PTSB", "EBS", "Other"]
  const years = [];
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
    <div className="details-step-three">
      <Row className="d-row-s1">
        <Col lg={24}>
          <h1 className="heading1">
            Let's get some details on your current property and mortgage
          </h1>
          <h6 className="h61">
            What year did you buy the property?
          </h6>
        </Col>

        {/* <Col lg={24} className="q1 q3">
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
              name="r1"
              id="r11"
              className=""
              // checked={questions.purposeOfMortgage === "a"}
              value="a"
            />
            <label for="r11">House</label>
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
              name="r1"
              id="r12"
              // checked={questions.purposeOfMortgage === "House Mover"}
              className=""
              value="b"
            />
            <label for="r12">Appartment</label>
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">How many bedrooms does it have?</h6>
        </Col>
        <Col lg={24}>
          <div>
            <Select
              className="select-option1"
              defaultValue="Select from options"
              onChange={handleChange}
            >
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
            </Select>
          </div>
        </Col> */}

        {/* <Col lg={24}>
          <h6 className="h61">What year did you buy the property?</h6>
        </Col> */}
        <Col lg={24}>
          <div className="input3">
            <input type="text" placeholder="What year" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">How old is the property?</h6>
        </Col>
        <Col lg={24}>
          <div className="input3">
            <input type="text" placeholder="Years" />
          </div>
        </Col>


        <Col lg={24}>
          <h6 className="h61">What was the purchase price when you bought the property?</h6>
        </Col>
        <Col lg={24}>
          <div className="input2">
            <span className="pre">€</span>
            <input type="text" placeholder="########" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61 mm" >What is the current value of the property?</h6>
          <p className="mini-msg">(if you don't know an estimate is fine for now)</p>
        </Col>
        <Col lg={24}>
          <div className="input2">
            <span className="pre">€</span>
            <input type="text" name="value" placeholder="########" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Name of Current lender?</h6>
        </Col>
        <Col lg={24}>
          <div>
            <Select
              className="select-option1"
              defaultValue="Select from options"
              onChange={handleChange}
            >
              {lenders.map((value, index) => {
                return <Option key={index} value={value}>{value}</Option>
              })}
            </Select>
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Mortgage account number?</h6>
        </Col>
        <Col lg={24}>
          <div className="input3">
            <input type="text" placeholder="#######" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">What is the current outstading balance?</h6>
        </Col>
        <Col lg={24}>
          <div className="input2">
            <span className="pre">€</span>
            <input type="text" placeholder="########" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">What year did you start the mortgate?</h6>
        </Col>
        <Col lg={24}>
          <div className="input3">
            <input type="text" placeholder="Write year" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">What type of rate you are on?</h6>
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
              name="q2"
              id="q21"
              className=""
              // checked={questions.purposeOfMortgage === "a"}
              value="a"
            />
            <label for="q21">Fixed</label>
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
              name="q2"
              id="q22"
              // checked={questions.purposeOfMortgage === "House Mover"}
              className=""
              value="b"
            />
            <label for="q22">Variable</label>
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
              name="q2"
              id="q23"
              // checked={
              //   questions.purposeOfMortgage === "Switcher"
              // }
              className=""
              value="c"
            />
            <label for="q23">Tracker</label>
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">How long is left on the fixed rate?</h6>
        </Col>
        <Col lg={24}>
          <div>
            <Select
              className="select-option2"
              defaultValue="Select Years"
              onChange={handleChange}
            >
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
              <Option value="5">5</Option>
              <Option value="6">6</Option>
              <Option value="7">7</Option>
              <Option value="8">8</Option>
              <Option value="9">9</Option>
              <Option value="10">10</Option>
            </Select>
            <Select
              className="select-option2"
              defaultValue="Select Month"
              onChange={handleChange}
            >
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
              <Option value="5">5</Option>
              <Option value="6">6</Option>
              <Option value="7">7</Option>
              <Option value="8">8</Option>
              <Option value="9">9</Option>
              <Option value="10">10</Option>
              <Option value="11">11</Option>
              <Option value="12">12</Option>
            </Select>
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">How long is left on the mortgage?</h6>
        </Col>
        <Col lg={24}>
          <div>
            <Select
              className="select-option1"
              defaultValue="Select Years"
              onChange={handleChange}
            >
              {
                years.map((value, index) => {
                  return (<Option key={index} value={value}>{value}</Option>)
                })
              }
            </Select>
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">What interest rate are you paying??</h6>
        </Col>
        <Col lg={24}>
          <div className="input2post">
            <span className="post">%</span>
            <input type="text" placeholder="" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">What is your monthly repayment?</h6>
        </Col>
        <Col lg={24}>
          <div className="input2">
            <span className="pre">€</span>
            <input type="text" placeholder="########" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Have you missed any payment over the last two years?</h6>
        </Col>
        <Col lg={24} className="q1 q4">
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
              name="q3"
              id="q31"
              className=""
              // checked={questions.purposeOfMortgage === "a"}
              value="a"
            />
            <label for="q31">Yes</label>
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
              name="q3"
              id="q32"
              // checked={questions.purposeOfMortgage === "House Mover"}
              className=""
              value="b"
            />
            <label for="q32">No</label>
          </div>

        </Col>

        <Col lg={10} offset={0}>
          <br />
          <br />
          <div className="btn-div">
            <Button
              style={{ height: "40px" }}
              onClick={() => window.history.back()}
              className="btn1"
            >
              Back
            </Button>
            <Button
              onClick={() => handleRoute("/home/details/switcher3")}
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
              Countinue
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default StepThree;
