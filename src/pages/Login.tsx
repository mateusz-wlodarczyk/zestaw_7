import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { InfoAboutUser } from "../components/InfoAboutUser";
import { InputSingleEl } from "../components/InputSingleEl";
import {
  LoginFormValues,
  initialValuesFormikLogin,
  yupSchemaLogin,
} from "../utils/yupSchema";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { UserSLice, UsersFromSlice, loginUser } from "../redux/userSlice";
import { useAuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/constans";

export const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { loginUser: loginUserAuthContext, isLogin } = useAuthContext();
  const navigate = useNavigate();
  const usersDatabase = useSelector((state: UsersFromSlice) => state.user);

  // const formik = useFormik<LoginFormValues>({
  //   enableReinitialize: true,
  //   initialValues: initialValuesFormikLogin,

  //   onSubmit: () => {
  //     console.log("ok");
  //   },
  //   validationSchema: yupSchemaLogin,
  // });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser({ password, email }));
    //  if warunek, zalezy co zwraca dispatch?
    loginUserAuthContext();
    navigate(`${ROUTES.home}`);
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
        </Button>{" "}
        <Button type="button" onClick={handleClear}>
          clear
        </Button>
      </form>
      <InfoAboutUser link="register" text="no account?" />
    </Box>
  );
};
