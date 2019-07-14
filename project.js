var missionArr = [];
var idx = missionArr.length
var missionInput = document.getElementById('mission-input');
var targetHour = document.getElementById('target-hour');
var targetDate = document.getElementById('target-date');
var submit = document.getElementById('submit');
submit.addEventListener('click', addMissionToArray);

function addMissionToArray(e){
    e.preventDefault();
    var missionObj= {mission: missionInput.value,
                     date: targetDate.value,
                     hour: targetHour.value}
    missionArr.push(missionObj);
    var idx = missionArr.length;
    localStorage.setItem("local"+idx, JSON.stringify(missionObj));
    var temp = localStorage.getItem("local"+idx);
    addMissionToPage(JSON.parse(temp));
}
function addMissionToArrayFromStorage(){
    for(i=0 ; i<100 ; i++){
    var temp = localStorage.getItem("local"+i);
    if (temp!=null){
    missionArr.push(JSON.parse(temp));
    addMissionToPage(JSON.parse(temp));
    }}}
function addMissionToPage(obj){ 
    var newDiv = document.createElement('div');
    var idx = Number(missionArr.length)
    newDiv.setAttribute("id", "note"+idx);
    newDiv.setAttribute("class", "note");
    newDiv.innerHTML +='<button type="button" class="button" class="hide" id="btn'+ idx +'" >X</button>';
    newDiv.innerHTML +='<div id="mission" >'+obj.mission+'<br></div>';
    newDiv.innerHTML +='<div id="timeDate" >'+obj.date+'<br>'+obj.hour+'</div>';
    document.getElementById("notes").appendChild(newDiv);
    var btn = document.createElement('BUTTON')
   var d = document.getElementById("note"+idx);
   var btn = document.getElementById('btn' +idx);
     btn.addEventListener('click', deleteDiv);
    btn.addEventListener('click', deleteArray);
  }

  function deleteDiv(){
    id = this.id
    var regex = /\d+/g;
    var res = id.match(regex); 
    this.parentNode.remove();
    if(res[0]<missionArr.length){
       for(i=1 ; i<missionArr.length ; i++){
           var num = Number(res[0])+i;
        var tempDiv = document.getElementById('note'+num);
        tempDiv.id ='note'+Number(num-1);
        var tempBtn = document.getElementById('btn'+num);
        tempBtn.id ='btn'+Number(num-1);
    }
    }
    }
  function deleteArray(){
    id = this.id
    var regex = /\d+/g;
    var res = id.match(regex);
    removed = missionArr.splice(Number(res[0])-1,1);
    console.log(missionArr);
    deleteLocal();
  }

  function deleteLocal(){ 
    localStorage.clear();
    for(i=0; i<missionArr.length; i++){
      localStorage.setItem("local"+Number(i+1), JSON.stringify(missionArr[i]));
    }}
  

