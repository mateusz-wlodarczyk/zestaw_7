import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FormikProps } from "formik";

export const InputSingleEl = <T,>({
  accessor,
  formik,
}: {
  accessor: keyof T & string;
  formik: FormikProps<T>;
}) => {
  return (
    <FormControl>
      <FormLabel>{accessor}</FormLabel>
      <Input
        id={accessor}
        name={accessor}
        value={formik.values[accessor] as string}
        onChange={formik.handleChange}
      />
      <FormHelperText>
        {formik.touched[accessor] && formik.errors[accessor]
          ? (formik.errors[accessor] as string) || ""
          : ""}
      </FormHelperText>
    </FormControl>
  );
};
