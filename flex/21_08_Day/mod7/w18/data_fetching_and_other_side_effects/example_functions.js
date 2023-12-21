const joinName = (firstName, lastName) => {
  return firstName + lastName;
}
const firstName = "David";
const lastName = "Halpin";

// const UserCard = (props) => {
//   return (
//     <div>
//       <img src={props.avatar}/>
//       <h1>{props.name}</h1>
//       <h2>{props.emails}</h2>
//       <p>{props.bio}</p>
//     </div>
//   )
// }

// vs

const defaultAvatar = "/public/avatar.jpg"

// const UserCard = (props, defaultAvatar) => {
//   return (
//     <div>
//       <img src={props.avatar || defaultAvatar}/>
//       <h1>{props.name}</h1>
//       <h2>{props.emails}</h2>
//       <p>{props.bio}</p>
//     </div>
//   )
// }

// const UserCard = () => {
//   const [user, setUser] = useState({})
//   return (
//     <div>
//       <img src={user.avatar}/>
//       <h1>{user.name}</h1>
//       <h2>{user.emails}</h2>
//       <p>{user.bio}</p>
//     </div>
//   )
// }

const UserCard = () => {
  const [user, setUser] = useState({})
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    axios.get(`/users/${props.id}`)
    .then((res) => {
      setUser(res.data)
    })
  }, [])

  useEffect(() => {
    setCount((prev) => prev + 1)
  }, [])

  useEffect(() => {
    const myInterval = setInterval(() => {
      setTimer((prev) => prev + 1)
    }, 1000)

    const cleanup = () => {
      clearInterval(myInterval)
    }

    return cleanup;

  })

  // console.log(timer)

  return (
    <div>
      <img src={user.avatar}/>
      <h1>{user.name}</h1>
      <h2>{user.emails}</h2>
      <p>{user.bio}</p>
    </div>
  )
}