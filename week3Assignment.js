// map

const map = (arr,callBack)=>{
    return arr.reduce((acc,item)=>{
            acc.push(callBack(item));
            return acc;
    },[])
}


// filter
const filter = (arr,callBack)=>{
    return arr.reduce((acc,item)=>{
      if(callBack(item)){
          acc.push(item);
      }
      return acc;
    },[])

}

console.log(filter([2,3,5],a=>{
    return a%2===1;
}));