import useRequest from "../hooks/useRequest";

const Request = () => {
  const {data, loading} = useRequest('https://www.dnd5eapi.co/api/classes')

  return( 
    <div>
      <h2>Dungeons and Dragons Classes</h2>
      {loading && <p>Please wait...</p>}
      {data.results && data.results.map(datum => {
        return <p key={datum.index}>{datum.name}</p>
      })}
    </div>
  )
}

export default Request;