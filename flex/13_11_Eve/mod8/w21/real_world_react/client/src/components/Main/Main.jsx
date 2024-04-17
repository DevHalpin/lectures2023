import "./Main.css";
import { SystemListItem } from "../SystemListItem/SystemListItem";
import { useUser } from "../../contexts/userContext";
import { useSystem } from "../../contexts/systemContext";

export const Main = () => {
  const {user} = useUser();
  const systems = useSystem();

  return (
    <>
      <main className="main">
        <section>
          <h1>Profile</h1>
          <p>
            {user
              ? "Welcome to the App!"
              : "Please login to continue!"}
          </p>
          {user && (
            <>
              <h2>Your Systems</h2>
              <ul>
                {systems.map((system) => {
                  return <SystemListItem key={system.id} {...system} />;
                })}
              </ul>
            </>
          )}
        </section>
        {user && (
          <aside>
            <div>
            </div>
            <div>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </aside>
        )}
      </main>
    </>
  );
};