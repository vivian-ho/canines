import React from "react";
import { Route, Switch } from "react-router-dom";
import BreedList from "./BreedList";
import RandomDog from "./RandomDog";

class Breeds extends React.Component {
  constructor() {
    super();
    this.state = {
      breeds: []
    };
  }

  getBreeds = () => {
    // this url can go into a config file
    fetch("https://dog.ceo/api/breeds/list").then(response => response.json())
      .then(data => this.setState({ breeds: data.message }))
      .catch(err => {
        console.log('error', err);
      });
  };

  componentDidMount() {
    this.getBreeds();
  }

  renderBreeds = () => {
    const { breeds } = this.state;

    return (
      <div>
        <h2> Dog breeds </h2>
        <BreedList breeds={breeds} />
      </div>
    );
  };

  renderDog = props => {
    const { breed } = props.match.params;
    return <RandomDog breed={breed} />;
  };

  render() {
    return (
      <Switch>
        <Route exact path="/breeds" render={this.renderBreeds} />
        <Route path="/breeds/:breed" render={this.renderDog} />
      </Switch>
    );
  }
}

export default Breeds;
