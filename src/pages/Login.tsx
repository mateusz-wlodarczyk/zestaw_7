import { Box, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import { InfoAboutUser } from "../components/InfoAboutUser";
import { InputSingleEl } from "../components/InputSingleEl";
import {
  LoginFormValues,
  initialValuesFormikLogin,
  yupSchemaLogin,
} from "../utils/yupSchema";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/userSlice";
import { useAuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/constans";

export const Login = () => {
  const [wrongLogValues, setWrongValues] = useState(true);
  const dispatch = useDispatch();
  const { loginUser: authLog } = useAuthContext();
  const navigate = useNavigate();

  const formik = useFormik<LoginFormValues>({
    enableReinitialize: true,
    initialValues: initialValuesFormikLogin,

    onSubmit: () => {
      authLog(formik.values).then((resp) => {
        if (resp) {
          navigate(`${ROUTES.home}`);
          dispatch(loginUser({ email: formik.values.email }));
          return;
        } else {
          setWrongValues(resp);
        }
      });
    },
    validationSchema: yupSchemaLogin,
  });

  return (
    <Box>
      <Box sx={{ w: "400px" }}>
        <form onSubmit={formik.handleSubmit}>
          <InputSingleEl<LoginFormValues> accessor="email" formik={formik} />
          <InputSingleEl<LoginFormValues> accessor="password" formik={formik} />
          <Button type="submit">log in</Button>
        </form>
      </Box>
      <InfoAboutUser link="register" text="no account?" />
      {!wrongLogValues && <Text>error/problems!!</Text>}
    </Box>
  );
};
