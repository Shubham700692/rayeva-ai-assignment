async function generateTags(){

const name = document.getElementById("productName").value
const desc = document.getElementById("productDesc").value

const response = await fetch("/api/products/generate",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name:name,
description:desc
})
})

const data = await response.json()

document.getElementById("resultOutput").textContent =
JSON.stringify(data,null,2)

}


async function generateProposal(){

const client = document.getElementById("clientName").value
const industry = document.getElementById("industry").value
const budget = document.getElementById("budget").value

const response = await fetch("/api/proposal/generate",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
company_name:client,
budget:budget,
industry:industry
})
})

const data = await response.json()

document.getElementById("resultOutput").textContent =
JSON.stringify(data,null,2)

}


function showGenerator(type){

document.getElementById("categoryGenerator").style.display = "none";
document.getElementById("proposalGenerator").style.display = "none";

document.getElementById("tab-category").classList.remove("active");
document.getElementById("tab-proposal").classList.remove("active");

if(type === "category"){
document.getElementById("categoryGenerator").style.display = "block";
document.getElementById("tab-category").classList.add("active");
}

if(type === "proposal"){
document.getElementById("proposalGenerator").style.display = "block";
document.getElementById("tab-proposal").classList.add("active");
}

}