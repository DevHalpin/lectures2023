// Styles
import "./Profile.css";
import Button from "./components/Button";

// Components
import Tag from "./components/Tag";
import { dbCall } from "./helpers/helpers";
//Reducer
import { buttonReducer } from "./reducers/buttonReducer";
import { useReducer } from "react";

export default function Profile(props) {
  const [buttons, dispatch] = useReducer(buttonReducer, props.buttons);

  const handleUpdateName = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    console.log(name);
    const nameButton = buttons.find((button) => button.label === "Update Name");
    nameButton.loading = true;
    dispatch({ type: "SET_NAME_LOADING", payload: nameButton });
    dbCall().then(() => {
      nameButton.loading = false;
      dispatch({ type: "SET_NAME_LOADING", payload: nameButton });
      props.onNameUpdate(name);
    });
  };
  const handleUpdateDescription = (e) => {
    e.preventDefault();
    const description = e.target.description.value;
    console.log(description);
    const descriptionButton = buttons.find(
      (button) => button.label === "Update Description"
    );
    descriptionButton.loading = true;
    dispatch({ type: "SET_DESCRIPTION_LOADING", payload: descriptionButton });
    dbCall().then(() => {
      descriptionButton.loading = false;
      dispatch({ type: "SET_DESCRIPTION_LOADING", payload: descriptionButton });
      props.onDescriptionUpdate(description);
    });
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    const tag = e.target.tag.value;
    console.log(tag);
    const tagButton = buttons.find(
      (button) => button.label === "Add Tag"
    );
    tagButton.loading = true;
    dispatch({ type: "SET_TAG_LOADING", payload: tagButton });
    dbCall().then(() => {
      tagButton.loading = false;
      dispatch({ type: "SET_TAG_LOADING", payload: tagButton });
    props.onTagAdd(tag);
    });
  };

  const handleRemoveTag = (id) => {
    console.log(id);
    props.onTagRemove(id);
  };

  return (
    <section>
      <div className="profile-picture">
        <img src={props.logo} alt={props.alt} />
      </div>
      <div className="profile-block">
        <h2>{props.name}</h2>
        <form
          method="PUT"
          className="text-field-form"
          onSubmit={handleUpdateName}
        >
          <input type="text" name="name" placeholder="Update your name" />
          <Button
            type="submit"
            loading={buttons[0].loading}
            loadingText={"Updating..."}
          >
            Update
          </Button>
        </form>
        <h3>Profile</h3>
        <p>{props.description}</p>
        <form
          method="PUT"
          className="text-field-form"
          onSubmit={handleUpdateDescription}
        >
          <input
            type="text"
            name="description"
            placeholder="Update your profile"
          />
          <Button
            type="submit"
            loading={buttons[1].loading}
            loadingText={"Updating..."}
          >
            Update
          </Button>
        </form>
        <h3>Tags</h3>
        <ul>
          {props.tags.map((tag) => (
            <li key={tag.id}>
              <Tag onClose={() => handleRemoveTag(tag.id)}>{tag.label}</Tag>
            </li>
          ))}
        </ul>
        <form method="PUT" className="text-field-form" onSubmit={handleAddTag}>
          <input type="text" name="tag" placeholder="Add Tag" />
          <Button
            type="submit"
            loading={buttons[2].loading}
            loadingText={"Adding..."}
          >
            Add Tag
          </Button>
        </form>
      </div>
    </section>
  );
}
