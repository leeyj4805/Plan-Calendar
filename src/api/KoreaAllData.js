import React  from 'react';
import Axios from "axios";



function KoreaAllData() {
    const date = () => {
         Axios
        .get('http://api.manana.kr/calendar.json')
        .then((res) => {
            console.log(res);
        }
        );
    };


        return (
                    <p>111</p>
                ); 
        }


export default KoreaAllData;