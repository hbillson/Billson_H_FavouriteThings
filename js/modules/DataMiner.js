 let errorCodes = {
    404: "Not found.",
    500: "Server unavailable.",
    403: "You don't have the credentials to proceed.",
    503: "Service is unavailable."
} 

async function fetchData(sourceURL) {
    let resource = await fetch(sourceURL).then(response => {
        debugger;
        if (response.status !== 200) {
            throw new Error(`Error ${response.status}: ${errorCodes[response.status]}`);
        } 
        
        return response;           
    });

    let dataset = await resource.json();

    return dataset[0];
    
}

async function postData(sourceURL) {
    return "You are using the postData API endpoint";
}


export { fetchData, postData };