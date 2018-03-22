
// . // - Mencocokan karakter apapun, kecuali line breaks(jeda baris/enter).
// * // - Mencocokan 0 atau lebih dari karakter terdahulu.
// + // - Mencocokan 1 atau lebih dari karakter terdahulu.
// ? // - Karakter terdahulu menjadi opsional. Mencocokan 0 atau 1.
// \d // - Mencocokan digit apapun
// \w // - Mencocokan karakter pada sebuah kata (alphanumeric dan underscore/garis bawah).
// $ // - Mencocokan ujung dari sebuah string.
// ^ // - Mencocokan awal dari sebuah string.
// [^a-z] // - Ketika didalam sebuah class karakter, tanda ^ artinya NOT; dalam kasus ini, regex akan mencocokan apapun yang bukan karakter lowercase.
// var paragraph ="far live there far"

// console.log(paragraph.match(/far/g));

// var message = 'regex itu mudah!';
// console.log(/[A-Z]/.test(message));

// var str = 'belajar regex itu menyenangkan';
// console.log(str.split(/\s/));

// var regexPattern = new RegExp('[A-Z]');

// var message = 'Regex itu Mudah!';
// console.log(regexPattern.test(message));

// var stringAwal = 'Regex itu sangat susah!';
// stringHasil = stringAwal.replace(/susah/, 'mudah');
// console.log(stringHasil); // mengembalikan nilai "Regex itu sangat mudah!"

// var message = 'Regex seru DEH!';
// console.log(message.match(/e/));
// console.log(message.match(/e/g));
// console.log(message.match(/e/gi));

var string = 'Walaupun regex banyak mengandung simbol, tapi tidak serumit seperti !@#%^%#$*( , ^%&*!!^& dan !#*#$&*@%#';
console.log(string.match(/[a-z]+/gi));

// if (newArray) {
// 	console.log('newArray bukan null!');
// } else {
// 	console.log('Tidak ada newArray, ini null!');
// }