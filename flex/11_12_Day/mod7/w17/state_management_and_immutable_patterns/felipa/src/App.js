// Styles
import "./App.css";

// Libraries
import { useReducer } from "react";


// Components
import Profile from "./Profile";
import Navbar from "./Navbar";
import Loading from "./components/Loading";
import { dbCall, generateRandomHexCode } from "./helpers/helpers"

// Reducer
import { userReducer } from "./reducers/userReducer";

const defaultState = {
  loggedIn: false,
  loading: false,
  buttons: [
    {
      id: "1",
      label: "Update Name",
      loading: false,
    },
    {
      id: "2",
      label: "Update Description",
      loading: false,
    },
    {
      id: "3",
      label: "Add Tag",
      loading: false,
    },
  ],
  logo: "frog_profile.jpg",
  tags: [
    {
      id: "e930db",
      label: "green",
    },
    {
      id: "82492e",
      label: "hungry",
    },
    {
      id: "cd82dc",
      label: "happy",
    },
  ],
  name: "Felipa",
  description:
    "Felipa is a friendly tree frog who enjoys spending her days sleeping and her nights chasing mosquitos for a delicious meal.",
};


function App() {
  // const [user, setUser] = useState(defaultState);

  const [user, dispatch] = useReducer(userReducer, defaultState);

  // Method 1: Recreate original state with updates
  // const modifiedNewState = {
  // loggedIn: false,
  // loading: false,
  // logo: "frog_profile.jpg",
  // tags: [
  //   {
  //     id: "e930db",
  //     label: "green",
  //   },
  //   {
  //     id: "82492e",
  //     label: "hungry",
  //   },
  //   {
  //     id: "cd82dc",
  //     label: "happy",
  //   },
  // ],
  // name: "Felipa",
  // description:
  //   "Felipa is a friendly tree frog who enjoys spending her days sleeping and her nights chasing mosquitos for a delicious meal.",
  // }

  // Method 2: Use spread operator to update state
  // const spreadNewState = { ...user, loggedIn: true };

  // Method 3: Use Object.assign() to update state
  // const assignNewState = Object.assign({}, user, { loggedIn: false });
  
  const login = () => {
    // user.loggedIn = true;
    // const spreadNewState = { ...user, loggedIn: true };
    // setUser({ ...user, loggedIn: true });
    dispatch({ type: "SET_LOADING", payload: true })
    dbCall().then(() => {
      dispatch({ type: "SET_LOADING", payload: false })
      dispatch({ type: "LOGIN", payload: user.name });
    })
  }

  const logout = () => {
    // user.loggedIn = false;
    // const spreadNewState = { ...user, loggedIn: false };
    // setUser(spreadNewState);
    dispatch({ type: "LOGOUT" });
  }

  const updateName = (name) => {
    // const newUser = { ...user}
    // newUser.name = name;
    // setUser(newUser);
    
      dispatch({ type: "UPDATE_NAME", payload: name})

  }

  const updateDescription = (description) => {
    // const newUser = { ...user}
    // newUser.description = description;
    // setUser(newUser);
    
      dispatch({ type: "UPDATE_DESCRIPTION", payload: description})

  }

  const addTag = (tag) => {
    const newTags = [...user.tags];
    const newId = generateRandomHexCode();
    newTags.push({ id: newId, label: tag });
    // const newUser = { ...user, tags: newTags };
    // setUser(newUser);
    
      dispatch({ type: "ADD_TAG", payload: newTags})

  }

  const removeTag = (id) => {
    const newTags = [...user.tags];
    const index = newTags.findIndex((tag) => tag.id === id);
    if (index >= 0) {
      newTags.splice(index, 1);
    }
    // const newDescription = {...newTags[index], description: description}
    // newTags[index] = newDescription;
    // const updatedTags = [...newTags]
    // const newUser = { ...user, tags: newTags };
    // setUser(newUser);
    
      dispatch({ type: "SET_BUTTON_LOADING", payload: false})
    
    
  }

  return (
    <div>
      <Navbar loggedIn={user.loggedIn} onLogin={login} onLogout={logout} username={user.name} />
      <main>
        {user.loading ? (
          <Loading />
        ) : (
          <>
            {user.loggedIn ? (
              <Profile
                logo={user.logo}
                alt={`Profile picture for ${user.name}`}
                name={user.name}
                description={user.description}
                tags={user.tags}
                onNameUpdate={updateName}
                onDescriptionUpdate={updateDescription}
                onTagAdd={addTag}
                onTagRemove={removeTag}
                buttons={user.buttons}
              />
            ) : (
              <>
                <h2>Please login to see your profile!</h2>
              </>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;