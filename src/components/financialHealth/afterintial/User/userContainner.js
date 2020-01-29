import React, { Component } from 'react'
import TopUserNavigation2 from "./topnavigation/topNavigation"
import User1 from "./index"
import User2 from "./secodeApplication"

export default class userContainner extends Component {
    state={
        current:"user1"
    }
    onChangeme = current => {
        this.setState({ current });
      };
    UserFormRender = () => {
        const { current } = this.state;
        if (current === "user1")
          return <User1 {...this.props} changeProf={this.onChangeme} />;
        if (current === "user2")
          return <User2 {...this.props} changeProf={this.onChangeme} />;
        
      };
    render() {
        return (
            <div className="asdfasd" style={{width:"100%"}}>
              <TopUserNavigation2 defaltSet={this.state.current} onChange={this.onChangeme} />
                {this.UserFormRender()}
            </div>
        )
    }
}
