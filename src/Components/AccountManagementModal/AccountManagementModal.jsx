import { Box, Button, IconButton, Modal, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import ClearIcon from "@mui/icons-material/Clear";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

const AccountManagementModal = ({ open, onClose, onSubmit, value, title }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    setValue,
    getValues,
    reset,
  } = useForm({ values: { ...value, cfPassword: value?.password } });
  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open, clearErrors, setValue]);

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ m: 1, fontSize: 16 }}>{title}</Box>
          <IconButton
            aria-label="toggle password visibility"
            onClick={onClose}
            edge="end"
          >
            <ClearIcon />
          </IconButton>
        </Box>
        <TextField
          label="Full Name"
          variant="filled"
          size="small"
          sx={{ m: 1, width: "320px" }}
          {...register("fullName", {
            required: { value: true, message: "Full Name is required" },
          })}
          error={errors.fullName != null}
          helperText={errors?.fullName?.message}
        />
        <TextField
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
        <TextField
          label="Password"
          variant="filled"
          size="small"
          sx={{ m: 1, width: "320px" }}
          {...register("password", {
            required: { value: true, message: "Password is required" },
          })}
          error={errors.password != null}
          helperText={
            errors?.password?.type === "required" ? "password is required" : ""
          }
        />
        <TextField
          label="Confirm Password"
          variant="filled"
          size="small"
          sx={{ m: 1, width: "320px" }}
          {...register("cfPassword", {
            required: { value: true, message: "Confirm Password is required" },
            validate: (value) => {
              return value === getValues("password") || "Password not match";
            },
          })}
          error={errors.cfPassword != null}
          helperText={errors?.cfPassword?.message}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Button
            sx={{ m: 1 }}
            variant="contained"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
export default AccountManagementModal;
