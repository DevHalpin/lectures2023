import Name from "./Name";

function SayHello(props) {
  // Components accept an object: props
  // console.log(props); // { name: "David" }
  // We use curly braces in JSX to run a JS expression.
  return (
    <>
      <p>
        Hello, {props.name}! Your name is {props.age}
      </p>
      <Name name={props.name} />
    </>
  );
}

export default SayHello;
