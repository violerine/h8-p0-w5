function highestScore (students) {
  var objKosong={}
  if(students.length<=0){
    return objKosong
  }

  var obj={}
  index=0
  var array=[]
  
  function compare(a,b) {
  if (a.class < b.class)
    return -1;
  if (a.class > b.class)
    return 1;
  return 0;
}
var studentSort=students.sort(compare)
// console.log(studentSort)
array[0]= [studentSort[0]]

for(var i=1; i<studentSort.length; i++){
  if(studentSort[i-1].class!==studentSort[i].class){
    index++
    array[index]=[]
  }
 array[index].push(studentSort[i])
}

for(var i=0; i<array.length; i++){
  array[i].sort(function(a,b){ 
    return b.score -a.score 
  })
}

for(var j=0; j<array.length; j++){
  obj[array[j][0].class]= {name: array[j][0].name, scores:array[j][0].score }
 
}

return obj

}


console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}



