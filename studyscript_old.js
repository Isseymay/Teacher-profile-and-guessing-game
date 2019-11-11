
//person={"pname":"Mrs. Fawcett","common":"5","subjects":"History and Geography","bio":"Likes: Ancient Egypt and Acient Greece. Hates: The rain","adv":"Make sure you are polite and respectful to your peers and teachers",  "position":null,  "imgpath":"images/fawcett.png"};





var bio, adv, position;
//create space these variables
for (var i = 0; i < teachers.length; i++) {
	//loop through
	var newDiv = document.createElement("div");
	//create a div
	person= teachers[i];
	//focus on one person at a time

	if (person.position == null){position="Teacher";}else {position = person.position};
	if (person.bio == null){bio="None"}else {bio = person.bio};
	if (person.advice == null){advice="None";}else {advice = person.advice};
	//making it so they don't say none
	newDiv.id = "t"+i;
	// giving the div an id
	newDiv.className = "profile step";
	// creating dew div's class list
	if(i == 0){newDiv.className = "profile step active";}
	// start at number one
	newDiv.innerHTML = `<h1>Know CHS</h1>
	        <img id="profile" src=${person.imgpath} width="400" height="400"   >
	        <p id="pname"><strong>Name:</strong> ${person.pname}</p>
	        <p id="common"><strong>Common:</strong> ${person.common}</p>
	        <p id="position"><strong>Position:</strong> ${position}</p>
	        <p id = "subjects"><strong>Subject(s):</strong> ${person.subjects}</p>
	        <p id="bio"><strong >Bio:</strong> ${bio}</p>
	        <p id="advice"><strong >Advice:</strong> ${advice}</p>`
	        //formatting

	phone.appendChild(newDiv);
	//add newDiv to phone
}

function getNext(){
	//starting the function
	const active = document.querySelector("div.active");
	// checking to see if the classlist contains active
	if (active) { active.classList.remove("active");}
	// if it does remove it
	var next
	// making room for the variable next
	if (active && active.nextElementSibling)
		//if it's active and the next one exists
		{next = active.nextElementSibling}
		//then make the next ont the next one ig
	else
		//otherwise
		{next = document.getElementById("phone").firstElementChild;}
		//next = the first child selector of phone
	next.classList.add("active");
	//add active to the classlist

}


/* pretty much the same thing but the other way 
     */


function getPrev(){
	const active = document.querySelector("div.active");
	if (active) { active.classList.remove("active");}
	var prev
	if (active && active.previousElementSibling)
		{prev = active.previousElementSibling}
	else
		{prev = document.getElementById("phone").lastElementChild;}
	prev.classList.add("active");
}
