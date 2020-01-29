import React from "react";
import { Collapse, Icon, Select, Row, Col, Button } from "antd";
import AdditionalProperty from "./AdditionalProperty";
import "./AdditionalProperty.css";
import property from "../../financialHealth/afterintial/property";

const { Panel } = Collapse;
const { Option } = Select;

// function callback(key) {
//   console.log(key);
// }

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

// const genExtra = () => (
//   <Icon
//     type="setting"
//     onClick={event => {
//       // If you don't want click extra trigger collapse, you can prevent this:
//       event.stopPropagation();
//     }}
//   />
// );
const customPanelStyle = {
  background: '#62635d',
  marginBottom: 24,
  border: "none",
  overflow: 'hidden',
};

class AdditionalPropertyIndex extends React.Component {
  state = {
    expandIconPosition: "right",
    array: [],
    key: -1
  };
  componentDidMount() {
    if (this.props.match.params.number) {
      const properties = this.props.match.params.number;
      var array = [];
      for (var i = 0; i < properties; i++) {
        array.push(i);
        if (i === properties - 1) {
          this.setState({ array });
        }
      }
    }
  }
  onPositionChange = expandIconPosition => {
    this.setState({ expandIconPosition });
  };

  callback = key => {
    this.setState({ key })
  };
  render() {
    console.log(this.state)
    return (
      <div className="add-p-index">
        <Row>
          <Col lg={24}>
            <h1 className="heading1">
              Let's get the details on your additional properties
          </h1>
          </Col>
        </Row>
        {/* {this.state.array.map(() => {
          return (
            <div>
              <AdditionalProperty />
            </div>
          );
        })} */}

        <Collapse
          accordion
          onChange={this.callback}
          expandIconPosition={"right"}
        >
          {this.state.array.map((value, index) => {
            return <Panel
              style={customPanelStyle}
              showArrow={this.state.key !== index}
              header={`Additional Property ${index + 1}`}
              key={index}
            // className="ant-collapse-header"
            >
              <AdditionalProperty />
            </Panel>;
          })}
          {/* <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>{text}</p>
          </Panel> */}
        </Collapse>
        <Row>
          <Col className="btn-col" lg={10} offset={0}>
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
}
export default AdditionalPropertyIndex;
