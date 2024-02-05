import { loadMovies } from "../utils/fetchMovies";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { MoviesPage } from "../components/MoviesPage";
import { useQuery } from "react-query";
import { useClick } from "../hooks/useClick";
import { useDispatch } from "react-redux";

import { useAuthContext } from "../context/authContext";
import { logoutUser } from "../redux/userSlice";

export const HomePage = () => {
  const { pageNumber, handlePrevClick, handleNextClick } = useClick();
  const { logoutUser: logoutUserAuthContext } = useAuthContext();

  const dispatch = useDispatch();
  const {
    data: loadedMovie,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movieData", pageNumber],
    queryFn: () => loadMovies(pageNumber),
  });

  const handleLogout = () => {
    dispatch(logoutUser());
    logoutUserAuthContext();
  };

  if (isLoading) return <Box>loading...</Box>;
  if (error) return <Box>error</Box>;

  return (
    <Box>
      <Button onClick={handleLogout}>logout</Button>
      <Box
        sx={{
          padding: "10px",
          width: "100%",
          fontSize: "12px",
        }}
      >
        {loadedMovie !== undefined && <MoviesPage loadedMovie={loadedMovie} />}
        <Box sx={{ margin: "auto" }}>
          <ButtonGroup>
            <Button onClick={handlePrevClick}>prev</Button>
            <Button onClick={handleNextClick}>next</Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Box>
  );
};
