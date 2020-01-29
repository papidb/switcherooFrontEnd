import React, { useState } from "react";
import { Row, Col, Select, Button } from "antd";
import "./personalDetails1.css";

const { Option } = Select;
function PersonalDetails1(props) {
  const [q4, setQ4] = useState(false);
  const [disEstimate, setDisEstimate] = useState(true);
  const [addP, setAddP] = useState(undefined);
  const [questions, setQuestions] = useState({
    q1: ""
  });
  const purposes = ["Extension", "Kitchen", "Home improvements", "Furniture", "Other"];
  const sources = ["earnings", "gift", "inheritance", "sale of assets", "equity relase", "other"];
  const additionaProperties = [1, 2, 3, 4, "4+"];
  const goBy = ["Mr", "Mrs", "Miss", "Dr.", "Other"]
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
  function handleAdditionalP(value) {
    setAddP(value);
  }
  function handleInput(e){
    setQuestions({...questions, [e.target.name]:e.target.value})
  }
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  function handleSource(value) {
    setQuestions({ ...questions, source: value })
  }
  function handlePurpose(value) {
    setQuestions({ ...questions, purpose: value })
  }
  const handleRoute = route => {
    if (addP && addP > 0)
      props.history.push(route + "/" + addP);
    else
      props.history.push("/home/details/final_page");

  };
  return (
    <div className="personal-details1">
      <Row className="d-row-s1">
        <Col lg={24}>
          <h1 className="heading1">
            Now let's get some personal details about yourself
          </h1>
          <h6 className="h61">
            You go by?
          </h6>
        </Col>

        <Col lg={24}>
          <div>
            <Select
              className="select-option1"
              defaultValue="Select from options"
              onChange={handlePurpose}
            >
              {goBy.map((value, index) => {
                return <Option key={index} value={value}>{value}</Option>
              })}

            </Select>
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">
            What is your first name?
          </h6>
        </Col>
        <Col lg={24} className="q1">
          <div className={disEstimate ? "input2 input2simple input2disabled " : "input2 input2simple"}>
            {/* <span className="pre">€</span> */}
            <input type="text" disabled={disEstimate} name="firstName" placeholder="First name" />
          </div>
          <div className="input-edit-btn" onClick={() => setDisEstimate(false)} >
            <span className="far fa-edit span1"></span>
            <span className=".span">Edit</span>
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">
            What is your surname?
          </h6>
        </Col>
        <Col lg={24} className="q1">
          <div className={disEstimate ? "input2 input2simple input2disabled " : "input2 input2simple"}>
            <input type="text" disabled={disEstimate} name="surname" placeholder="Surname" />
          </div>
          <div className="input-edit-btn" onClick={() => setDisEstimate(false)} >
            <span className="far fa-edit span1"></span>
            <span className=".span">Edit</span>
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">
            What is your middle name if applicable?
          </h6>
        </Col>
        <Col lg={24} className="q1">
          <div className={questions.middleName ? "input2 input2simple":"input2 input2simple input2disabled"}>
            <input type="text" name="middleName" onChange={handleInput} placeholder="middle name" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">
            What is your maiden name if applicable?
          </h6>
        </Col>
        <Col lg={24} className="q1">
          <div className={questions.maidenName ? "input2 input2simple":"input2 input2simple input2disabled"}>
            <input type="text" name="maidenName" onChange={handleInput} placeholder="maiden name" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">You identify yourself as </h6>
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
              name="gender"
              id="genderM"
              className=""
              // checked={questions.purposeOfMortgage === "a"}
              value="Male"
            />
            <label for="genderM">Male</label>
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
              name="gender"
              id="genderF"
              // checked={questions.purposeOfMortgage === "House Mover"}
              className=""
              value="Female"
            />
            <label for="genderF">Female</label>
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
              name="gender"
              id="genderO"
              // checked={questions.purposeOfMortgage === "House Mover"}
              className=""
              value="Other"
            />
            <label for="genderO">Other</label>
          </div>
        </Col>

        



        <Col lg={24}>
          <h6 className="h61">Please provide purpose?</h6>
        </Col>
        <Col lg={24}>
          <div>
            <Select
              className="select-option1"
              defaultValue="Select from options"
              onChange={handlePurpose}
            >
              {purposes.map((value, index) => {
                return <Option key={index} value={value}>{value}</Option>
              })}

            </Select>
          </div>
        </Col>
        {
          questions.purpose === "Other" &&
          <Col lg={24}>
            <h6 className="h61">
              Please detail other purpose
            </h6>
          </Col>
        }
        {
          questions.purpose === "Other" &&
          <Col lg={24}>
            <div className="textarea-input">
              <textarea placeholder="please explain your other purppose in n words"></textarea>
            </div>
          </Col>
        }


        <Col lg={24}>
          <h6 className="h61">
            Any additional savings to be put against the mortgage?
          </h6>
        </Col>
        <Col lg={24}>
          <div className="input2">
            <span className="pre">€</span>
            <input type="text" placeholder="########" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Please provide source?</h6>
        </Col>
        <Col lg={24}>
          <div>
            <Select
              className="select-option1"
              defaultValue="Select from options"
              onChange={handleSource}
            >
              {sources.map((value, index) => {
                return <Option key={index} value={value}>{value}</Option>
              })}
            </Select>
          </div>
        </Col>
        {
          questions.source === "other" &&
          <Col lg={24}>
            <h6 className="h61">
              Please detail other source
          </h6>
          </Col>}
        {questions.source === "other" &&
          <Col lg={24}>
            <div className="textarea-input">
              <textarea placeholder="please explain your other purppose in n words"></textarea>
            </div>
          </Col>
        }

        <Col lg={24}>
          <h6 className="h61">
            So we estimate you require a loan of :
          </h6>
        </Col>
        <Col lg={24} className="q1">
          <div className={disEstimate ? "input2 input2simple input2disabled " : "input2 input2simple"}>
            {/* <span className="pre">€</span> */}
            <input type="text" disabled={disEstimate} name="dutyTaxes" placeholder="########" />
          </div>
          <div className="input-edit-btn" onClick={() => setDisEstimate(false)} >
            <span className="far fa-edit span1"></span>
            <span className=".span">Edit</span>
          </div>
        </Col>
        {/* <Col lg={24}>
          <div className="input2">
            <span className="pre">€</span>
            <input type="text" placeholder="########" />
          </div>
        </Col> */}

        <Col lg={24}>
          <h6 className="h61">How many years are you looking to borrow for?</h6>
        </Col>
        <Col lg={24}>
          <div>
            <Select
              className="select-option1"
              defaultValue="Select from options"
              onChange={handleChange}
            >
              {years.map((value, index) => {
                return <Option key={index} value={value}>{value}</Option>
              })}
            </Select>
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Do you have any other additional properties with a mortgage?</h6>
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
          <h6 className="h61">How many numbers of additional properties do you have?</h6>
        </Col>
        {/* <Col lg={24}>
          <div className="input3">
            <input type="text" onChange={handleAdditionalP} placeholder="Enter a number" />
          </div>
        </Col> */}
        <Col lg={24}>
          <div>
            <Select
              className="select-option1"
              defaultValue="Select from options"
              onChange={handleAdditionalP}
            >
              {additionaProperties.map((value, index) => {
                return <Option key={index} value={value}>{value}</Option>
              })}
            </Select>
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
              onClick={() => handleRoute("/home/details/additional_p")}
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
export default PersonalDetails1;
