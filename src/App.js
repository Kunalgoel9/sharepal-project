import logo from "./logo.svg";
import "./App.css";

import { BsBorderLeft, BsHandThumbsUp } from "react-icons/bs";
import { GoGift } from "react-icons/go";
import { BsFillCreditCardFill } from "react-icons/bs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
function App() {
  const data = [
    {
      id: "1",
      icon: <BsHandThumbsUp />,
      text: "Excellent Quality Products",
      isBorder: false,
    },

    {
      id: "2",
      icon: <GoGift />,
      text: "Delivery Date & Return Date is FREE!!",
      isBorder: true,
    },

    {
      id: "3",
      icon: <BsFillCreditCardFill />,
      text: "Pay on Delivery",
      isBorder: false,
    },
  ];
  const categoriesData = [
    {
      id: "1",
      imageUrl:
        "https://ik.imagekit.io/faskf16pg/sub_category/7_2NkI3F7jEi.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660136555278",
      heading: "Trekking Shoes",
      productNo: "3",
    },

    {
      id: "2",
      imageUrl:
        "https://ik.imagekit.io/faskf16pg/sub_category/8_n2rLgC9x3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660136555518",
      heading: "Trekking jackets",
      productNo: "10",
    },

    {
      id: "3",
      imageUrl:
        "https://ik.imagekit.io/faskf16pg/sub_category/9_7S6DI_1AY.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660136555703",
      heading: "Backpacks",
      productNo: "4",
    },

    {
      id: "4",
      imageUrl:
        "https://ik.imagekit.io/faskf16pg/sub_category/10_HmOdVtJ9S.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660136556183",
      heading: "Trek Accessories",
      productNo: "11",
    },
  ];

  return (
    <div className="App">
      <Header />
      <div className="itemList">
        {data.map((item) => {
          return (
            <div
              className={
                item.isBorder === true ? "headerMiddleCard" : "headerCard"
              }
            >
              <div className="headerIcon">{item.icon}</div>
              <div>
                <h3>{item.text}</h3>
              </div>
            </div>
          );
        })}
      </div>

      <h1 className="belowSectionHeading">Trekking Gear on rent</h1>
      <div className="categories">
        {categoriesData.map((item) => {
          return (
            <div
              className="categoryCard"
              style={{
                backgroundImage: `url(${item.imageUrl})`,
              }}
            >
              <h3 className="catergoryHeading"> {item.heading}</h3>

              <div className="btn"> {item.productNo}+Products</div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
