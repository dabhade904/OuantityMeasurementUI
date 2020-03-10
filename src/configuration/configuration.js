const axios = require ('axios');

module.exports = {
 
async configuration(data) {
    console.log("in axios func--->", data);

    return axios({
        method: 'POST',
        url: 'http://localhost:4000/unitValue',
        data: data
    })
},

async  getUnits(data1) {
    console.log("congiiiiii",data1);
    var a=data1.type
    var url="http://localhost:4000/unitType/"
    var finalUrl=(url.concat(a))
    return axios({
        method:"GET",
        url:finalUrl
    });
},

 async  getType(){
    return axios({
        method:"GET",
        url:"http://localhost:4000/type"
    })
}
}

// module.exports = configuration,getUnits
// export default getUnits;
// exports.configuration = configuration;
// exports.getUnits = getUnits
//  exports.configuration=configuration;
//  exports.getUnits = getUnits;
// module.exports={
//     configuration,getUnits
// }

