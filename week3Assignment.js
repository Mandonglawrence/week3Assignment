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


// every
const every = (arr,callBack)=>{
        return arr.reduce((acc,item)=>{
            if(!callBack(item)){
                acc = false;
            }
            return acc;
        },true);
    }
console.log(every([6,7,0],a=>{
    return a%2===0;
}));