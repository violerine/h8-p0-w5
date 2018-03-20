function meleeRangedGrouping (str) {
    if(str.length<=0){
        return []
    }
    var strSplit=str.split(',')
    var array=[]
  
    for(var i=0; i<strSplit.length; i++){
        array.push(strSplit[i].split('-'))
    }

    function compareSecondColumn(a,b) {
        if (a[1] < b[1])
          return 1;
        if (a[1] > b[1])
          return -1;
        return 0;
      
        students.sort(compare);
        
      }
    var arraySort=array.sort(compareSecondColumn)
    var answer=[]
    index=0
    answer[0]=[arraySort[0][0]]
    

    for(var i=1; i<arraySort.length; i++){
        if(arraySort[i][1]!==arraySort[i-1][1]){
            index++
            answer[index]=[]
        }
        answer[index].push(arraySort[i][0])
        
    }
    if(answer.length<2){
        answer.push([])
    }
    return answer
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []