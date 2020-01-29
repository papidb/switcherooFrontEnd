import React, { useState } from "react";
import { Row, Col, Select, Button } from "antd";
import "./FinalPage.css";

const { Option } = Select;
function FinalPage(props) {
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
    <div className="mortgage-d-final-page">
      <Row className="d-row-s1">
        <Col lg={24}>
          <h1 className="heading11">
            So we need to capture the contact details for the professional
            advisors involved in the transaction
          </h1>
          <h3 className="info1">
            Don't worry if you don't their details at the moment we can skip
            this section and come back to them when you have them.
          </h3>
        </Col>
        <Col lg={24}>
          <h2 className="heading-background">Your Solicitor</h2>
        </Col>
        <Col lg={24}>
          <h6 className="h61">Firm Name</h6>
        </Col>
        <Col lg={24}>
          <div className="input3">
            <input type="text" placeholder="Name" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Contact Name</h6>
        </Col>
        <Col lg={24}>
          <div className="input2 floated-input2">
            <input type="text" placeholder="First Name" />
          </div>
          <div className="input2 floated-input2">
            <input type="text" placeholder="Surname" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Address</h6>
        </Col>
        <Col lg={24}>
          <div className="input">
            <input type="text" name="Address 1" placeholder="Address Line 1" />
          </div>
          <div className="input">
            <input type="text" name="Address 2" placeholder="Address Line 2" />
          </div>
          <div className="input">
            <input type="text" name="city" placeholder="City" />
          </div>
          <div className="input">
            <input type="text" name="Country" placeholder="Country" />
          </div>
          <div className="input">
            <input type="text" name="Eircode" placeholder="Eircode" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Phone Number</h6>
        </Col>
        <Col lg={24}>
          <div className="input3">
            <input type="text" placeholder="Phone Number" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Mobile Number</h6>
        </Col>
        <Col lg={24}>
          <div className="input3">
            <input type="text" placeholder="Mobile Number" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Email address</h6>
        </Col>
        <Col lg={24}>
          <div className="input3">
            <input type="email" placeholder="Email address" />
          </div>
          <br />
          <br />
        </Col>

        <Col lg={24}>
          <h2 className="heading-background">Estate Agent</h2>
        </Col>
        <Col lg={24}>
          <h6 className="h61">Firm Name</h6>
        </Col>
        <Col lg={24}>
          <div className="input3">
            <input type="text" placeholder="Name" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Contact Name</h6>
        </Col>
        <Col lg={24}>
          <div className="input2 floated-input2">
            <input type="text" placeholder="First Name" />
          </div>
          <div className="input2 floated-input2">
            <input type="text" placeholder="Surname" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Address</h6>
        </Col>
        <Col lg={24}>
          <div className="input">
            <input type="text" name="Address 1" placeholder="Address Line 1" />
          </div>
          <div className="input">
            <input type="text" name="Address 2" placeholder="Address Line 2" />
          </div>
          <div className="input">
            <input type="text" name="city" placeholder="City" />
          </div>
          <div className="input">
            <input type="text" name="Country" placeholder="Country" />
          </div>
          <div className="input">
            <input type="text" name="Eircode" placeholder="Eircode" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Phone Number</h6>
        </Col>
        <Col lg={24}>
          <div className="input3">
            <input type="text" placeholder="Phone Number" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Mobile Number</h6>
        </Col>
        <Col lg={24}>
          <div className="input3">
            <input type="text" placeholder="Mobile Number" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Email address</h6>
        </Col>
        <Col lg={24}>
          <div className="input3">
            <input type="email" placeholder="Email address" />
          </div>
        </Col>

        <Col lg={24}>
          <h2 className="heading-background">Valuer</h2>
        </Col>
        <Col lg={24}>
          <h6 className="h61">Firm Name</h6>
        </Col>
        <Col lg={24}>
          <div className="input3">
            <input type="text" placeholder="Name" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Contact Name</h6>
        </Col>
        <Col lg={24}>
          <div className="input2 floated-input2">
            <input type="text" placeholder="First Name" />
          </div>
          <div className="input2 floated-input2">
            <input type="text" placeholder="Surname" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Address</h6>
        </Col>
        <Col lg={24}>
          <div className="input">
            <input type="text" name="Address 1" placeholder="Address Line 1" />
          </div>
          <div className="input">
            <input type="text" name="Address 2" placeholder="Address Line 2" />
          </div>
          <div className="input">
            <input type="text" name="city" placeholder="City" />
          </div>
          <div className="input">
            <input type="text" name="Country" placeholder="Country" />
          </div>
          <div className="input">
            <input type="text" name="Eircode" placeholder="Eircode" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Phone Number</h6>
        </Col>
        <Col lg={24}>
          <div className="input3">
            <input type="text" placeholder="Phone Number" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Mobile Number</h6>
        </Col>
        <Col lg={24}>
          <div className="input3">
            <input type="text" placeholder="Mobile Number" />
          </div>
        </Col>

        <Col lg={24}>
          <h6 className="h61">Email address</h6>
        </Col>
        <Col lg={24}>
          <div className="input3">
            <input type="email" placeholder="Email address" />
          </div>
          <br />
          <br />
        </Col>

        <Col className="btn-col" lg={10} offset={0}>
          <br></br>
          <div className="btn-div">
            <Button
              style={{ height: "40px" }}
              onClick={() => window.history.back()}
              className="btn1"
            >
              Back
            </Button>
            <Button
              // onClick={() => handleRoute("/home/details/switcher3")}
              className="btn2"
            >
              Countinue
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default FinalPage;
