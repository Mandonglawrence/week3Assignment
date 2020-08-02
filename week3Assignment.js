// map

const map = (arr,callBack)=>{
    return arr.reduce((acc,item)=>{
            acc.push(callBack(item));
            return acc;
    },[])
}



console.log(map([2,3,5],a=>{
    return a*10;
}));