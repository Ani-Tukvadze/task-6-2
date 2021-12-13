// ..promise არის ოპერაცია რომელიც გვიჩვენებს წარმატებულ შედეგს ან წარუმატებლობის მიზეზს
let promise = new Promise(function(resolve, rejecte) {
    const x = 5;
    const y = 10;
    if(x < y) {
        resolve("OK")
    } else {
        rejecte("ERROR")
    }
});

console.log(promise);



