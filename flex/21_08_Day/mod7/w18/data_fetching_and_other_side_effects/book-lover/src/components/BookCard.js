

const BookCard = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.image} alt="Book Cover" />
      <p>{props.description}</p>
    </div>
  )
}

export default BookCard;