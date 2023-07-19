// const apiKey = ("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")
const url = "https://api.openai.com/v1/completions"
fetch(url,{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer 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 '
    },
    body:JSON.stringify({
        'model':'text-davinci-003',
        'prompt':'What is the capital of Andhra Pradesh?'
    })
}).then(response=>response.json()).then(data=>console.log(data))