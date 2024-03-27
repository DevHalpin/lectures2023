import Heart from "./Heart";
import "./Hit.css";
import { useAsyncToggle } from "../hooks/useAsyncToggle";

const Hit = (props) => {
  const [liked, toggleLike, error] = useAsyncToggle(`/hits/likes/${props.id}?error=true`, {optimistic: true});

  
  return (
    <article className="hit">
      <div>
        <div>
          <img src={props.avatar} alt={`Avatar of ${props.name}`} />
        </div>
        <div>
          <div>
            <p>{props.content}</p>
          </div>
          <div className="date">
            <span>Posted {new Date(props.date).toTimeString()}</span>
          </div>
        </div>
      </div>
      <div>
        <Heart size="20" liked={liked} onClick={toggleLike}/>
        {error && <p>{error}</p>}
      </div>
    </article>
  );
};

export default Hit;