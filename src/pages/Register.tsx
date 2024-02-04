import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { InfoAboutUser } from "../components/InfoAboutUser";
import { useFormik } from "formik";
import { useAuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/constans";
import {
  LoginFormValues,
  initialValuesFormikLogin,
  yupSchemaLogin,
} from "../utils/yupSchema";
import { InputSingleEl } from "../components/InputSingleEl";

export const Register = () => {
  const [wrongLogValues, setWrongValues] = useState(true);
  const { registerNewUser } = useAuthContext();
  const navigate = useNavigate();

  const formik = useFormik<LoginFormValues>({
    enableReinitialize: true,
    initialValues: initialValuesFormikLogin,

    onSubmit: () => {
      registerNewUser(formik.values).then((resp) => {
        if (resp) {
          navigate(`${ROUTES.login}`);
          //kiedys dodac toasta
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
      <form onSubmit={formik.handleSubmit}>
        <InputSingleEl<LoginFormValues> accessor="email" formik={formik} />
        <InputSingleEl<LoginFormValues> accessor="password" formik={formik} />

        <Button type="submit">submit</Button>
      </form>

      <InfoAboutUser link="login" text="has account?" />
      {!wrongLogValues && <Text>error/problems!!</Text>}
    </Box>
  );
};
