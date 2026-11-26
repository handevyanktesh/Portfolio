var CPU=[["Ryzen 5 7600",["AM5",65]],["Core i5-13400F",["LGA1700",65]],["Core i7-14700K",["LGA1700",125]],["Ryzen 5 5600",["AM4",65]]];
var MB=[["B650 board",["AM5","DDR5"]],["B760 board",["LGA1700","DDR4"]],["Z790 board",["LGA1700","DDR5"]],["B550 board",["AM4","DDR4"]]];
var RAM=[["16 GB DDR4","DDR4"],["32 GB DDR5","DDR5"]];
var GPU=[["RTX 4060",115],["RTX 4070",200],["RTX 4080",320]];
var PSU=[450,550,650,750,850];
function fill(id,arr,fmt,sel){var s=document.getElementById(id);arr.forEach(function(a,i){var o=document.createElement("option");o.value=i;o.textContent=fmt(a);s.appendChild(o)});s.value=sel;s.addEventListener("change",run)}
fill("cpu",CPU,function(a){return a[0]+" ("+a[1][0]+")"},0);
fill("mb",MB,function(a){return a[0]+" ("+a[1][0]+", "+a[1][1]+")"},0);
fill("ram",RAM,function(a){return a[0]},0);
fill("gpu",GPU,function(a){return a[0]+" ("+a[1]+" W)"},1);
fill("psu",PSU,function(a){return a+" W"},1);
function v(id){return +document.getElementById(id).value}
function run(){
var c=CPU[v("cpu")][1],m=MB[v("mb")][1],r=RAM[v("ram")][1],g=GPU[v("gpu")][1],w=PSU[v("psu")];
var rows=[],bad=0,warn=0;
if(c[0]===m[0])rows.push(["ok","CPU and motherboard","Both use socket "+c[0]+"."]);
else{bad++;rows.push(["bad","CPU and motherboard","The processor needs socket "+c[0]+", but this board is "+m[0]+"."])}
if(r===m[1])rows.push(["ok","Memory and motherboard","Both use "+r+"."]);
else{bad++;rows.push(["bad","Memory and motherboard","This memory is "+r+", but the board takes "+m[1]+"."])}
var t=c[1]+g,q=Math.ceil(t*1.2);
if(w>=q)rows.push(["ok","Power supply","Draw is about "+t+" W. With a 20% margin that is "+q+" W, and the "+w+" W unit covers it."]);
else if(w>=t){warn++;rows.push(["warn","Power supply","Draw is about "+t+" W. It runs, but "+w+" W leaves less than a 20% margin ("+q+" W)."])}
else{bad++;rows.push(["bad","Power supply","Draw is about "+t+" W and a "+w+" W unit is too small."])}
var ic={ok:"✓",warn:"!",bad:"✕"};
document.getElementById("res").innerHTML=rows.map(function(x){return '<li class="r '+x[0]+'"><span class="ic" aria-hidden="true">'+ic[x[0]]+'</span><div><b>'+x[1]+(x[0]==="ok"?": compatible":x[0]==="warn"?": tight":": not compatible")+'</b>'+x[2]+'</div></li>'}).join("");
document.getElementById("verdict").textContent=bad?"This build has "+bad+(bad>1?" problems":" problem")+" to fix before buying.":warn?"This build works, with one warning.":"This build passes every check."}
function mm(){
var f=document.getElementById("face").checked,a=+document.getElementById("away").value,o=document.getElementById("mm");
document.getElementById("awayv").textContent=a.toFixed(1);
document.getElementById("away").disabled=!f;
if(!f){o.className="out bad";o.textContent="No confident reading. A missing face is never counted as low attention."}
else if(a<2){o.className="out ok";o.textContent="No change. A short glance away is ignored."}
else{o.className="out warn";o.textContent="Possible attention dip, because the student has looked away for several seconds."}}
document.getElementById("face").addEventListener("change",mm);
document.getElementById("away").addEventListener("input",mm);
run();mm();
