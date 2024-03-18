import { useEffect, useState } from "react";
import "./Feedback.css";
import { Box } from "@mui/material";

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
    class: "MKT1627",
    teacher: "Trieu Dinh Chien",
  },
];

const Feedback = () => {
  const [productsList, setProductsList] = useState([]);
  const [inputProduct, setInputProduct] = useState({
    productId: 0,
    productName: "",
    unitPrice: 0,
    unitsInStock: 0,
    categoryId: 0,
  });

  const handleInputChange = (key, value) => {};

  const handleOnClickField = (id) => {
    setInputProduct(productsList.find((p) => p.productId === id));
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

  return <Box></Box>;
};

export default Feedback;
