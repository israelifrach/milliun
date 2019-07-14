let t = true
const promise = fetch('q.json').then(res => res.json()).then((data) => {
  main(data);
}).catch(err => { throw err });

let _data = [];
var result = 0;


function main(data) {
  _data = data;
  let numQ = [];

  if(t==true){
    for(i=0 ; i<_data.length ; i++){
    numQ.push(i);
    t=false;
  }
  };
  var idx = Math.floor(Math.random() * numQ.length);
  document.getElementById('q').innerHTML = data[idx].q;
  document.getElementById('ans1').innerHTML = data[idx].a[0].aText;
  document.getElementById('ans2').innerHTML = data[idx].a[1].aText;
  document.getElementById('ans3').innerHTML = data[idx].a[2].aText;
  document.getElementById('ans4').innerHTML = data[idx].a[3].aText;

  for (i = 1; i < 5; i++) {
    document.getElementById('ans' + i).addEventListener('click', check);
  }
  removed = numQ.splice(idx,1);
  console.log(numQ);
}

function check() {
  id = this.id
  var regex = /\d+/g;
  var num = id.match(regex);
  var idx = Number(num[0]) - 1;
  
  if ((_data[0].a[idx].isTrue) == true) {
    result++
    document.getElementById('score').innerHTML = 'your score is ' +result;
  } else {
    alert('worng ans');
  }
  main(_data)

}
