function Queue(){
    let items=[];
    this.enqueue= function(element){
        if(element instanceof Array){
            items=items.concat(element);
            // console.log("111",items)
        }
        else{
            //  items.push(element);
            items=items.concat(element)
             console.log(items)
        }
           
    };
    this.dequeue=function(){
        return items.shift();
    }
    this.front=function(){
        return items[0];
    }
    this.print=function(element){
        if(element instanceof Array){
            console.log(items.toString(),"Array");
        }else{
            console.log(JSON.stringify(items),"notArray")
        }
       
    }
}
let queue=new Queue();
queue.enqueue({'name':'Harry','age':18},{'name':'ljn','age':20}.sex="女")
queue.enqueue({'name':'LiLy','age':30}.sex="女")
queue.print()