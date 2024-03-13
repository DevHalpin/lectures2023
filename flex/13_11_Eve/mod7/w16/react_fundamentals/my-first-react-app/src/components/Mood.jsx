function Mood(props) {
    return ( // Remember, multi-line JSX needs to be in parenthesis.
      <section>
        <h2>My name is {props.name}</h2>
        {/* We cannot easily use `if` (aside from ternary) in JSX...
        This results in a pattern of `and` to determine if we...
         see one output from an expression or another.
         `false` will not result in any HTML showing in the browser. */}
        {props.mood && props.mood.toLowerCase() === 'happy' &&
          <p>I am feeling very happy about everything!</p>}
        {props.mood && props.mood.toLowerCase() === 'sad' &&
          <p>Today isn't a great day...</p>}
        {props.mood && props.mood.toLowerCase() === 'mad' &&
          <p>I just wanna' scream!</p>}
        {!['happy', 'sad', 'mad'].includes(props.mood && props.mood.toLowerCase()) &&
          <p>I don't know how I'm feeling...</p>}
      </section>
    );
  }
  
  export default Mood;