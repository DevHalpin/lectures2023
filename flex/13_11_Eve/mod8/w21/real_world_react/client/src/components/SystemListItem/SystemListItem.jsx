import "./SystemListItem.css";

export const SystemListItem = (props) => {
  return (
    <li className="system-list-item">
      <div>
        <img src={props.image} alt={props.name} />
      </div>
      <div>
        <p>{props.name}</p>
      </div>
    </li>
  );
};