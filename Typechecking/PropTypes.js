// PropTypes are a built-in mechanism in React that allow you to specify the expected types for each prop a component receives.
// PropTypes are defined as properties of the component and are validated at runtime. Here's an example of how to use PropTypes in a
// React Native component:

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
