import React from "react";
import { pronouns, PronounBtns } from "./pronouns";
import { verbs, verbChoices } from "./verbs";
import { objectPlurals } from "./objects";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: pronouns[0],
      speaker: "speaker.png",
      verbIndex: 0,
      objectIndex: 0,
      currentVerb: "like",
      currentObject: "cat",
      correctVerbForm: "like",
      correctObjectForm: "cat"
    };
    this.changePronoun = this.changePronoun.bind(this);
    this.changeVerb = this.changeVerb.bind(this);
    this.changeObject = this.changeObject.bind(this);
    this.changeVerbForm = this.changeVerbForm.bind(this);
    this.changeObjectForm = this.changeObjectForm.bind(this);
  }

  changePronoun = props => {
    console.log(props);
    this.setState({
      subject: props
    });
  };

  changeVerb = () => {
    console.log("verbIndex:", this.state.verbIndex);
    console.log("verbChoice.length:", verbChoices.length);
    let currentIndex =
      this.state.verbIndex < verbChoices.length - 1
        ? this.state.verbIndex + 1
        : 0;
    this.setState(state => {
      return { verbIndex: currentIndex };
    });
  };

  changeVerbForm = props => {
    // console.log("changeVerbForm: ", props);
    let currentChoice = this.state.subject.subject;
    let availableChoices = verbs[verbChoices[this.state.verbIndex]];
    // console.log("new verb: ", availableChoices[currentChoice]);
    this.setState(() => {
      return { correctVerbForm: availableChoices[currentChoice] };
    });
  };

  changeObject = () => {
    // console.log("objectIndex", this.state.objectIndex);
    // console.log("objectPlurals.length: ", objectPlurals.length);

    const objectCount = Object.keys(objectPlurals).length;
    // console.log("objectPlurals.length: ", objectCount);

    let currentIndex =
      this.state.objectIndex < objectCount - 1 ? this.state.objectIndex + 1 : 0;
    this.setState(state => {
      return { objectIndex: currentIndex };
    });
  };

  changeObjectForm = props => {
    console.log("changeObjectForm: ", props);
    let objects = Object.keys(objectPlurals);
    let currentChoice = objects[this.state.objectIndex];
    console.log("currentChoice: ", currentChoice);

    // if singular or plural...change the object, not based on the verb or subject.

    //set this.state.correctObjectForm
    // this.setState(() => {
    // return { currentObject: currentChoice };
    // });
  };

  render() {
    return (
      <React.Fragment>
        <div className="upper">
          <div className="upperleft">
            <div className="subjectpic">
              <img src={this.state.subject.image} alt="main"></img>
            </div>
            <div className="uppersentence">
              <div className="verb word" onClick={() => this.changeVerb()}>
                {verbChoices[this.state.verbIndex]}
              </div>
              <div className="object word" onClick={() => this.changeObject()}>
                {/* {this.state.object} */}
                {Object.keys(objectPlurals)[this.state.objectIndex]}
              </div>
            </div>
          </div>

          <div className="upperright">
            <div className="buttons">
              <PronounBtns changePronoun={this.changePronoun} />
            </div>
          </div>
        </div>
        <div className="lower">
          <img className="speaker" src={this.state.speaker} alt="speaker"></img>
          <img
            src="speechbubble.png"
            className="speechbubble"
            alt="speech bubble"
          ></img>

          <img
            className="listener"
            src="charizardsface.png"
            alt="listener"
          ></img>
          <div className="lowersentence word">{this.state.subject.subject}</div>
          <div
            className="lowersentence word"
            onClick={() => this.changeVerbForm()}
          >
            {this.state.correctVerbForm}
          </div>
          <div
            className="lowersentence word"
            onClick={() => this.changeObjectForm()}
          >
            {this.state.correctObjectForm}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
