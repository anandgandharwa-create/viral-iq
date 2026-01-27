const emotions=[
"जीवन","श्वास","शरीर","परिवार","प्रकृति",
"संघर्ष","आज का दिन","स्वयं","अज्ञात कृपा"
];

function spinWheel(){
let wheel=document.getElementById("wheel");
let text=document.getElementById("wheelText");
let deg=Math.floor(2000+Math.random()*2000);
wheel.style.transform="rotate("+deg+"deg)";
let emotion=emotions[Math.floor(Math.random()*emotions.length)];

setTimeout(()=>{
text.innerText=emotion;
localStorage.setItem("emotion",emotion);
window.location.href="meter.html";
},4200);
}

function updateValue(val){
document.getElementById("val").innerText=val;
}

function showResult(){
let level=document.getElementById("level").value;
localStorage.setItem("level",level);
window.location.href="result.html";
}

function loadResult(){
let v=localStorage.getItem("level");
let box=document.getElementById("resultText");
let msg="";

if(v<40){
msg="आप स्वीकार की अवस्था में हैं। यहीं से परिवर्तन शुरू होता है।";
}else if(v<80){
msg="आपकी कृतज्ञता संतुलन और शांति बना रही है।";
}else{
msg="आप अनुग्रह के क्षेत्र में हैं। अब कुछ माँगने की आवश्यकता नहीं।";
}

box.innerHTML=
"<h3>"+msg+"</h3><p>कृतज्ञता वह भाषा है जिसे अस्तित्व तुरंत सुनता है।</p>";
}
