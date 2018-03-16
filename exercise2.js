
function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var input=[['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]
    var arrayBaru=[]

    var array=[]
    for(var i=0; i<arrPenumpang.length; i++){
       array.push({penumpang:arrPenumpang[i][0],naikDari:arrPenumpang[i][1],tujuan:arrPenumpang[i][2],bayar:0})
    }

    for(var j=0; j<arrPenumpang.length; j++){
      var mulai= rute.indexOf(input[j][1])
      var tujuan=rute.indexOf(input[j][2])
      var totalJarak=tujuan-mulai
      console.log(totalJarak)
      for(var k=0; k<array.length; k++){
        console.log("tessss"+array[k])
        array[k].bayar+=(2000*totalJarak)
      }
   
    
      
    }

    return array
  }

console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]