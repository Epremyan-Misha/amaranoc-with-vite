import React, { useEffect, useState } from "react";
import "../index.css";

const baseUrl = "https://myproject-73982-default-rtdb.firebaseio.com/";

function AdvantagesMain() {
  const [advantagesH4, setAdvantagesH4] = useState([]);
  const [advantagesText, setAdvantagesText] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}advanatagesH4.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then((data) => {
        setAdvantagesH4(Array.isArray(data) ? data : Object.values(data));
      })
      .catch((err) => {
        console.error("Error fetching advanatagesH4:", err);
      });
    fetch(`${baseUrl}advanatagesText.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then((data) => {
        setAdvantagesText(Array.isArray(data) ? data : Object.values(data));
      })
      .catch((err) => {
        console.error("Error fetching advanatagesText:", err);
      });
  }, []);

  return (
    <div>
      {advantagesH4.map((info, index) => (
        <h4
          key={index}
          className="ml-[30px] text-[rgb(46,46,46)] mt-[10px]"
        >
          {info.h4}
        </h4>
      ))}

      <div className="cursor-pointer ml-[25px] text-[rgb(75,74,74)] mt-[40px]">
        {advantagesText.map((info, index) => (
          <p key={index}>{info.text}</p>
        ))}
      </div>
    </div>
  );
}

export default AdvantagesMain;
