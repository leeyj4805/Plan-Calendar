import React, { useState,useEffect } from 'react';
import Axios from "axios";

function KoreaAllData(res) {
  const [user, setUser] = useState([])

    useEffect(() => {
    Axios
      .get("https://api.manana.kr/calendar.json",)
      .then((res) => {
        setUser(res.data);
        console.log(res.data.name)
      })
  },[user])

  const FontStyle = {
  fontSize: "0.01rem",
}
  return (
      <>
        {user.map((user) => (
			<p style={FontStyle}>{user.name}</p>
		))}
      </>
  )
}
export default KoreaAllData;