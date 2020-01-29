import React from "react";
import { Row, Col, Button, message } from "antd";
import "./result.css";
import { connect } from "react-redux";

import Api from "../../../redux/api/financialHealthCheck";
import { baseurl } from "../../../redux/api/index";

class YourResult extends React.Component {
  state = {
    fillHavenSpreadSheet: false,
    fillIcsSpreadSheet: false,
    fillPtsbSpreadSheet: false
  };
  componentDidMount() {
    this.props.SheetFill(this.props.userId);
  }

  success = data => {
    message.success(data);
  };

  error = data => {
    message.error(data);
  };

  checkfillsheet = (route, message) => {
    const token = localStorage.getItem("tokenas");

    const options = {
      method: "GET",
      headers: new Headers({
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      })
    };
    this.setState({ [route]: true });
    fetch(baseurl + `/financialHealth/${route}/${this.props.userId}`, options)
      .then(res => {
        // dispatch(actions.LoadingFinancialData(true));
        this.setState({ [route]: false });
        if (res.status === 201)
        res.json().then(res => {
            this.success(message);
      })
    })
      .catch(err => {
        console.log(err);
        this.setState({ [route]: false });
        this.error("some thing going wrong testing");
      });
  };

  render() {
    return (
      <div className="result-con">
        <div className="logo">
          <img src="images/home/logo.png" alt="logo" />
        </div>
        <Button
          className="btncheck"
          onClick={() =>
            this.checkfillsheet("fillHavenSpreadSheet", "fillHavenSheet made success")
          }
          loading={this.state.fillHavenSpreadSheet}
        >
           fillHavenSpreadSheet Testing
        </Button>

        <Button
          className="btncheck"
          onClick={() =>
            this.checkfillsheet(
              "fillIcsSpreadSheet",
              "fillIcsSpreadSheet made success"
            )
          }
          loading={this.state.fillIcsSpreadSheet}
        >
          fillIcsSpreadSheet  Testing
        </Button>

        <Button
          className="btncheck"
          onClick={() =>
            this.checkfillsheet(
              "fillPtsbSpreadSheet",
              "fillPtsbSpreadSheet made success"
            )
          }
          loading={this.state.fillPtsbSpreadSheet}
        >
          fillPtsbSpreadSheet Testing
        </Button>

        <div className="d1">
          <h1>Switcheroo.ie Affordability Health Check</h1>

          <p className="p1">
            So {"{name}"}, the good news is that our analysis shows that this
            will be an affordable mortgage for you and you have passed your
            affordability health check with flying colours.
          </p>
          <Row>
            <Col lg={12}>
              <div className="amount-div">
                <h1>€200,000</h1>
                <p>(Loan Amount)</p>
              </div>
            </Col>
            <Col lg={12}>
              <div className="meter-div">
                <img src="images/home/meter.jpg" alt="meter" />
              </div>
            </Col>
          </Row>
          <p className="p2">
            We have based our analysis on the information you have provided us
            and using a number of the major mortgage provider affordability
            models.
          </p>
          <p className="p2">
            These models assess the source and nature of your income, your
            committed outgoings and what is considered to be reasonable
            lifestyle costs.
          </p>
          <p className="p2">
            The next steps towards completing your mortgage is you to fill in
            the <em>Details on what you are looking for section.</em> Or, if you
            would like to have a call with us to talk through our analysis
            please just schedule a time in our diary.
            <br />
            (Underlined above will have hyperlinks to relevant sections of site)
          </p>
          <p className="p2">
            This doesn’t represent a formal mortgage offer no guarantee of a
            mortgage as you haven't been credit checked yet and we will need to
            provide the bank documentation that verifies your financial profile.
            However, you should take comfort in knowing that you are in a very
            strong position to get your mortgage.
          </p>
        </div>
        <div className="warning-div">
          <h5 className="w5">Warnings</h5>
          <div className="warnings">
            <p>
              Warning: If you do not meet the repayments on your credit
              agreement, your account will go into arrears. This may effect your
              credit rating, which may limit your ability to access credit in
            </p>
            <p>
              Warning: If you do not keep your repayment you may lose your home.
            </p>
            <p>
              Warning: You my have to pay charges if you pay off a fixed-rate
              loan early.
            </p>
            <p>
              Warning: This new load may take longer to pay off than your
              previous loans. This mean you may pay more than if you paid over a
              shorter term.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({
  userReducer: {
    user: { _id }
  }
}) => ({
  userId: _id
});

const mapDispatchToProps = dispacth => ({
  SheetFill: props => dispacth(Api.fillDataSheet(props))
});
export default connect(mapStateToProps, mapDispatchToProps)(YourResult);
