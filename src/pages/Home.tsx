import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Navbar from "../components/Navbar";

const Home = () => {
  const testGetFunction = useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      return await axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          console.log(response);
          return response.data;
        });
    },
    staleTime: 1000 * 60 * 5,
  });

  console.log(testGetFunction);

  return (
    <>
      <Navbar />
      <div>Home</div>
    </>
  );
};

export default Home;
