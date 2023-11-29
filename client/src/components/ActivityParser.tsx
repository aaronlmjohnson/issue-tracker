/*
    data ex:
     signedIn:{
        strong:[
            "Aaron Johnson",
            "3:02 pm"
        ]
        body:["# has signed in at #"]
     }


*/

// take the body and split at character #
//['', 'has signed in at, '']
//map through body array 
//if '' then get the index and set its value to that of what is in the strong array
// bodyArr.map((segment, i)=>{
//  if(!segment) return <strong> strong[i] <strong>
//})