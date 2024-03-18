import React, { useState } from "react";

import "./Login.css";
import {
  Box,
  Button,
  FilledInput,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (data) => {};

  return (
    <div className="login-page">
      <div className="login-modal">
        <Box sx={{ m: 1, fontSize: 16 }}>FeedBack & Questions system</Box>
        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          size="small"
          sx={{ m: 1, width: "320px" }}
          {...register("email", { required: true })}
          error={errors.email != null}
          helperText={
            errors?.email?.type === "required" ? "Email is required" : ""
          }
        />

        <FormControl
          sx={{ m: 1, width: "320px" }}
          size="small"
          variant="filled"
          error={errors.password != null}
        >
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? "text" : "password"}
            {...register("password", { required: true })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          {errors?.password?.type === "required" && (
            <FormHelperText id="filled-adornment-error-text">
              Password is required
            </FormHelperText>
          )}
        </FormControl>
        <div className="login-buttonGroup">
          <Button sx={{ m: 1 }} onClick={handleSubmit(onSubmit)}>
            login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
