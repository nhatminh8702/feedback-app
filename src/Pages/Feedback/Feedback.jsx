import { useEffect, useState } from "react";
import "./Feedback.css";
function Feedback() {
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

  return (
    <div>
      <table className="product-table">
        <thead>
          <tr className="table-header">
            <th>Name</th>
            <th>Price</th>
            <th>InStock</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {productsList.map((p) => (
            <tr
              key={p.productId}
              onClick={() => handleOnClickField(p.productId)}
            >
              <th>{p.productName}</th>
              <th>{p.unitPrice}</th>
              <th>{p.unitsInStock}</th>
              <th>{p.categoryId}</th>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="form-input">
        <div className="input-field">
          <div className="label">Name: </div>
          <input
            className="input-box"
            value={inputProduct.productName}
            onChange={(e) => handleInputChange("productName", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Feedback;
