import React from "react";

interface MyComponentProps {
  name: string;
  age: number;
}

const MyComponent: React.FC<MyComponentProps> = ({ name, age }) => {
  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
    </View>
  );
};

export default MyComponent;
