setInterval(()=>{
    date = new Date();
    h= date.getHours();
    m= date.getMinutes();
    s= date.getSeconds();
 
    hrr= 30*h + m/2;
    mrr= 6*m;
    srr = 6*s;
   
    hour.style.transform = `rotate(${hrr}deg)`;
    min.style.transform = `rotate(${mrr}deg)`;
    sec.style.transform = `rotate(${srr}deg)`;
},1000);