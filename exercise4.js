function graduates (students) {
  var emptyObj={}
  if(students.length<=0){
    return emptyObj
  }
    var obj={}
    var array=[]
    for(var i=0; i<students.length; i++){
       if(students[i].score>75){
           array.push(students[i])
       }
    }

    function compare(a,b) {
        if (a.class < b.class)
          return -1;
        if (a.class > b.class)
          return 1;
        return 0;
      
        array.sort(compare);
        
      }

    var arraySort=array.sort(compare) 
    obj[arraySort[0].class]=[{name:arraySort[0].name, score:arraySort[0].score}] 
      for(i=1;i<arraySort.length;i++){ 
        if(arraySort[i].class!==array[i-1].class){ 
          obj[arraySort[i].class] = [] 
        } 
        obj[arraySort[i].class].push({name:arraySort[i].name, score:arraySort[i].score}) 
      }
return obj

  }



  console.log(graduates([
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
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }


console.log(graduates([])); //{}
