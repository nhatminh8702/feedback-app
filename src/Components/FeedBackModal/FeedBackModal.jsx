import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  IconButton,
  Modal,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

const FeedBackModal = ({
  open,
  onClose,
  title,
  onSubmit,
  displayInformation,
}) => {
  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
    control,
    watch,
  } = useForm();

  const { fields, append } = useFieldArray({
    control,
    name: "teacherScore",
  });

  const [criteriaList, setCriteriaList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5209/api/FeedBack/GetCriteria"
      );
      var data = await response.json();
      await setCriteriaList(data);
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open]);

  useEffect(() => {
    fetchData();
    displayInformation.teacherScore.map((d) => append(d));
  }, []);

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
            marginBottom: "16px",
          }}
        >
          <Box
            sx={{
              m: 1,
              fontSize: 16,
              display: "grid",
              gridTemplateColumns: " repeat(2, 1fr)",
            }}
          >
            <Typography sx={{ gridColumn: "1/3" }} variant="h6" component="div">
              {title}
            </Typography>
            <Box>
              <Typography variant="h6" component="div">
                {displayInformation?.subject}
              </Typography>
            </Box>
            <Typography sx={{ textAlign: "center" }} color="text.secondary">
              Class: {displayInformation?.class?.name}
            </Typography>
            <Typography sx={{ gridColumn: "1/3" }} variant="body2">
              Teacher: {displayInformation?.teacher?.name}
            </Typography>
          </Box>
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
            display: "grid",
            gridTemplateColumns: " repeat(2, 1fr)",
          }}
        >
          {criteriaList.map((row, index) => (
            <Controller
              key={row.id}
              name={`teacherScore.${index}.score`}
              control={control}
              defaultValue={0}
              render={({ field }) => (
                <FormControl error={errors?.[`teacherScore`]?.[index] != null}>
                  <FormLabel id="demo-radio-buttons-group-label">
                    {row.description}
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    ref={register()}
                    defaultValue={fields[index]?.score}
                    {...field}
                    onChange={(event, value) => field.onChange(value)}
                  >
                    {row.ratingScales.map((item) => (
                      <FormControlLabel
                        key={item.id}
                        value={item.score}
                        control={<Radio />}
                        label={item.description}
                      />
                    ))}
                    {errors?.[`teacherScore`]?.[index] && (
                      <FormHelperText>
                        {errors?.[`teacherScore`]?.[index]?.score?.message}
                      </FormHelperText>
                    )}
                  </RadioGroup>
                </FormControl>
              )}
              rules={{
                validate: (value) => {
                  return value !== 0 || "This Field is required!";
                },
              }}
            />
          ))}
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
