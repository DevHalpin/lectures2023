import { useAsyncToggle } from "../hooks/useAsyncToggle";
import Favourite from "./Favourite";
import "./Post.css";

const Post = (props) => {

  const [favourited, toggleFavourite] = useAsyncToggle(`/posts/favourites/${props.id}`, {optimistic: false});
  
  return (
    <article className="post">
      <div>
        <div>
          <img
            class="avatar"
            src={props.avatar}
            alt={`Avatar of ${props.name}`}
          />
        </div>
        <div>
          <h3>{props.title}</h3>
          <span class="date">Posted {new Date(props.date).toTimeString()}</span>
        </div>
      </div>
      <div>
        <p>{props.content}</p>
      </div>
      <div>
        <Favourite faved={favourited} onClick={toggleFavourite}/>
      </div>
    </article>
  );
};

export default Post;