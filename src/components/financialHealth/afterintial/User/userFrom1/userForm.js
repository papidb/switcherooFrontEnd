import React, { Component } from "react";
import "./userForm.css";
import SelectBoxa from "../utils/Selectbox";
import { Row, Col, Select, Button, DatePicker } from "antd";
import moment from "moment";
const { Option } = Select;
class UserForm extends Component {
  state = {
    q4: false,
    questions: {
      maritalStatus: ""
    }
  };
  // const [q4, setQ4] = useState(false);
  clickRadio = e => {
    var label = e.target.childNodes[1];
    if (label) {
      label.click();
    }
  };
  handleQ = e => {
    var radioContainers = e.target.parentNode.parentNode.childNodes;
    var questions = this.state.questions;
    questions[e.target.name] = e.target.value;
    // setQ4(!q4);
    this.setState({ questions });
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

  render() {
    const {
      maritalStatus,
      maritalStatusOptions,
      selfEmployedOrPaye,
      childrenFinanciallyDependent,
      childrenFinanciallyDependentOptions,
      publicOrPrivateSector,
      selfEmployedOrPayeOptions,

      dateOfBirth
    } = this.props.allState;
    return (
      <div className="fo_1_con user_form1">
        <Row className="fh-row-gs">
          <Col lg={24} className="col2">
            <p className="heading3">What is your marital status?</p>
          </Col>
          <Col lg={24} className="q1 q3">
            <div
              onClick={e => this.clickRadio(e)}
              className="radio-container"
              // className={
              //   questions.contructionNature ===
              //   "Looking For Investment Property"
              //     ? "radio-container container_malta"
              //     : "radio-container"
              // }
            >
              <input
                onChange={e => this.handleQ(e)}
                type="radio"
                name="maritalStatus"
                id="marital1"
                className=""
                // checked={
                //   questions.contructionNature ===
                //   "Looking For Investment Property"
                // }
                value="Single"
              />
              <label for="marital1">Single</label>
            </div>
            <div
              onClick={this.clickRadio}
              className="radio-container"
              // className={
              //   questions.contructionNature === "Second Hand Home"
              //     ? "radio-container container_malta"
              //     : "radio-container"
              // }
            >
              <input
                onChange={e => this.handleQ(e)}
                type="radio"
                name="maritalStatus"
                id="marital2"
                // checked={questions.contructionNature === "Second Hand Home"}
                className=""
                value="Married"
              />
              <label for="marital2">Married</label>
            </div>
            <div
              onClick={this.clickRadio}
              className="radio-container"
              // className={
              //   questions.contructionNature === "Self Build"
              //     ? "radio-container container_malta"
              //     : "radio-container"
              // }
            >
              <input
                onChange={e => this.handleQ(e)}
                type="radio"
                name="maritalStatus"
                id="marital3"
                // checked={questions.contructionNature === "Self Build"}
                className=""
                value="Widowed"
              />
              <label for="marital3">Widowed</label>
            </div>
          </Col>
          {/* <Col lg={24} className="q1">
            <SelectBoxa
              valueItem={maritalStatus}
              optionsItem={maritalStatusOptions}
              handlebedFunc={this.props.thisObject.handleMerital}
            />
          </Col> */}
          <Col lg={24} className="col2">
            <p className="heading3">What is your date of birth?</p>
          </Col>
          <Col lg={24} className="q1">
            <div className="datepic">
              <DatePicker
                className={
                  dateOfBirth!==Date.now()? "radio-container container_malta"
                    : "radio-container"
                }
                onChange={this.props.thisObject.onChangeDate}
                defaultValue={moment(dateOfBirth)}
              />
            </div>
          </Col>
          <Col lg={24} className="col2">
            <p className="heading3">
              How many children are financially depand on you?
            </p>
          </Col>
          <Col lg={24} className="q1">
            <SelectBoxa
              valueItem={childrenFinanciallyDependent}
              optionsItem={childrenFinanciallyDependentOptions}
              handlebedFunc={this.props.thisObject.handleChild}
            />
          </Col>
          <Col lg={24} className="col2">
            <p className="heading3">
              Do you work in the Public or Private sector?
            </p>
          </Col>
          <Col lg={24} className="q1 posstionChange">
            <div
              onClick={e => this.props.thisObject.clickRadio(e)}
              className={
                publicOrPrivateSector === "Private Sector"
                  ? "radio-container container_malta"
                  : "radio-container"
              }
            >
              <input
                onChange={e => this.props.thisObject.handleQ(e)}
                type="radio"
                name="publicOrPrivateSector"
                id="private"
                checked={publicOrPrivateSector === "Private Sector"}
                className=""
                value="Private Sector"
              />
              <label for="private">Private</label>
            </div>
            <div
              onClick={this.props.thisObject.clickRadio}
              className={
                publicOrPrivateSector === "Public Sector"
                  ? "radio-container container_malta"
                  : "radio-container"
              }
            >
              <input
                onChange={e => this.props.thisObject.handleQ(e)}
                type="radio"
                name="publicOrPrivateSector"
                id="public"
                checked={publicOrPrivateSector === "Public Sector"}
                className=""
                value="Public Sector"
              />
              <label for="public">Public</label>
            </div>
          </Col>
          <div style={{clear:"both"}}></div>
          <Col lg={24} className="col2">
            <p className="heading3">Are you a PAYE employee or Self Employed?</p>
          </Col>
          {/* <Col lg={24} className="q1">
            <SelectBoxa
              valueItem={selfEmployedOrPaye}
              optionsItem={selfEmployedOrPayeOptions}
              handlebedFunc={this.props.thisObject.handleWork}
            />
          </Col> */}
          <Col lg={24} className="q1">
            <div
              onClick={e => this.clickRadio(e)}
              className="radio-container"

              // className={
              //   publicOrPrivateSector === "Private Sector"
              //     ? "radio-container container_malta"
              //     : "radio-container"
              // }
            >
              <input
                onChange={e => this.handleQ(e)}
                type="radio"
                name="incomType"
                id="incomType1"
                // checked={publicOrPrivateSector === "Self Employed"}
                className=""
                value="Self Employed"
              />
              <label for="incomType1">Self Employed</label>
            </div>
            <div
              onClick={this.clickRadio}
              className="radio-container"
              // className={
              //   publicOrPrivateSector === "Public Sector"
              //     ? "radio-container container_malta"
              //     : "radio-container"
              // }
            >
              <input
                onChange={e => this.handleQ(e)}
                type="radio"
                name="incomType"
                id="incomType2"
                // checked={publicOrPrivateSector === "PAYE"}
                className=""
                value="PAYE"
              />
              <label for="incomType2">PAYE</label>
            </div>
          </Col>
          <Col lg={10}>
            <div className="btn-div">
              <button
                onClick={() => this.props.thisObject.props.changeProfRout(1)}
                className="btn1"
              >
                Back
              </button>
              <Button
                onClick={this.props.thisObject.onsubmitForm}
                disabled={
                  maritalStatus &&
                  selfEmployedOrPaye &&
                  childrenFinanciallyDependent &&
                  publicOrPrivateSector
                    ? false
                    : true
                }
                className="btn2"
              >
                Save & Countinue
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UserForm;
