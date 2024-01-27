import { Box, Button, FormLabel, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { InfoAboutUser } from "../components/InfoAboutUser";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/userSlice";

export const Register = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerUser({ password, email }));
  };

  const handleClear = () => {
    setPassword("");
    setEmail("");
  };

  return (
    <Box>
      <form

      // onSubmit={formik.handleSubmit}
      >
        {/* <InputSingleEl<LoginFormValues> accessor="email" formik={formik} />
        <InputSingleEl<LoginFormValues> accessor="password" formik={formik} /> */}
        {/* zastepstwo */}
        <FormLabel>
          Enter your email:
          <Input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormLabel>
        <FormLabel>
          Enter your password:
          <Input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormLabel>
        <Button
          type="submit"
          onClick={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
        >
          submit
        </Button>
        <Button type="button" onClick={handleClear}>
          clear
        </Button>
      </form>

      <InfoAboutUser link="login" text="has account?" />
    </Box>
  );
};
