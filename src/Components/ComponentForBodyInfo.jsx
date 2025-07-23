import React, { useEffect, useState } from "react";
import "../index.css";

const baseUrl = "https://myproject-73982-default-rtdb.firebaseio.com/";

function BodyInfo() {
  const [infoHouseForBody, setInfoHouseForBody] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}infoHouseForBody.json`)
      .then(res => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then(data => setInfoHouseForBody(Array.isArray(data) ? data : Object.values(data)))
      .catch(err => console.error("Error fetching infoHouseForBody:", err));
  }, []);

  return (
    <>
      <h3 className="ml-6 mt-3.5">Տարածաշրջան</h3>
      <div className="border-b border-b-[rgb(233,231,231)] border-b-[1px]">
        <div className="cursor-pointer ml-[25px] text-[rgb(75,74,74)]">
          {infoHouseForBody.map(info => (
            <p key={info.id}>{info.name}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default BodyInfo;
