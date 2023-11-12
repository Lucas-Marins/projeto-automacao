const axiosOptionsGet = {
    headers: {
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer M7VywOAsyX1qlo9nXPjEkqGEQUCj95`,
        "Access-Control-Allow-Credentials" : true ,
      }
}


const axiosOptionsPost = {
    headers: {
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer fwKvNT7tMpJ09PLiXrG4YE6JRQPlD7`,
        "Access-Control-Allow-Credentials" : true  
      }
}


module.exports ={
    axiosOptionsGet,
    axiosOptionsPost
}