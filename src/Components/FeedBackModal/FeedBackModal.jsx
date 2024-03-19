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
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const item = {
  id: 3,
  subject: "DBI202",
  className: "MKT1627",
  teacher: "Trieu Dinh Chien",
};

const criteria = [
  {
    id: 1,
    name: "punctuality",
    description: "Regarding the teacher's punctuality",
    ratingScale: [
      { id: 1, score: 4, description: "Always punctual" },
      { id: 2, score: 3, description: "Mostly punctual" },
      { id: 3, score: 2, description: "Rarely punctual" },
      { id: 4, score: 1, description: "Not at all punctual" },
    ],
  },
  {
    id: 2,
    name: "coverTopic",
    description:
      "The teacher adequately covers the topics required by the syllabus",
    ratingScale: [
      { id: 1, score: 4, description: "Fully covered" },
      { id: 2, score: 3, description: "Mostly covered" },
      { id: 3, score: 2, description: "Partially covered" },
      { id: 4, score: 1, description: "Not at all covered" },
    ],
  },
  {
    id: 3,
    name: "skills",
    description: "Teaching skills of teacher",
    ratingScale: [
      { id: 1, score: 4, description: "Very Good" },
      { id: 2, score: 3, description: "Good" },
      { id: 3, score: 2, description: "Average" },
      { id: 4, score: 1, description: "Poor" },
    ],
  },
  {
    id: 4,
    name: "response",
    description: "Teacher's response to student's questions in class",
    ratingScale: [
      {
        id: 1,
        score: 4,
        description: "Answered immediately or just after the session",
      },
      { id: 2, score: 3, description: "Answered in the next session" },
      { id: 3, score: 2, description: "Some queries left unanswered" },
      { id: 4, score: 1, description: "Most queries left unanswered" },
    ],
  },
  {
    id: 5,
    name: "support",
    description:
      "Support from the teacher - guidance for practical exercises, answering questions out side of class",
    ratingScale: [
      { id: 1, score: 4, description: "Very Good" },
      { id: 2, score: 3, description: "Good" },
      { id: 3, score: 2, description: "Average" },
      { id: 4, score: 1, description: "Poor" },
    ],
  },
];

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

const FeedBackModal = ({ open, onClose, title, onSubmit }) => {
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const [criteriaList, setCriteriaList] = useState(criteria);

  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open]);

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
                {item.subject}
              </Typography>
            </Box>
            <Typography sx={{ textAlign: "center" }} color="text.secondary">
              Class: {item.className}
            </Typography>
            <Typography sx={{ gridColumn: "1/3" }} variant="body2">
              Teacher: {item.teacher}
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
          {criteriaList.map((row) => (
            <Controller
              key={row.id}
              name={row.name}
              control={control}
              defaultValue={0}
              render={({ field }) => (
                <FormControl error={errors[row.name] != null}>
                  <FormLabel id="demo-radio-buttons-group-label">
                    {row.description}
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    {...field}
                    onChange={(event, value) => field.onChange(value)}
                  >
                    {row.ratingScale.map((item) => (
                      <FormControlLabel
                        key={item.id}
                        value={item.score}
                        control={<Radio />}
                        label={item.description}
                      />
                    ))}
                    {errors[row.name] && (
                      <FormHelperText>
                        {errors[row.name].message}
                      </FormHelperText>
                    )}
                  </RadioGroup>
                </FormControl>
              )}
              rules={{
                required: { value: true, message: "This field is required!" },
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
