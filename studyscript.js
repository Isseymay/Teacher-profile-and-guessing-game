var teachers;
//person={"pname":"Mrs. Fawcett","common":"5","subjects":"History and Geography","bio":"Likes: Ancient Egypt and Acient Greece. Hates: The rain","adv":"Make sure you are polite and respectful to your peers and teachers",  "position":null,  "imgpath":"/images/fawcett.png"};



var person = teachers[0];

var phone = document.getElementById("phone");

for(var i=0; i < teachers.length; i++){

    var newDiv = document.createElement('div');
    person = teachers[i]
    var bio, adv, position;
    if (person.bio == null) {bio = "None"} else {bio = person.bio};
    if (person.adv == null) {adv = "None"} else {adv = person.adv};
    if (person.position == null) {position = "Teacher"} else {position = person.position};
    newDiv.id = 't'+i;
    newDiv.className = 'profile step';
    if (i == 0) {newDiv.className = 'profile step active';}
    newDiv.innerHTML = `<h1>Know CHS</h1>
        <img id="profile" src="${person.imgpath}" width="400" height="400"   >

        <p class="pname"><strong>Name:</strong> ${person.pname}</p>
        <p class="common"><strong>Common:</strong> ${person.common}</p>
        <p class="position"><strong>Position:</strong> ${position}</p>
        <p class = "subjects"><strong>Subject(s):</strong> ${person.subjects}</p>
        <p class="bio"><strong >Bio:</strong> ${bio}</p>
        <p class="advice"><strong >Advice:</strong> ${adv}</p>`;
    phone.appendChild(newDiv);
}
function getNext() {
    const active = document.querySelector('div.active'); 
    if (active) { active.classList.remove('active'); }
    var next 
    if (active && active.nextElementSibling) 
        {next = active.nextElementSibling}
    else 
        {next = document.getElementById("phone").firstElementChild;}
    next.classList.add('active');
}

function getPrev() {
    const active = document.querySelector('div.active'); 
    if (active) { active.classList.remove('active'); }
    var prev 
    if (active && active.previousElementSibling) 
        {prev = active.previousElementSibling} 
    else
        {prev = document.getElementById("phone").lastElementChild;}
    prev.classList.add('active');
}



