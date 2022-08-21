a=[1,2,3,4,5,6,7,8]
function getEven(array){
      var newArray=[];
      var x=0;
    for(let i=0;i<array.length;i++){
        if(array[i]%2==0){
           newArray[x]=array[i];
           x++;
        }
    }
    return newArray;
}
var a=getEven(a)
console.log(a);