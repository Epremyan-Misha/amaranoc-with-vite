import React, { useEffect, useState } from "react";
import '../index.css';
import { Link } from "react-router-dom";
const baseUrl = "https://myproject-73982-default-rtdb.firebaseio.com/";

function HeaderInfo() {
  const [infoForHeader, setInfoForHeader] = useState([]);
  const [imgForHeader, setImgForHeader] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}infoForHeader.json`)
      .then(res => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then(data => setInfoForHeader(Array.isArray(data) ? data : Object.values(data)))
      .catch(err => console.error("Error fetching infoForHeader:", err));

    fetch(`${baseUrl}imgForHeader.json`)
      .then(res => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then(data => setImgForHeader(Array.isArray(data) ? data : Object.values(data)))
      .catch(err => console.error("Error fetching imgForHeader:", err));
  }, []);

  return (
    <>
      {infoForHeader.map((info, index) => (
        <h4
          key={index}
          className="text-1xl mt-8 -ml-7 cursor-pointer hover:border-b-2 border-b-orange-500 h-7.5"
        >
          {info.title}
        </h4>
      ))}
       <Link to="/login" className="text-red-600 mt-8  hover:border-b-2 border-b-red-500 h-7.5">
            Դուրս գալ
        </Link>
      {imgForHeader.map((img, index) => (
        <img
          key={index}
          className="w-8 h-8 mt-6 -ml-10 cursor-pointer"
          src={img.img}
          alt="icon"
        />
      ))}
    </>
  );
}

export default HeaderInfo;
