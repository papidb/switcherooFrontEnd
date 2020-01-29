import React, { Component } from "react";
import "./topSteper.css";
import { Steps, Popover } from "antd";

const { Step } = Steps;



const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index+1} 
      </span>
    }
  >
    {dot}
  </Popover>
);

class TopSteper extends Component {
  
  render() {
    const { defaltSet } = this.props;
    return (
      <div className="topStep_main">
        <div className="step_cont">
          <div>
            <Steps  current={defaltSet} progressDot={customDot}>
              <Step className={defaltSet > 0 ? "complete":"processing"} title="Background"  description="1" />
              <Step  className={defaltSet > 1 ? "complete":"processing"}  title="Property Details" description="2"  />
              <Step  className={defaltSet > 2 ? "complete":"processing"} title="Details About You" description="3"  />
              <Step  className={defaltSet === 3 ? "complete":"processing"} title="Result"  description="4" />
            </Steps>
          </div>
        </div>
      </div>
    );
  }
}

export default TopSteper;
