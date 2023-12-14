// Styles
import "./Profile.css";
import Button from "./Button";
// import { useState } from "react";

// Components
import Tag from "./Tag";

export default function Profile(props) {

  const handleUpdateName = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    props.updateName(name);
  }

  const handleUpdateDescription = (e) => {
    e.preventDefault();
    const description = e.target.description.value;
    props.updateDescription(description);
  }

  const handleAddTag = (e) => {
    e.preventDefault();
    const tag = e.target.tag.value;
    props.addTag(tag);
  }
  
  return (
    <section>
      <div className="profile-picture">
        <img src={props.logo} alt={props.alt} />
      </div>
      <div className="profile-block">
        <h2>{props.name}</h2>
        <form method="PUT" className="text-field-form" onSubmit={(event) => handleUpdateName(event)}>
          <input type="text" name="name" placeholder="Update your name"  />
          <Button type="submit" loadingText={"Updating..."}>
            Update
          </Button>
        </form>
        <h3>Profile</h3>
        <p>{props.description}</p>
        <form method="PUT" className="text-field-form" onSubmit={handleUpdateDescription}>
          <input
            type="text"
            name="description"
            placeholder="Update your profile"
          />
          <Button type="submit" loadingText={"Updating..."}>
            Update
          </Button>
        </form>
        <h3>Tags</h3>
        <ul>
          {props.tags.map((tag) => (
            <li key={tag.id}>
              <Tag onClose={() => props.removeTag(tag.id)}>{tag.label}</Tag>
            </li>
          ))}
        </ul>
        <form method="PUT" className="text-field-form" onSubmit={handleAddTag} >
          <input type="text" name="tag" placeholder="Add Tag" />
          <Button type="submit" loadingText={"Adding..."}>
            Add Tag
          </Button>
        </form>
      </div>
    </section>
  );
}