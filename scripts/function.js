async function GetData(){
    const response = await fetch('../data/data.json');
    const data = await response.json();
    console.log(data);
    return data;
}

export { GetData};