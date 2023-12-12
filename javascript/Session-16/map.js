const text= 'malayalam';

const map= new Map();

const array= text.split('');

for(let u of array){
    if(map.has(u)){
        const count=map.get(u);
        map.set(u,count+1);
    }else{
        map.set(u,1);
    }
}
console.log(map);

array.forEach((item,index)=>console.log(item))