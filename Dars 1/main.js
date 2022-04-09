// var ar=["Ali","vali","Salim","Karim"];
// var arr2=ar.slice();
// console.log(arr2);
// arr2.splice(0,2);
// console.log(arr2);
// console.log(ar);
////delete
// var deletedEl=ar.splice(1,2);
// console.log(deletedEl);
// console.log(ar);
// console.log(deletedEl[0])


///replace
// ar.splice(1,1,"Bekzod");
// console.log(ar);


//// Array


// ar.splice(-1,0,"Salima","Odina");
// console.log(ar);


//Slice
/// Birinchi berilgan argumentdan ikkinchi berilgan argumentgacha kesib oladi lekin ikkinchi argument kirmaydi;

// var newarr=ar.slice(1,3);
// console.log(newarr);
// function greeating(ism){
    // console.log(ism+" salom !")/////Regular function
// }
// greeating("ali");
// var greeating=function(ism){
    // console.log(ism +" salom !")
// }
// greeating("abbos")
///ARROW FUNCTION
var greeting=(ism,yosh)=>{
    console.log(ism+" salom !"+ yosh+ "yosh dasiz")
}
greeting("Iqboljon",19)