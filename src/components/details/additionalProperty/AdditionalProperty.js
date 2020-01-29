import React, { useState } from "react";
import { Row, Col, Select, Button } from "antd";
import "./AdditionalProperty.css";

const { Option } = Select;
function AdditionalProperty(props) {
  const [q4, setQ4] = useState(false);
  const [questions, setQuestions] = useState({
    rateType: ""
  });
  const lenders = [
    "Aib",
    "Haven",
    "Bank of Ireland",
    "EBS",
    "KBC",
    "PTSB",
    "Ulster bank",
    "Other"
  ];

  const county = [
    "Carlow",
    "Cavan",
    "Clare",
    "Cork City",
    "Cork County",
    "Denegal",
    "Dublin 1",
    "Dublin 2",
    "Dublin 3",
    "Dublin 4",
    "Dublin 5",
    "Dublin 6",
    "Dublin 6w",
    "Dublin 7",
    "Dublin 8",
    "Dublin 9",
    "Dublin 10",
    "Dublin 11",
    "Dublin 12",
    "Dublin 13",
    "Dublin 14",
    "Dublin 15",
    "Dublin 16",
    "Dublin 17",
    "Dublin 18",
    "Dublin 20",
    "Dublin 22",
    "Dublin 24",
    "Dublin Country(North)",
    "Dublin Country(South)",
    "Dublin Country(West)",
    "Galway City",
    "Galway Country",
    "Kerry",
    "Kildare",
    "Kilkenny",
    "Laois",
    "Leitrim City",
    "Limerick Country",
    "Longford",
    "Louth",
    "Mayo",
    "Meath",
    "Monaghan",
    "Offaly",
    "Roscommon",
    "Sligo",
    "Tipperary",
    "Waterford City",
    "Waterford Country",
    "Westmeath",
    "Wexford",
    "Wicklow"
  ];
  const bedrooms = [1, 2, 3, 4, 5, "5+"];
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

    setQuestions({ ...questions, [e.target.name]: e.target.value });
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
  function handleInput(e) {
    setQuestions({ ...questions, [e.target.name]: e.target.value })
  }

  return (
    <div className="details-additional-p">
      <Row className="d-row-s1">
        {/* <Col lg={24}>
          <h1 className="heading1">
            So, Let's get some details on your current property
          </h1>
          <h6 className="h61">What type of property are you currently in?</h6>
        </Col> */}
        <Col lg={24}>
          <h6 className="h61">
            What is the address of your property?
            <br />
            <br />
            Address
          </h6>
        </Col>
        <Col lg={24}>
          <div className={questions.address1 ? "input bg-orange" : "input"}>
            <input type="text" onChange={e => handleInput(e)} name="address1" placeholder="Address Line 1" />
          </div>
          <div className={questions.city ? "input bg-orange" : "input"}>
            <input type="text" onChange={e => handleInput(e)} name="city" placeholder="City" />
          </div>
          <div className="input">
            {/* <input type="text" name="Country" placeholder="County" /> */}
            <Select
              className="select-option1 select-option-big"
              defaultValue="County"
              onChange={handleChange}
            >
              {county.map((value, index) => {
                return <Option key={index} value={value}>{value}</Option>;
              })}
            </Select>
          </div>
          <div className={questions.eircode ? "input bg-orange" : "input"}>
            <input type="text" onChange={e => handleInput(e)} name="eircode" placeholder="Eircode" />
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
              {bedrooms.map((value, index) => {
                return (
                  <Option key={index} value={value}>
                    {value}
                  </Option>
                );
              })}
            </Select>
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">What is the current value of the property?</h6>
        </Col>
        <Col lg={24}>
          <div className="input3">
            <input type="text" placeholder="###########" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">
            What is the current outstanding mortgage balance?
          </h6>
        </Col>
        <Col lg={24}>
          <div className="input3">
            <input type="text" placeholder="###########" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">How many years left on the mortgage?</h6>
        </Col>
        <Col lg={24}>
          <div>
            <Select
              className="select-option1"
              defaultValue="Select Years"
              onChange={handleChange}
            >
              {years.map((value, index) => {
                return (
                  <Option key={index} value={value}>
                    {value}
                  </Option>
                );
              })}
            </Select>
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">What is the name of the lender?</h6>
        </Col>
        <Col lg={24}>
          <div>
            <Select
              className="select-option1"
              defaultValue="Select from options"
              onChange={handleChange}
            >
              {lenders.map((value, index) => {
                return (
                  <Option key={index} value={value}>
                    {value}
                  </Option>
                );
              })}
            </Select>
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">What is the mortgage account number?</h6>
        </Col>
        <Col lg={24}>
          <div className="input3">
            <input type="text" placeholder="#########" />
          </div>
        </Col>

        {/* <Col lg={24}>
          <h6 className="h61">What type of rate is your mortgage?</h6>
        </Col>
        <Col lg={24}>
          <div>
            <Select
              className="select-option1"
              defaultValue="Select from options"
              onChange={handleChange}
            >
              <Option value="1">Option 1</Option>
              <Option value="2">Option 2</Option>
              <Option value="3">Option 3</Option>
            </Select>
          </div>
        </Col> */}

        <Col lg={24}>
          <h6 className="h61">What type of mortgage is it ?</h6>
        </Col>
        <Col lg={24} className="q1">
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
              name="mortgageType"
              id="mortgageTypeA"
              className=""
              // checked={questions.purposeOfMortgage === "a"}
              value="Fixed"
            />
            <label for="mortgageTypeA">Annuity</label>
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
              name="mortgageType"
              id="mortgageTypeB"
              // checked={questions.purposeOfMortgage === "House Mover"}
              className=""
              value="Variable"
            />
            <label for="mortgageTypeB">interest only</label>
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
              name="rateType"
              id="q21"
              className=""
              // checked={questions.purposeOfMortgage === "a"}
              value="Fixed"
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
              name="rateType"
              id="q22"
              // checked={questions.purposeOfMortgage === "House Mover"}
              className=""
              value="Variable"
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
              name="rateType"
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

        {questions.rateType === "Fixed" && (
          <Col lg={24}>
            <h6 className="h61">How long is left on the fixed rate?</h6>
          </Col>
        )}
        {questions.rateType === "Fixed" && (
          <Col lg={24}>
            <div>
              <Select
                className="select-option2"
                defaultValue="Select Year"
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
        )}

        <Col lg={24}>
          <h6 className="h61">What interest rate is your mortgage?</h6>
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
          <h6 className="h61">
            Have you missed any payment over the last two years?
          </h6>
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

        <Col lg={24}>
          <h6 className="h61">
            What monthly rent do you recieve on the property?
          </h6>
        </Col>
        <Col lg={24}>
          <div className="input3">
            <input type="text" placeholder="#########" />
          </div>
        </Col>
        <br></br>
      </Row>
    </div>
  );
}
export default AdditionalProperty;
