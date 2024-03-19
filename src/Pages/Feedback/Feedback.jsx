import { useEffect, useMemo, useState } from "react";
import "./Feedback.css";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import FeedBackModal from "../../Components/FeedBackModal/FeedBackModal";

// criteria: [
//   {
//     id: 1,
//     name: "Regarding the teacher's punctuality",
//     score: 0,
//     ratingScale: [
//       { id: 1, score: 5, description: "Always punctual" },
//       { id: 1, score: 4, description: "Mostly punctual" },
//       { id: 1, score: 2, description: "Rarely punctual" },
//       { id: 1, score: 1, description: "Not at all punctual" }
//     ],
//   },
//   {
//     id: 2,
//     name: "The teacher adequately covers the topics required by the syllabus",
//     score: 0,
//     ratingScale: [
//       { id: 1, score: 5, description: "Fully covered" },
//       { id: 1, score: 4, description: "Mostly covered" },
//       { id: 1, score: 2, description: "Partially covered" },
//       { id: 1, score: 1, description: "Not at all covered" }
//     ],
//   },
//   {
//     id: 3,
//     name: "Teacher's response to student's questions in class",
//     score: 0,
//     ratingScale: [
//       { id: 1, score: 5, description: "Always punctual" },
//       { id: 1, score: 4, description: "Mostly punctual" },
//       { id: 1, score: 2, description: "Rarely punctual" },
//       { id: 1, score: 1, description: "Not at all punctual" }
//     ],
//   },
//   {
//     id: 4,
//     name: "Answered immediately or just after the session",
//     score: 0,
//     ratingScale: [
//       { id: 1, score: 5, description: "Answered immediately or just after the session" },
//       { id: 1, score: 4, description: "Answered in the next session" },
//       { id: 1, score: 2, description: "Some queries left unanswered" },
//       { id: 1, score: 1, description: "Most queries left unanswered" }
//     ],
//   },
// ],

const requestData = [
  {
    id: 1,
    subject: "PRN231",
    className: "SE1625",
    teacher: "Hoang Thanh Phong",
  },
  {
    id: 2,
    subject: "PRN221",
    className: "SE1625",
    teacher: "Hoang Thanh Phong",
  },
  {
    id: 3,
    subject: "DBI202",
    className: "MKT1627",
    teacher: "Trieu Dinh Chien",
  },
  {
    id: 4,
    subject: "DBI202",
    className: "MKT1627",
    teacher: "Trieu Dinh Chien",
  },
  {
    id: 5,
    subject: "DBI202",
    className: "MKT1627",
    teacher: "Trieu Dinh Chien",
  },
  {
    id: 6,
    subject: "DBI202",
    className: "MKT1627",
    teacher: "Trieu Dinh Chien",
  },
];

const Feedback = () => {
  const [feedBackList, setFeedBackList] = useState(requestData);
  const [feedBackId, setFeedBackId] = useState(0);
  const [openFeedBackModal, setOpenFeedBackModal] = useState(false);

  const displayData = useMemo(() => {
    return feedBackList;
  }, [feedBackList]);

  const handleCloseModal = () => {
    setOpenFeedBackModal(false);
  };

  const handleClickTakeFeedBack = (id) => {
    setFeedBackId(id);
    setOpenFeedBackModal(true);
  };

  const handleInputChange = (key, value) => {};

  const handleOnClickField = (id) => {
    //setInputProduct(productsList.find((p) => p.productId === id));
  };

  useEffect(() => {
    // fetch("https://localhost:7293/api/Products", {
    //   method: "GET",
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setProductsList(data);
    //   });
  }, []);

  return (
    <Box sx={{ textAlign: "start", marginTop: 4, marginLeft: 3 }}>
      <Typography variant="h4" component="div">
        Feed Back
      </Typography>
      <Box sx={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {displayData.map((item) => (
          <Box key={item.id} sx={{ width: "250px" }}>
            <Card variant="outlined">
              <CardContent sx={{ textAlign: "start" }}>
                <Typography variant="h6" component="div">
                  {item.subject}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Class: {item.className}
                </Typography>
                <Typography variant="body2">Teacher: {item.teacher}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => handleClickTakeFeedBack(item.id)}
                >
                  GIve FeedBack
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
      <FeedBackModal
        title={"Feed Back"}
        feedBackId={feedBackId}
        open={openFeedBackModal}
        onClose={handleCloseModal}
      />
    </Box>
  );
};

export default Feedback;
