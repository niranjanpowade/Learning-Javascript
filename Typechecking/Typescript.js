// TypeScript is a superset of JavaScript that provides static type checking at compile-time. Many React Native developers prefer using TypeScript
//  to add strong typing to their code. By defining types and interfaces for your components, you can catch type-related errors before even running
//   your application.

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

// In this example, the MyComponentProps interface defines the expected types for the name and age props.
//  TypeScript will check that you're passing the correct types at compile time.
