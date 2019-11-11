var questions = [];
var qTeachers = [];
var modeButtons = document.querySelectorAll(".mode");
var questionDivs = document.querySelectorAll(".questionType");
var order=[0,1,2];
var avQuestion = document.getElementById("qavatars");
var nQuestion = document.getElementById("qnames")

init();

function init() {
  setupModeButtons();
  setupQuestions();

}

function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      modeButtons[2].classList.remove("selected");
      questionDivs[0].classList.remove("picked");
      questionDivs[1].classList.remove("picked");
      questionDivs[2].classList.remove("picked");
      
      var bId = this.id;
      const quest = document.getElementById("q"+bId);
      if (bId == "avatars"){buildAvatarQuiz()};
      if (bId == "names"){buildNameQuiz()};
      quest.classList.add("picked");
      this.classList.add("selected");
    });
  }
}

function setupQuestions(){
  while (questions.length < 5){
    let r = Math.floor(Math.random()*teachers.length);
    if(questions.indexOf(r) === -1 && teachers[r].imgpath != "images/default.png"){
      questions.push(r);
      qTeachers.push(teachers[r]);

    }
  }
}

function shuffle(array){
  var currentIndex = array.length, temporaryValue, randomIndex;

  while(0 !== currentIndex){

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -=1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array
};


/* need to replicate for others*/
function buildAvatarQuiz(){
  var avatarQ= [];
  avatarQ.innerHTML = avatarQ.join(" ");
  qTeachers.forEach(
    (currentTeacher, questionNumber)=> {
    var answers=[];
    // creating a new list every time it loops for answers
    var ans = [];
    // just the exact answers we want to display e.g. Miss fawcett or common 2
    ans.push(currentTeacher.imgpath);
    // the first answer is always the right one
    while (ans.length < 3){
      let r = Math.floor(Math.random()*teachers.length);
      if(ans.indexOf(teachers[r].imgpath) === -1 && teachers[r].imgpath != "images/default.png"){
        ans.push(teachers[r].imgpath)
      }
      //gets a random person and adds their avatar to the list if it's not already there and it's not the default
    };
    order = shuffle(order);

    for (index in order){

      if (order[index] == 0){
        answers.push(
        `<button class="quiz correct">
        <img src ="${ans[order[index]]}"alt = "Profile Pic ">
        </button>`);
      }
      else {
        answers.push(
        `<button class="quiz ">
        <img src ="${ans[order[index]]}"alt = "Profile Pic ">
        </button>`);
      }
      
    }
    avatarQ.push(
      `<div class = "question"> Question ${questionNumber+1}: Find ${currentTeacher.pname}'s face! </div>
      <div class = "answers"> ${answers.join(' ')}</div>`
      );

  }
)
avQuestion.innerHTML = avatarQ.join(" ");
}

function buildNameQuiz(){
  var nameQ= [];
  nameQ.innerHTML = nameQ.join(" ");
  qTeachers.forEach(
    (currentTeacher, questionNumber)=> {
    var answers=[];
    // creating a new list every time it loops for answers
    var ans = [];
    // just the exact answers we want to display e.g. Miss fawcett or common 2
    ans.push(currentTeacher.pname);
    // the first answer is always the right one
    while (ans.length < 3){
      let r = Math.floor(Math.random()*teachers.length);
      if(ans.indexOf(teachers[r].pname) === -1 && teachers[r].imgpath != "images/default.png"){
        ans.push(teachers[r].pname)
      }
      //gets a random person and adds their avatar to the list if it's not already there and it's not the default
    };
    order = shuffle(order);

    for (index in order){

      if (order[index] == 0){
        answers.push(
        `<button class="quiz correct">
        <img src ="${ans[order[index]]} ">
        </button>`);
      }
      else {
        answers.push(
        `<button class="quiz ">
        <img src ="${ans[order[index]]}">
        </button>`);
      }
      
    }
    nameQ.push(
      `<div class = "question"> Question ${questionNumber+1}: Who teaches ${currentTeacher.subjects} and looks like <break>
      ${currentTeacher.imgpath} ! </div>
      <div class = "answers"> ${answers.join(' ')}</div>`
      );

  }
)
nQuestion.innerHTML = nameQ.join(" ");
}

