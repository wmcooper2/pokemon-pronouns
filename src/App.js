import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Characters from "./characters";
import HelpBtn from "./helpbutton";
import { pronouns, PronounBtns } from "./pronouns";
import { verbs, verbChoices } from "./verbs";
import { objectPlurals } from "./objects";
import { ExampleSentence, CorrectSentence } from "./sentences";
import { HelpInstructions } from "./help";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: pronouns[0],
      speaker: "/speaker.png",
      verbIndex: 0,
      objectIndex: 0,
      lowerObjectOptionIndex: 0,
      upperVerb: "like",
      upperObject: "cat",
      lowerSubject: "I",
      lowerVerb: "like",
      lowerObject: "cat",
      help: false,
      English: true,
    };
    this.changePronoun = this.changePronoun.bind(this);
    this.changeVerb = this.changeVerb.bind(this);
    this.changeObject = this.changeObject.bind(this);
    this.changeVerbForm = this.changeVerbForm.bind(this);
    this.changeObjectForm = this.changeObjectForm.bind(this);
    this.pluralize = this.pluralize.bind(this);
    this.presentSimple = this.presentSimple.bind(this);
    this.capitalize = this.capitalize.bind(this);
    this.toggleHelp = this.toggleHelp.bind(this);
    this.toggleLanguage = this.toggleLanguage.bind(this);
  }

  changePronoun = (props) => {
    this.setState(() => {
      return { subject: props };
    });
  };

  changeVerb = () => {
    let currentIndex =
      this.state.verbIndex < verbChoices.length - 1
        ? this.state.verbIndex + 1
        : 0;
    this.setState(() => {
      return { verbIndex: currentIndex };
    });
  };

  changeVerbForm = (props) => {
    let currentChoice = this.state.subject.subject;
    let availableChoices = verbs[verbChoices[this.state.verbIndex]];
    this.setState(() => {
      return { lowerVerb: availableChoices[currentChoice] };
    });
  };

  changeObject = () => {
    const objectCount = Object.keys(objectPlurals).length;
    let currentIndex =
      this.state.objectIndex < objectCount - 1 ? this.state.objectIndex + 1 : 0;
    this.setState((state) => {
      return { objectIndex: currentIndex };
    });
  };

  changeObjectForm = (props) => {
    let objects = Object.keys(objectPlurals);
    let currentChoice = objects[this.state.objectIndex];
    const options = [
      `a ${currentChoice}.`,
      ` ${currentChoice}.`,
      `${this.pluralize(currentChoice)}.`,
    ];
    let optionCounter =
      this.state.lowerObjectOptionIndex < options.length - 1
        ? this.state.lowerObjectOptionIndex + 1
        : 0;
    let sentenceEnd = options[optionCounter];
    this.setState(() => {
      return {
        lowerObject: sentenceEnd,
        lowerObjectOptionIndex: optionCounter,
      };
    });
  };

  capitalize = (props) => {
    const newPronoun = props.charAt(0).toUpperCase() + props.slice(1);
    this.setState(() => {
      return { lowerSubject: newPronoun };
    });
  };

  pluralize = (props) => {
    return props + "s";
  };

  presentSimple = (props) => {
    return props + "s";
  };

  toggleHelp = () => {
    this.setState(() => {
      return { help: !this.state.help };
    });
  };

  toggleLanguage = () => {
    console.log("width", window.innerWidth);
    this.setState(() => {
      return { English: !this.state.English };
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <div className="lesson">
            <Switch>
              <Route path="/help">
                <HelpInstructions
                  {...this.state}
                  toggleLanguage={this.toggleLanguage}
                />
              </Route>

              <Route path="/">
                <div className="example">
                  <img
                    className="subject"
                    src={this.state.subject.image}
                    alt="main"
                  ></img>

                  <ExampleSentence
                    changeVerb={this.changeVerb}
                    changeObject={this.changeObject}
                    verbChoices={verbChoices}
                    objectPlurals={objectPlurals}
                    {...this.state}
                  />
                </div>

                <div className="answer">
                  <Characters {...this.state} />
                  <CorrectSentence
                    capitalize={this.capitalize}
                    changeObjectForm={this.changeObjectForm}
                    changeVerbForm={this.changeVerbForm}
                    {...this.state}
                  />
                </div>
              </Route>
            </Switch>
          </div>

          <div className="choices">
            <PronounBtns changePronoun={this.changePronoun} />
            <HelpBtn handleClick={this.toggleHelp} {...this.state} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
