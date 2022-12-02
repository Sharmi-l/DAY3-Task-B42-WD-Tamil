//  JSON Iterates for (for loop):

let grocery = [

       {
        "shopname" : "nature footie",
        "productname" : "samba rice",
         "price" : "80 rs",
            "quantity" : "1 kg"
    
       },

       {
         "product1name": "Ragi flour",
         "ProductType" : "readymix",
         "variety" : "ragi laddu",
       }
    ]

for(let i=0; i< grocery.length; i++){
    console.log(grocery);
    console.log(grocery[0].shopname);
    console.log(grocery[1].variety);
    // console.log(grocery.product1name)
}

/*OUTPUT:
     0: {shopname: 'nature footie', productname: 'samba rice', price: '80 rs', quantity: '1 kg'}1: {product1name: 'Ragi flour', ProductType: 'readymix', variety: 'ragi laddu'}length: 2[[Prototype]]: Array(0)
     nature footie
     ragi laddu
*/
/*.............................................................................................................................*/

//JSON Iterates for in loop :

let makeupitems = {

    "skindoner" : "10",
    "jewellery"  : "diamond",
    "dress" :  "western"
}

for (let key in makeupitems){
   
    console.log(makeupitems);
    console.log(makeupitems.dress);
    console.log(makeupitems.jewellery)
}

/*  OUTPUT:
         {skindoner: '10', jewellery: 'diamond', dress: 'western'}
         western
         diamond                                                                                                                                    */

/*......................................................................................................................................*/

//JSON Iterates for of loop :

let rto = [

    {
     "State1" : "Tamilnadu",
     "rtoLocation1" : "Chennai",
     "rtoCode1"  : "TN-01"
    },

    {
    "State2" : "Karnataka",
    "rtoLocation2" : "Bangalore",
    "rtoCode2"  : "KA-02"
    }
 ]

 for(let index of rto){
    console.log(rto);
    console.log(rto[1].State2 +" , " + rto[1].rtoCode2);
    console.log(rto[0].rtoLocation1 +" , " + rto[0].rtoCode1 + " , " + rto[0].State1);
    
    // OUTPUT:
    //       0: {State1: 'Tamilnadu', rtoLocation1: 'Chennai', rtoCode1: 'TN-01'}
    //       1: {State2: 'Karnataka', rtoLocation2: 'Bangalore', rtoCode2: 'KA-02'} length: 2[[Prototype]] :  Array(0)
   
    //       Karnataka , KA-02
    //       Chennai , TN-01 , Tamilnadu
     


    // console.log(index.State2 +" , " + index.rtoCode2);
    // console.log(index.rtoLocation1 +" , " + index.rtoCode1 + " , " + index.State1);
    // OUTPUT:
    //     0: {State1: 'Tamilnadu', rtoLocation1: 'Chennai', rtoCode1: 'TN-01'}1: {State2: 'Karnataka', rtoLocation2: 'Bangalore', rtoCode2: 'KA-02'}length: 2[[Prototype]]: Array(0)
    //     undefined , undefined
    //     Chennai , TN-01 , Tamilnadu
    //     Karnataka , KA-02
    //     undefined , undefined , undefined
}   



//  Using Array:
let electrical  = ['light','switch', 'fan','wire']

for(let index of electrical){
    console.log(electrical);
    console.log(electrical[2]);
}

//  OUTPUT:
//       ['light', 'switch', 'fan', 'wire']
/*.............................................................................................................................*/

// JSON Iterates for each loop :

let foodItems = [

    {
     "foodName1" : "apples",
     "foodType1" : "healthyFood",
      "nutrition1" : "vitamin C",
    },

    {
      "foodname2": "hamburger",
      "foodType2" : "junkFood",
      "nutrition2" : "calories",
    }
 ]

//  Method1: elements:
 
 foodItems.forEach((element) => {
    console.log(element)
 });

//  OUTPUT:  
//       {foodName1: 'apples', foodType1: 'healthyFood', nutrition1: 'vitamin C'}
//       {foodname2: 'hamburger', foodType2: 'junkFood', nutrition2: 'calories'}

//  Method2: elements with index:
 
 foodItems.forEach((element1,index) => {
    console.log(index,element1)
 });

/*  OUTPUT:
          0 {foodName1: 'apples', foodType1: 'healthyFood', nutrition1: 'vitamin C'}
          1 {foodname2: 'hamburger', foodType2: 'junkFood', nutrition2: 'calories'}      */
/*......................................................................................................................................*/

//  Using Array:

let arr = [2,4,6,8,10];

arr.forEach((element) => console.log(element/2))

/* OUTPUT:
1
2
3
4
5
*/
