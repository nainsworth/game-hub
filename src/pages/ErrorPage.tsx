import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../Components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box textAlign={"center"} marginTop="100px">
        <Heading fontSize="80px">Oops!</Heading>
        <Text fontSize="24px">
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error occurred"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
