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
      
    //   obj[arraySort[0].class]=[{name:arraySort[0].name, score:arraySort[0].score}]
      for(var j=1; j<arraySort.length; j++){
          if(arraySort[j].class!==arraySort[j-1].class){
            obj[arraySort[j-1].class]=[]
            obj[arraySort[j-1].class].push({name:arraySort[j-1].name, score:arraySort[j-1].score})
            
          }
          if(arraySort[j].class==arraySort[j-1].class){
              obj[arraySort]
          }
          
        
       console.log(obj)
      }
   

      

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