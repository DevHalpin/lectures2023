// Styles
import "./App.css";

// Libraries
import { useReducer } from "react";

// Components
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import { generateRandomHexCode } from "./helpers/helpers";

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

function App() {
  // const [user, setUser] = useState(defaultState);

  // //look up table
  // const reducers = {
  //   "LOGIN": (state, action) => {
  //     const user = { ...state };
  //       user.loggedIn = true;
  //       return user;
  //   },
  //   "LOGOUT": (state, action) => {
  //     const user = { ...state };
  //     user.loggedIn = false;
  //     return user;
  //   }
  // }

  // const userReducer = (state, action) => {
  //   {type: "LOGIN", payload: undefined}
  //   if (reducers[action.type]) {
  //     const reducerFunction = reducers[action.type]
  //     return reducerFunction(state,action)
  //   }
  //   return state
  // }

  const userReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN": {
        const user = { ...state };
        user.loggedIn = true;
        return user;
      }
      case "LOGOUT": {
        const user = { ...state };
        user.loggedIn = false;
        return user;
      }
      case "UPDATE_NAME": {
        const user = { ...state };
        user.name = action.payload;
        return user;
      }
      case "UPDATE_DESCRIPTION": {
        const user = { ...state };
        user.description = action.payload;
        return user;
      }
      case "ADD_TAG": {
        const newTags = [...state.tags];
        const newId = generateRandomHexCode();
        newTags.push({ id: newId, label: action.payload });
        const user = { ...state, tags: newTags };
        return user;
      }
      case "REMOVE_TAG": {
        const newTags = [...state.tags];
        const tagIndex = newTags.findIndex((tag) => tag.id === action.payload);
        if (tagIndex >= 0) {
          newTags.splice(tagIndex, 1);
        }
        const user = { ...state, tags: newTags };
        return user;
      }
      default: {
        return state;
      }
    }
  };

  const [user, dispatch] = useReducer(userReducer, defaultState);
  // const login = () => {
  //   const newUser = {...user, loggedIn: true}
  //   setUser(newUser);
  // }

  const login = () => {
    dispatch({ type: "LOGIN" });
  };

  // const logout = () => {
  //   // // manually create new object
  //   // const newUser = {
  //   //   loggedIn: false,
  //   //   loading: user.loading,
  //   //   logo: user.logo,
  //   //   tags: user.tags,
  //   //   name: user.name,
  //   //   description: user.description
  //   // }

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  //   // // spread operator
  //   // const newUser = {...user, loggedIn: false}

  //   // // object assign
  //   const newUser = Object.assign({}, user, {loggedIn: false});

  //   setUser(newUser);
  // }

  // const updateName = (name) => {
  //   const newUser = {...user};
  //   newUser.name = name;
  //   setUser(newUser);
  // }

  const updateName = (name) => {
    dispatch({ type: "UPDATE_NAME", payload: name });
  };

  // const updateDescription = (description) => {
  //   const newUser = {...user};
  //   newUser.description = description;
  //   setUser(newUser);
  // }

  const updateDescription = (description) => {
    dispatch({ type: "UPDATE_DESCRIPTION", payload: description });
  };

  // const addTag = (tag) => {
  //   const newTags = [...user.tags]
  //   const newId = generateRandomHexCode();
  //   newTags.push({id: newId, label: tag});
  //   setUser({...user, tags: newTags});
  // }

  const addTag = (tag) => {
    dispatch({ type: "ADD_TAG", payload: tag });
  };

  // const removeTag = (id) => {
  //   const newTags = [...user.tags];
  //   const tagIndex = newTags.findIndex((tag) => tag.id === id);
  //   if (tagIndex >= 0) {
  //     newTags.splice(tagIndex, 1)
  //   }
  //   setUser({...user, tags:newTags})
  // }

  const removeTag = (id) => {
    dispatch({ type: "REMOVE_TAG", payload: id });
  };

  return (
    <div>
      <Navbar
        loggedIn={user.loggedIn}
        onLogin={login}
        onLogout={logout}
        username={user.name}
      />
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
