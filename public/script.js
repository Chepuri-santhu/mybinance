setInterval(async() =>{
try{
    const response=await fetch("/");
    const text=await response.text();
    const parser=new DOMParser();
    const doc=parser.parseFromString(text,'text/html');
    const newprices=doc.getElementById('crypto-prices');
    document.getElementById('crypto-prices').innerHTML=newprices.innerHTML;
}catch(error){
    console.error("error fetching in new prices",error); 
}
},1000);