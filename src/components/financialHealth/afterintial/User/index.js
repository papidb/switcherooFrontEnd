import React, { Component } from "react";
import TopUserNavigation from "./topnavigation/index";
import TopUserNavigation2 from "./topnavigation/topNavigation";

import "./user.css";

import UserForm1 from "./userFrom1/userForm";
import UserForm2 from "./userFrom2/userForm";
import Api from "../../../../redux/api/financialHealthCheck";

import UserForm3 from "./userFrom3/userForm";

import { connect } from "react-redux";
import { message } from "antd";

class App extends React.Component {
  state = {
    defaltSet: "user1",
    userId: "",
    current: 0,
    dateOfBirth: Date.now(),
    maritalStatus: "Single",
    maritalStatusOptions: ["Married", "Single", "Widowed"],
    selfEmployedOrPaye: "Self Employed",
    childrenFinanciallyDependent: 2,
    childrenFinanciallyDependentOptions: [0,1, 2, 3,4,5,"5+"],
    publicOrPrivateSector: "",
    selfEmployedOrPayeOptions: ["Self Employed", "Paye"],
    basicIncome: 0,
    basicIncomeDisable: false,

    overTimeEarnedInyear: 0,
    overTimeEarnedInyearDisable: false,

    commissionEarnedInYear: 0,
    commissionEarnedInYearDisable: false,

    bonusEarnedInYear: 0,
    bonusEarnedInYearDisable: false,

    guaranteedAllowance: 0,
    guaranteedAllowanceDisable: false,

    otherVariableIncome: 0,
    otherVariableIncomeDisable: false,

    annualPension: 0,
    annualPensionDisable: false,

    nusrseryOrChildminding: 0,
    nusrseryOrChildmindingDisable: false,

    spousalMaintenanceCosts: 0,
    spousalMaintenanceCostsDisable: false,

    monthlyCreditCardCharges: 0,
    monthlyCreditCardChargesDisable: false,

    overDraftLimit: 0,
    overDraftLimitDisable: false,

    creditCardLimit: 0,
    creditCardLimitDisable: false,

    overDraftCharges: 0,
    overDraftChargesDisable: false,

    monthlyLoanRepayments: 0,
    monthlyLoanRepaymentsDisable: false,

    monthlyCashFlow: 0,
    monthlyCashFlowDisable: false
  };
  clickRadio = e => {
    // var radioContainer =
    var label = e.target.childNodes[1];
    if (label) {
      label.click();
    }
  };
  handleMerital = value => {
    this.setState({ maritalStatus: value });
  };
  handleWork = value => {
    this.setState({ selfEmployedOrPaye: value });
  };
  handleChild = value => {
    this.setState({ childrenFinanciallyDependent: value });
  };
  handleQ = e => {
    var radioContainers = e.target.parentNode.parentNode.childNodes;
    this.setState({ [e.target.name]: e.target.value });
    for (var i = 0; i < radioContainers.length; i++) {
      var input = radioContainers[i].childNodes[0];
      if (input.checked) {
        input.parentNode.style.background = "#fb9500";
      } else {
        input.parentNode.style.background = "lightgray";
      }
    }
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.financial_back_data.applicantOne &&
      prevState.publicOrPrivateSector !==
        nextProps.financial_back_data.applicantOne.publicOrPrivateSector &&
      prevState.userId !== nextProps.userId
    ) {
      const {
        maritalStatus,
        selfEmployedOrPaye,
        childrenFinanciallyDependent,
        publicOrPrivateSector,
        basicIncome,
        overTimeEarnedInyear,
        commissionEarnedInYear,
        bonusEarnedInYear,
        guaranteedAllowance,
        otherVariableIncome,
        annualPension,
        dateOfBirth,
        nusrseryOrChildminding,
        spousalMaintenanceCosts,
        monthlyCreditCardCharges,
        overDraftLimit,
        creditCardLimit,
        overDraftCharges,
        monthlyLoanRepayments,
        monthlyCashFlow
      } = nextProps.financial_back_data.applicantOne;
      const { userId } = nextProps;

      return {
        ...prevState,
        userId,
        maritalStatus,
        selfEmployedOrPaye,
        childrenFinanciallyDependent,
        publicOrPrivateSector,
        basicIncome,
        overTimeEarnedInyear,
        commissionEarnedInYear,
        bonusEarnedInYear,
        guaranteedAllowance,
        otherVariableIncome,
        annualPension,
        dateOfBirth,

        nusrseryOrChildminding,
        spousalMaintenanceCosts,
        monthlyCreditCardCharges,
        overDraftLimit,
        creditCardLimit,
        overDraftCharges,
        monthlyLoanRepayments,
        monthlyCashFlow
      };
    }

