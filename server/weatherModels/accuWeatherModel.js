

//This is grea

    const fetch = require('node-fetch');
    
    const encodedParams = new URLSearchParams();
    encodedParams.append("apiKey", "<REQUIRED>");
    encodedParams.append("locationKey", "<REQUIRED>");
    
    const url = 'https://accuweatherstefan-skliarovv1.p.rapidapi.com/get24HoursConditionsByLocationKey';
    
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '221f8b9e91mshb9937d210b147b7p1161eajsn34c80789ddd4',
        'X-RapidAPI-Host': 'AccuWeatherstefan-skliarovV1.p.rapidapi.com'
      },
      body: encodedParams
    };
    
    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
    