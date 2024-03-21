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
import { useNavigate } from "react-router-dom";

const Feedback = () => {
  const [feedBackList, setFeedBackList] = useState([]);
  const [openFeedBackModal, setOpenFeedBackModal] = useState(false);
  const [selectedFeedBack, setSelectedFeedBack] = useState({});
  const navigate = useNavigate();
  const displayData = useMemo(() => {
    return feedBackList;
  }, [feedBackList]);

  const fetchFeedback = async () => {
    try {
      const userId = sessionStorage.getItem("userId");
      const response = await fetch(
        "http://localhost:5209/api/FeedBack/GetFeedBack/" + userId
      );
      let data = await response.json();
      await setFeedBackList(data);
    } catch (ex) {
      console.log(ex);
    }
  };

  async function postData(url = "", data = {}) {
    // Default options are marked with *
    console.log(data);
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
    console.log(response.status);
  }

  const handleCloseModal = () => {
    setOpenFeedBackModal(false);
  };

  const handleClickTakeFeedBack = (item) => {
    setSelectedFeedBack(item);
    setOpenFeedBackModal(true);
  };

  const handleSubmitFeedBack = (data) => {
    postData("http://localhost:5209/api/FeedBack/GiveFeedBack", {
      classId: selectedFeedBack.class.id,
      teacherId: selectedFeedBack.teacher.id,
      studentId: Number.parseInt(sessionStorage.getItem("userId")),
      teacherScore: data.teacherScore,
    });
    setOpenFeedBackModal(false);
  };

  const handleInputChange = (key, value) => {};

  const handleOnClickField = (id) => {
    //setInputProduct(productsList.find((p) => p.productId === id));
  };

  useEffect(() => {
    if (sessionStorage.getItem("userId") == null) {
      navigate("/login");
    }
    fetchFeedback();
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
                  Class: {item.class.name}
                </Typography>
                <Typography variant="body2">
                  Teacher: {item.teacher.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => handleClickTakeFeedBack(item)}
                >
                  GIve FeedBack
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
      {openFeedBackModal && (
        <FeedBackModal
          title={"FeedBack"}
          open={openFeedBackModal}
          onClose={handleCloseModal}
          onSubmit={handleSubmitFeedBack}
          displayInformation={selectedFeedBack}
        />
      )}
    </Box>
  );
};

export default Feedback;
