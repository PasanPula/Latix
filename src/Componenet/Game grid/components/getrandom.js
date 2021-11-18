

export const randomUnique = (lower,upper,count)=>
{
    var pool=[];
   for(var i=lower;i<=upper;i++)
   {
     pool.push(i);
   }
    var result = [];
    for(var i=1; i<=count;i++)
    {
        const random = Math.floor(Math.random() * (pool.length- i));
        result.push(pool[random]);
        pool[random] = pool[pool.length - i];
    }
    return result;
}

