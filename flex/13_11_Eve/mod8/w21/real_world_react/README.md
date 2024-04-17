# M08W21 - Real World React

### To Do
- [x] React Router
- [x] `useContext`

### React Router
* Uses the `react-router-dom` package

### Programmatic Routing
* `react-router` gives us another _custom hook_ that allows us to programmatically navigate through our app
* `useNavigate` gives us an object with a method called `push` which accepts a string

```js
import {useNavigate} from 'react-router-dom';

// useNavigate gives us back an object
const navigate = useNavigate();

// update the current url to '/about'
navigate('/about');
```

### `useContext`
* `useContext` can be used to share state without having to pass props from parent to child
* Any component that needs access to the shared state can simply import the context and pass it to `useContext`

```js
// in a separate file, create the context to be shared
const MessageContext = React.createContext();

// in the parent component, wrap all children in the context provider
return (
  <div>
    <MessageContext.Provider value={{ message: 'hello world' }}>
      <ChildOne />
      <ChildTwo />
    </MessageContext.Provider>
  </div>
);

// consume the context in another component through useContext
import MessageContext from ('./MessageContext');
const context = React.useContext(MessageContext);

// or with destructuring
const { message } = React.useContext(MessageContext);
```

### Useful Links
* [React Router](https://reactrouter.com/en/main/start/tutorial)
