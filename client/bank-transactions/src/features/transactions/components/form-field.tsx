import {
  UseFormRegister,
  FieldError,
  Path,
  FieldValues,
} from "react-hook-form";

import { Grid, TextField, TextFieldProps } from "@mui/material";

interface FormFieldProps<T extends FieldValues>
  extends Omit<TextFieldProps, "name" | "error"> {
  name: Path<T>;
  label: string;
  register: UseFormRegister<T>;
  error?: FieldError;
  gridProps?: Omit<React.ComponentProps<typeof Grid>, "item">;
}

const FormField = <T extends FieldValues>({
  name,
  label,
  register,
  error,
  helperText,
  required,
  gridProps,
  ...rest
}: FormFieldProps<T>) => {
  return (
    <Grid item {...gridProps}>
      <TextField
        {...rest}
        {...register(name)}
        name={name}
        label={label}
        error={!!error}
        helperText={error?.message || helperText}
        required={required}
        fullWidth
      />
    </Grid>
  );
};

export default FormField;
