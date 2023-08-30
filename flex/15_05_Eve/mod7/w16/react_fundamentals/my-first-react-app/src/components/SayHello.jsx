function SayHello(props) { // Components accept an object: props
  // We use curly braces in JSX to run a JS expression.
  return <p>Hello, {props.name}!</p>;
}

export default SayHello;