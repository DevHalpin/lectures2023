import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import Loading from "./components/Loading";
import { useFetch } from "./hooks/useFetch";
import Hit from "./components/Hit";

function App() {

  const [posts, loading, error, fetchPosts] = useFetch("/posts?error=true", []);
  const [hits, loadingHits, errorHits, fetchHits] = useFetch("/hits", []);

  return (
    <>
      <Header />
      <div className="main-container">
        <main>
          <h2>
            Posts <button onClick={fetchPosts}>Load</button>
          </h2>
          {loading && <Loading/>}
          {error && <p>{error.message}</p>}
          {
            posts.map((post) => <Post {...post} />)
          }
        </main>
        <aside>
          <h2>
            Hits <button onClick={fetchHits}>Load</button>
            {loadingHits && <Loading/>}
          {errorHits && <p>{error.message}</p>}
          {
            hits.map((hit) => <Hit {...hit} />)
          }
          </h2>
        </aside>
      </div>
    </>
  );
}

export default App;