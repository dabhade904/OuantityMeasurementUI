import axios from 'axios';

async function configuration(data) {
    console.log("in axios func--->", data);

    return axios({
        method: 'POST',
        url: 'http://localhost:4000/value',
        data: data
    })
}

async function getUnits(data1) {
    console.log(data1);
    var a=data1.type
    var url="http://localhost:4000/unitType"
    var finalUrl=(url.concat(a))
    return axios({
        method:"GET",
        url:finalUrl
    });
}

 async function getType(){
    return axios({
        method:"GET",
        url:"http://localhost:4000/unitType"
    })
}

export default configuration
//  exports.configuration=configuration;
//  exports.getUnits = getUnits;


