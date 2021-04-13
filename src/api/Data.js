const express = require("express");
const router = express.Router();
const request = require("request");
const converter = require("xml-js");


let url = 'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getAnniversaryInfo'; /*URL*/
let queryParams = '?' + encodeURIComponent('ServiceKey') + '=E7TO%2FWA8rY25CprP4iieqB1Btk2F%2FWmikce%2F23Cw8Q5Qqn7iz0hfZGQ22TmTpOAsWSwpp0oKpfqmvjw4iIBYOg%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
queryParams += 
'&' + 
encodeURIComponent('solYear') +
'=' + encodeURIComponent('2021'); /*년*/
queryParams += 
'&' 
+ encodeURIComponent('solMonth') + 
'=' + encodeURIComponent('05'); /*월*/

router.get("/",(req,res)=> {
    request(
        {
            url:url + queryParams,
            method:"GET",
        },
        (res,body) => {
            const xmlToJson = converter.xml2json(body);
            res.setEncoding(xmlToJson);
        }
    );
});

module.exports = router;