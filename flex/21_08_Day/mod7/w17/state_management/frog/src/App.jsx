// Styles
import "./App.css";

// Libraries
import { useReducer, useState } from "react";

// Components
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import { dbCall, generateRandomHexCode } from "./helpers/helpers";

const defaultState = {
  loggedIn: true,
  loading: false,
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

const actions = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  UPDATE_NAME: "UPDATE_NAME",
  UPDATE_DESCRIPTION: "UPDATE_DESCRIPTION",
  ADD_TAG: "ADD_TAG",
  REMOVE_TAG: "REMOVE_TAG",
  LOADING: "LOADING",
}

// const reducers = {
//   [actions.LOGIN]: (state) => ({ ...state, loggedIn: true }),
//   [actions.LOGOUT]: (state) => ({ ...state, loggedIn: false }),
//   [actions.UPDATE_NAME]: (state, action) => ({ ...state, name: action.payload }),
//   [actions.UPDATE_DESCRIPTION]: (state, action) => ({ ...state, description: action.payload }),
//   [actions.ADD_TAG]: (state, action) => {
//     const newTags = [...state.tags];
//     const newId = generateRandomHexCode();
//     newTags.push({ id: newId, label: action.payload });
//     return { ...state, tags: newTags };
//   },
//   [actions.REMOVE_TAG]: (state, action) => {
//     const newTags = [...state.tags];
//     const index = newTags.findIndex((tag) => tag.id === action.payload);
//     if (index >= 0) {
//       newTags.splice(index, 1);
//     }
//     return { ...state, tags: newTags };
//   },

// }

// const userReducer = (state, action) => {
//   const reducer = reducers[action.type];
//   if (reducer) {
//     return reducer(state, action);
//   }
//   return state;
// }

const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, loggedIn: true };
    case "LOGOUT":
      return { ...state, loggedIn: false };
    case "UPDATE_NAME":
      return { ...state, name: action.payload };
    case "UPDATE_DESCRIPTION":
      return { ...state, description: action.payload };
    case "ADD_TAG": {
      const newTags = [...state.tags];
      const newId = generateRandomHexCode();
      newTags.push({ id: newId, label: action.payload });
      return { ...state, tags: newTags };
    }
    case "REMOVE_TAG": {
      const newTags = [...state.tags];
      const index = newTags.findIndex((tag) => tag.id === action.payload);
      if (index >= 0) {
        newTags.splice(index, 1);
      }
      return { ...state, tags: newTags };
    }
    case "LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }

}

// const copyOfObject = Object.assign({}, defaultState, { loggedIn: false });

function App() {
  // const [user, setUser] = useState(defaultState);
  const [user, dispatch] = useReducer(userReducer, defaultState)
  

  const login = () => {
    dispatch({ type: actions.LOADING, payload: true})
    dbCall().then((res) => {
    dispatch({ type: actions.LOADING, payload: false})
    dispatch({ type: actions.LOGIN})
    })
    // const newUser = { ...user}
    // newUser.loggedIn = true;
    // setUser(newUser);
    // setUser({ ...user, loggedIn: true });
  }

  const logout = () => {
    dispatch({ type: actions.LOADING, payload: true})
    dbCall().then((res) => {
    dispatch({ type: actions.LOADING, payload: false})
      dispatch({ type: actions.LOGOUT})
    })
    // const newUser = { ...user}
    // newUser.loggedIn = false;
    // setUser(newUser);
    // setUser({ ...user, loggedIn: false });
  }

  const updateName = (name) => {
    dispatch({type: actions.UPDATE_NAME, payload: name})
    // const newUser = { ...user}
    // newUser.name = name;
    // setUser(newUser);
    // setUser({ ...user, name });
  }

  const updateDescription = (description) => {
    dispatch({type: actions.UPDATE_DESCRIPTION, payload: description})
    // const newUser = { ...user}
    // newUser.description = description;
    // setUser(newUser);
    // setUser({ ...user, description });
  }

  const addTag = (tag) => {
    dispatch({type: actions.ADD_TAG, payload: tag})
    // const newTags = [...user.tags];
    // const newId = generateRandomHexCode();
    // newTags.push({ id: newId, label: tag });
    // setUser({ ...user, tags: newTags });
  }

  const removeTag = (id) => {
    dispatch({type: actions.REMOVE_TAG, payload: id})
    // const newTags = [...user.tags];
    // const index = newTags.findIndex((tag) => tag.id === id);
    // if (index >= 0) {
    //   newTags.splice(index, 1);
    // }
    // setUser({ ...user, tags: newTags });
    // const newTags = user.tags.filter((tag) => tag.id !== id);
    // setUser({ ...user, tags: newTags });
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
                updateName={updateName}
                updateDescription={updateDescription}
                addTag={addTag}
                removeTag={removeTag}
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