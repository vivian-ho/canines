import React from "react";

const styles = {
  container: {
    height: "10em"
  },
  img: {
    height: "90%"
  }
};

const Dog = ({ imageURL }) => (
  <div style={styles.container}>
    {imageURL ? <img style={styles.img} alt="" src={imageURL} /> : "loading..."}
  </div>
);

class RandomDog extends React.Component {
  constructor() {
    super();
    this.state = {
      imageURL: ""
    };
  }

  getPicture = () => {
    const { breed } = this.props;

    // this url can go into a config file
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`).then(response => response.json())
      .then(data => this.setState({ imageURL: data.message }))
      .catch(err => {
        console.log('error', err);
      });
  };

  componentDidMount() {
    this.getPicture();
  }

  render() {
    const { imageURL } = this.state;
    const { breed } = this.props;
    return (
      <div>
        <h2>{breed}</h2>
        <Dog imageURL={imageURL} onClick={this.getPicture} />
        <button onClick={this.getPicture}> Click for another one </button>
      </div>
    );
  }
}

export default RandomDog;
