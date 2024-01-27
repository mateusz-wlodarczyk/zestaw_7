import * as yup from "yup";

export const initialValuesFormikLogin: LoginFormValues = {
  email: "",
  password: "",
};
export const initialValuesFormik: RegisterFormValues = {
  email: "",
  name: "",
  password: "",
};

export const yupSchemaLogin = yup.object({
  email: yup.string().required().min(5),
  password: yup.string().required().min(5),
});
export const yupSchemaRegister = yup.object({
  email: yup.string().required().min(5),
  name: yup.string().required().min(1),
  password: yup.string().required().min(5),
});
export type LoginFormValues = yup.InferType<typeof yupSchemaLogin>;
export type RegisterFormValues = yup.InferType<typeof yupSchemaRegister>;
