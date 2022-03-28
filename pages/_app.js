import axios from "axios";
import { useEffect, useState } from "react";
import api from "../components/api";
import Login from "../components/Login";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUser] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const handleApiResponse = (response) => {
    console.log("Res", response);
    setUser(response.data);
    setIsLoading(false);
  };

  const handleError = (error) => {
    setIsLoading(false);
    alert("Something went wrong");
  };

  const getData = async () => {
    await api.get("users").then(handleApiResponse).catch(handleError);
  };

  const postRenderer = users.map((user) => {
    return (
      <div key={user.id}>
        {user.id} {user.fullName} {user.email}
      </div>
    );
  });
  const content = isLoading ? (
    <div>Loading</div>
  ) : (
    <div>
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      {/* {postRenderer} */}
      <Login prop={users} />
    </div>
  );
  return content;
  // return <Component {...pageProps} />;
}

export default MyApp;
