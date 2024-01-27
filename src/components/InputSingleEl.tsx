import React from "react";
import { TextField } from "@mui/material";
import { Field, FormikProps } from "formik";

export const InputSingleEl = <T,>({
  accessor,
  formik,
}: {
  accessor: keyof T & string;
  formik: FormikProps<T>;
}) => {
  return (
    <Field
      error={Boolean(formik.touched[accessor] && formik.errors[accessor])}
      id={accessor}
      label={accessor}
      name={accessor}
      value={formik.values[accessor]}
      helperText={
        formik.touched[accessor] && formik.errors[accessor]
          ? (formik.errors[accessor] as string) || ""
          : ""
      }
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
    />
  );
};
