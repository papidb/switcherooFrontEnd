import React, { useState } from "react";
import { Row, Col, Select, Button,Icon } from "antd";
import "./detailMover.css";

const { Option } = Select;
function DetailMover(props) {
  const [q4, setQ4] = useState(false);
  const [questions, setQuestions] = useState({
    q1: ""
  });

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
    <div className="detail_Mover_me">
      <Row className="d-row-s1">
        <Col lg={24}>
          <h1 className="heading1">
            So, Let's get the details on your current property
          </h1>
        </Col>
        <Col lg={24}>
          <h6 className="h61">what type of rate are you on?</h6>
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
              id="mortf"
              className=""
              // checked={questions.purposeOfMortgage === "a"}
              value="a"
            />
            <label for="mortf">Fixed</label>
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
              id="mortf1"
              // checked={questions.purposeOfMortgage === "House Mover"}
              className=""
              value="b"
            />
            <label for="mortf1">Variable</label>
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
              id="mortf2"
              // checked={
              //   questions.purposeOfMortgage === "Switcher"
              // }
              className=""
              value="c"
            />
            <label for="mortf2">Tracker</label>
          </div>
        </Col>
        <Col lg={24}>
          <h6 className="h61">How long is left on the fixed rate?</h6>
        </Col>
        <Col className="colomn_8" lg={6}>
          <div>
            <Select
              className="select-option1"
              defaultValue="Select years"
              onChange={handleChange}
            >
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
            </Select>
          </div>
        </Col>
        <Col className="colomn_8" lg={6}>
          <div>
            <Select
              className="select-option1"
              defaultValue="Select Month"
              onChange={handleChange}
            >
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
            </Select>
          </div>
        </Col>
        <Col lg={24}>
          <h6 className="h61">How long is left on the Mortgage?</h6>
        </Col>
        <Col className="colomn_8" lg={8}>
          <div>
            <Select
              className="select-option1"
              defaultValue="Select Years"
              onChange={handleChange}
            >
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
            </Select>
          </div>
        </Col>
        <Col lg={24}>
          <h6 className="h61">What is the your Monthly repayment?</h6>
        </Col>
        <Col lg={24}>
          <div className="input2">
            <span className="pre">€</span>
            <input type="text" name="value" placeholder="########" />
          </div>
        </Col>
        <Col lg={24}>
          <h6 className="h61">
            Have you missed any payments over the last two years?
          </h6>
        </Col>
        <Col lg={12} className="q1 q3 my_costuma colomn_8">
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

        <Col lg={24}>
          <h6 className="h61">
            You have equity in you current home to the amound of:
          </h6>
        </Col>
        <Col className="inputWithEdit" lg={24}>
          <div className="input">
            <input type="text" name="Address 1" placeholder="#######" />
          </div>
          <div className="edit_C">
            <Icon type="form" /> <span>edit</span>
          </div>
        </Col>
        <Col lg={24}>
          <h6 className="h61">
            We estimate estate agent and legal fees to be:
          </h6>
        </Col>
        <Col className="inputWithEdit" lg={24}>
          <div className="input">
            <input type="text" name="Address 1" placeholder="#######" />
          </div>
          <div className="edit_C">
            <Icon type="form" /> <span>edit</span>
          </div>
        </Col>
        <Col lg={24}>
          <h6 className="h61">
            So, after these fees your net equity position would to be:
          </h6>
        </Col>
        <Col className="inputWithEdit" lg={24}>
          <div className="input">
            <input type="text" name="Address 1" placeholder="#######" />
          </div>
          <div className="edit_C">
            <Icon type="form" /> <span>edit</span>
          </div>
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
              onClick={() => handleRoute("/home/details/s1")}
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
export default DetailMover;
