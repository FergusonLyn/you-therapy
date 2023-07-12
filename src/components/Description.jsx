import { useState } from "react";
import Descriptionss from "./Descriptionss";

const Description = () => {
  const [items, setItems] = useState ([
    {
      id: 1,
      img: "https://static.vecteezy.com/system/resources/previews/002/509/531/original/notepad-and-pencil-writing-education-school-icon-design-free-vector.jpg",
      text: "It's Professional ",
      context:
        "All therapists are licensed, accredited  professionals. You Therapy connects  you to them in a safe and convenient online environment. ",
    },
    {
      id: 2,
      img: "https://previews.123rf.com/images/remodesigner/remodesigner1906/remodesigner190600600/127854932-piggy-bank-with-coin-money-box-in-pig-form-concept-of-saving-money-vector-illustration.jpg",
      text: "It's Chargeless",
      context:
        "Financial burden has been cancelled out for unlimited therapy with your therapist. Therapy doesn't have to be expensive. ",
    },
    {
      id: 3,
      img: "https://cdn-icons-png.flaticon.com/512/5737/5737025.png",
      text: "It's Convenient ",
      context:
        "Do it at your own time and at your own pace. Communicate with your therapist as often as you want and whenever you feel it's needed. ",
    },
  ]);

  

  return (
    <>
      <div className="flex-container">
        {items.map((item, index) => {
          return (
            <Descriptionss
              key={index}
              img = {item.img}
              text = {item.text}
              context = {item.context}
            />
          );
        })}
      </div>
    </>
  );
};

export default Description;