    return prevState;
  }
  onsubmitForm = () => {
    const {
      maritalStatus,
      selfEmployedOrPaye,
      childrenFinanciallyDependent,
      publicOrPrivateSector,
      basicIncome,
      dateOfBirth,
      overTimeEarnedInyear,
      commissionEarnedInYear,
      bonusEarnedInYear,
      guaranteedAllowance,
      otherVariableIncome,
      annualPension,
      nusrseryOrChildminding,
      spousalMaintenanceCosts,
      monthlyCreditCardCharges,
      overDraftLimit,
      creditCardLimit,
      overDraftCharges,
      monthlyLoanRepayments,
      monthlyCashFlow
    } = this.state;
    const newItem = {
      maritalStatus,
      selfEmployedOrPaye,
      childrenFinanciallyDependent,
      publicOrPrivateSector,
      basicIncome,
      dateOfBirth,
      overTimeEarnedInyear,
      commissionEarnedInYear,
      bonusEarnedInYear,
      guaranteedAllowance,
      otherVariableIncome,
      annualPension,
      nusrseryOrChildminding,
      spousalMaintenanceCosts,
      monthlyCreditCardCharges,
      overDraftLimit,
      creditCardLimit,
      overDraftCharges,
      monthlyLoanRepayments,
      monthlyCashFlow
    };
    if (this.state.current === 0) {
      this.setState({ current: 1 });
    } else if (this.state.current === 1) {
      this.setState({ current: 2 });
    } else if (this.state.current === 2) {
      this.props.SetApplicantOneData(
        {
          userId: this.props.userId,
          applicants: {
            ...this.props.financial_back_data,
            applicantOne: {
              ...newItem
            }
          }
        },
        () => {
          if (this.props.financial_back_data.peopleOnMortgage === "two") {
            this.props.changeProf("user2");
          } else {
            debugger;
            this.props.changeProfRout(3);
          }
        }
      );
    }
  };
  onChangeme = current => {
    this.setState({ current });
  };
  onChangeSecond = e => {
    this.setState({
      [e.target.name]: 0,
      [`${e.target.name}Disable`]: e.target.checked
    });
  };
  onChangeback = () => {
    debugger
    if (this.state.current === 2) {
      this.setState({ current: 1 });
    } else if (this.state.current === 1) {
      this.setState({ current: 0 });
    }
    else if (this.state.current === 0) {
      this.props.changeProfRout(1);
     
    }
  };
  onChangeTextSecond = e => {
    var reg = /^-?\d*\.?\d*$/;

    if (reg.test(e.target.value)) {
      this.setState({
        [e.target.name]: Number(e.target.value)
      });
    }
  };

  onChangeDate = (date, dateString) => {
    this.setState({
      dateOfBirth: date
    });
  };

  UserFormRender = () => {
    const { current } = this.state;
    if (current === 0)
      return <UserForm1 allState={this.state} thisObject={this} />;
    if (current === 1)
      return <UserForm2 allState={this.state} thisObject={this} />;
    if (current === 2)
      return <UserForm3 allState={this.state} thisObject={this} />;
  };
  render() {
    const { current, defaltSet } = this.state;
    return (
      <div className="user_form">
        <TopUserNavigation current={current} onChange={this.onChangeme} />
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <div className="innerIConinner" style={{ padding: "20px", width:"90%" }}>
            {this.UserFormRender()}
          </div>
        </div>
      </div>
    );
  }
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
  SetApplicantOneData: (props, callback) =>
    dispacth(Api.financialDataPost(props, callback))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
