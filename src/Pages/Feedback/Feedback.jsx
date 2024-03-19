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

  const handleSubmitFeedBack = (data) => {
    console.log(data);
  };

  const handleInputChange = (key, value) => {};

  const handleOnClickField = (id) => {
    //setInputProduct(productsList.find((p) => p.productId === id));
  };

  useEffect(() => {}, []);

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
        title={"FeedBack"}
        feedBackId={feedBackId}
        open={openFeedBackModal}
        onClose={handleCloseModal}
        onSubmit={handleSubmitFeedBack}
      />
    </Box>
  );
};

export default Feedback;
