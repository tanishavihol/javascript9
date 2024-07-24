let a=1;
    for(let i=0;i<100;i++){
        console.log(a+i);//first the condition will be checked only once,then it will check 2 nd and then third will execute then 2 and third will keep oon repeating
    }
    let obj={
        name:"Harry",
        role:"Programmer",
        company:"Codewithharry AI"
    }
        for(const key in obj){
            console.log(key)// it will print only key of object
        }
        for(const key in obj){
            const element=obj[key];///value of key
            console.log(element)//value print hogi
        }
        for(const key in obj){
            const element =obj[key];
            console.log(key,element)
        }
        for(const c of "hello"){
            console.log(c)
        }
        // let  i=0;
        //     while(i<6){
        //         console.log(i)
        //         i++;//
        //  }
         let i=10;
         do{
            console.log(i)
            i++
         }while(i<6);