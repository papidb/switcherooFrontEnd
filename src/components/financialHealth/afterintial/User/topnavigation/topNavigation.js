import { Menu, Icon } from "antd";
import React from "react";
import "./navigation2.css";
import { connect } from "react-redux";

const { SubMenu } = Menu;

class TopNavigation extends React.Component {
  render() {
    return (
      <div className="topnaivetion_fi">
        <Menu
          // onSelect={({ key }) => this.props.changeProfRoute(key)}
          selectedKeys={[this.props.defaltSet]}
          defaultSelectedKeys={[this.props.defaltSet]}
          mode="horizontal"
        >
          
          <Menu.Item key="user1"  className={this.props.peopleOnMortgage === "two"?"fi_nav":"fi_nav fi_navcenter"}>
            <div className="icon_container">
              <img
                src="images/home/icons/Group 856.png"
                className="fi_icon pngicon"
              />

              <p> {this.props.userFirstName} </p>
            </div>
          </Menu.Item>
          {this.props.peopleOnMortgage === "two" && (
            <Menu.Item key="user2" className="fi_nav">
              <div className="icon_container">
                <img
                  src="images/home/icons/Group 856.png"
                  className="fi_icon pngicon"
                />

                <p> {this.props.firstNameSecondApplicant ? this.props.firstNameSecondApplicant :"Applicant 2"} </p>
              </div>
            </Menu.Item>
           )}
         
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = ({
  userReducer: {
    user: { firstName }
  },
  Financial_data: {
    financial_Health_Check: { peopleOnMortgage, firstNameSecondApplicant }
  }
}) => ({
  peopleOnMortgage,
  firstNameSecondApplicant,
  userFirstName: firstName
});

export default connect(mapStateToProps)(TopNavigation);
