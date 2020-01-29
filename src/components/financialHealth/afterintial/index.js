import React, { Component } from "react";
import Result from "../result/result"
import Property from "./property/index"
import User1 from "./User/userContainner"
import Background from "../getStarted/getStarted"
import Top from "./topnavigation/topSteper"
import "./index.css"


export class index extends Component {
  state = {
    selectedKey: 0
  }

  changeProfRoute = key => this.setState({ selectedKey: key });

  profRouteRenderer = () => {
    const { selectedKey } = this.state;
    if (selectedKey === 0) return <Background present={true} changeProfRout={this.changeProfRoute} />;
    if (selectedKey === 1) return <Property changeProfRout={this.changeProfRoute} />;
    if (selectedKey === 2) return <User1 changeProfRout={this.changeProfRoute} />;
    if (selectedKey === 3) return <Result />;

  };

  render() {
    return (
      <div>
        <div >
          <div >
            <Top defaltSet={this.state.selectedKey} changeProfRoute={this.changeProfRoute} />
            <div className="itemCont">
              <div className="innerICon">
                {this.profRouteRenderer()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
