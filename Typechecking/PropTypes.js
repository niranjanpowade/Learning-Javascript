import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name, age }) => {
  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
    </View>
  );
};

MyComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default MyComponent;
