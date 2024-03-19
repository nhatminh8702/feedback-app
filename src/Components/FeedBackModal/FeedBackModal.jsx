import { Box, Button, IconButton, Modal } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useForm } from "react-hook-form";
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

const FeedBackModal = ({ open, onClose, title, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    setValue,
    getValues,
    reset,
  } = useForm();

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
export default FeedBackModal;
