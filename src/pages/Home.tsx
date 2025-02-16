import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
      <header>
        <div>
          {true ? (
            <>
              <div>사용자 이름 님, 안녕하세요!</div>
              <div>로그아웃</div>
            </>
          ) : (
            <div>로그인</div>
          )}
        </div>
      </header>
      <div>Home</div>
    </>
  );
};

export default Home;
