function soma(n1,n2, callback){
    if (n1+n2 > 3) {
        callback(n1+n2)
    } else {
        callback("error")
    }
}

soma(1, 2, function (respota) {
    console.log(respota)
})

soma(1, 3, (resposta)=>{
    console.log(resposta)
})