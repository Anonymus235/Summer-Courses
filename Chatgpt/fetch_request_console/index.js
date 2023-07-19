// const apiKey = ("your api key")
const url = "https://api.openai.com/v1/completions"
fetch(url,{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer apiKey '
    },
    body:JSON.stringify({
        'model':'text-davinci-003',
        'prompt':'What is the capital of Andhra Pradesh?'
    })
}).then(response=>response.json()).then(data=>console.log(data))
