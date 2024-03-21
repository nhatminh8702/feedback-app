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
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [responseCode, setResponseStatusCode] = useState();
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    setResponseStatusCode(response.status);
    if (response.ok) {
      var data = await response.json();
      sessionStorage.setItem("role", data.role);
      sessionStorage.setItem("userId", data.id);
      navigate("/feedback");
    } else {
      setError("email", { type: "custom", message: "Account not exist" });
    }
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (data) => {
    postData("http://localhost:5209/api/Users/login", { ...data });
  };

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
          {...register("email", {
            required: { value: true, message: "Email is required" },
          })}
          error={errors.email != null}
          helperText={errors?.email?.message}
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
