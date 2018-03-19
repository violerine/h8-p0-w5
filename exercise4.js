function graduates (students) {
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
    console.log(arraySort)

      for(var j=0; j<arraySort.length; j++){
        obj[arraySort[j].class]=[]
        obj[arraySort[j].class].push({name:arraySort[j].name, score:arraySort[j].score})

      }
      console.log(obj)

      

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