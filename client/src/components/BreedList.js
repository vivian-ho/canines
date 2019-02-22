import React from "react";
import { Link } from "react-router-dom";

const styles = {
  img: {
    width: "10em"
  },
  ul: {
    listStyleType: "none"
  }
};

const BreedList = ({ breeds }) => {
  return (
    <ul style={styles.ul}>
      {breeds.map(breed => (
        <li key={breed}>
          <Link to={`/breeds/${breed}`}> {breed} </Link>
        </li>
      ))}
    </ul>
  );
};

export default BreedList;
