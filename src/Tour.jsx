import React, { useState } from "react";

export const tourData = [
  {
    id: 1,
    city: "London",
    name: "London royal palace tour",
    img: "https://planetofhotels.com/guide/sites/default/files/styles/node__blog_post__bp_banner/public/live_banner/London-1.jpg",
    info: "The capital of UK",
  },
  {
    id: 2,
    city: "New York",
    name: "New york bridge tour",
    img: "https://i.natgeofe.com/n/874df281-d3e0-489a-98c0-6b840023b828/newyork_NationalGeographic_2328428_4x3.jpg",
    info: "The second capital of USA",
  },
  {
    id: 3,
    city: "Paris",
    name: "Paris lights tour",
    img: "https://media.cntraveler.com/photos/5d8cf7d5db6acf000833e6cc/3:2/w_3999,h_2666,c_limit/Eiffel-Tower_GettyImages-1060266626.jpg",
    info: "The capital of France",
  },
  {
    id: 4,
    city: "Tokyo",
    name: "Tokyo sushi tour",
    img: "https://www.corporatetraveller.com.au/sites/default/files/styles/large/public/2018-11/CT-Tokyo-LP.jpg?itok=TZfgJkgc",
    info: "The capital of Japan",
  },
];

const Tour = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="tour">
      {tourData.map((el) => (
        <div key={el.id} className="eachTour">
          <img src={el.img} className="img" />
          <span>{el.name}</span>
          <h4>{el.city}</h4>
          <button className="moreButton" onClick={handleShow}>More</button>

          {show && <p>{el.info} </p>}
        </div>
      ))}
    </div>
  );
};

export default Tour;
