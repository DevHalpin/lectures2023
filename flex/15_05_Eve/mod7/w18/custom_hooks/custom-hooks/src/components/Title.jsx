import { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Title = () => {
  const [title, setTitle] = useState('Hooks are neat!');

  useDocumentTitle(title);
   

  return (
    <div>
      <h2>Document Title</h2>
      <label>New Title:</label>
      <input value={title} onChange={event => setTitle(event.target.value)} />
    </div>
  )
}

export default Title