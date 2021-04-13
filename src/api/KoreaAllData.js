import React, { useState,useEffect } from 'react';
import Axios from "axios";
function KoreaAllData() {
  const [user, setUser] = useState([])

    useEffect(() => {
    Axios
      .get("https://api.manana.kr/calendar.json",)
      .then((res) => {
        setUser(res.data[1].name);
        console.log(res.data.name)
      })
  },[user])
  return (
      <p>{user}</p>
  )
}
export default KoreaAllData;