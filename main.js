function loadjson(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status=="200"){
			callback(xhr.responseText);
		}
	};
	xhr.send();
}
loadjson("data.json",function(text){
	let data=JSON.parse(text);
	console.log(data);
	career(data.career);
	education(data.education);
	skills(data.skills);
})
var childTwo=document.querySelector(".child2");
function career(careerInfo){
	var heading=document.createElement("h2");
	heading.textContent="object";
	childTwo.appendChild(heading);
	var hr=document.createElement("hr");
	childTwo.appendChild(hr);
var careerP=document.createElement("p");
careerP.textContent=careerInfo.info;
childTwo.appendChild(careerP);
}

function education(edu){
	var heading=document.createElement("h2");
	heading.textContent="education";
	childTwo.appendChild(heading);
	var hr=document.createElement("hr");
	childTwo.appendChild(hr);
	var table=document.createElement("table");

	table.border="1";
	var tr1="<tr><td>dreege</td><td>institute</td><td>data</td></tr>";
	
	var tr2="";
	for(var i=0;i<edu.length;i++){
		tr2+="<tr><td>"+edu[i].dreege+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].data+"</td></tr>";
	}
		childTwo.appendChild(table);
	table.innerHTML=tr1+tr2;
}
function skills(skil){
    var heading=document.createElement("h2");
	heading.textContent="skill set";
	childTwo.appendChild(heading);
    var hr=document.createElement("hr");
	childTwo.appendChild(hr);
    for(var i=0;i<skil.length;i++){
	var titleH=document.createElement("h3");
	titleH.textContent=skil[i].title;
	childTwo.appendChild(titleH);
	var ul=document.createElement("ul");
	childTwo.appendChild(ul);
	for(var j=0;j<skil[i].info.length;j++){
		var li=document.createElement("i");
		li.textContent=skil[i].info[j];
		ul.appendChild(li);
	}
}

}
