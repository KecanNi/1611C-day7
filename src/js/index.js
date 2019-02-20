function require(){

    // require(['sum',function(sum){
    //     console.log(sum)
    // }])
    function sum(){
        alert(1)
    }
    var arr=['a','b','c']
    return {
        arr:arr,
        sum:sum
    }
}
var a=require();
function define(){
    console.log(a)
    // console.log(1)
    // var sum=function(){
    //     console.log(1)
    // }
   
    // console.log(sum())

    // return sum
}