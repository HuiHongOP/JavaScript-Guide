/*
    A function named "localFunction" with no parameter.
    localAccess is an mulit-dimension array with it is item and price. Only allow access
    within the function. We can get the "Notebook" price by indexing the array of localAcess[0][1]
*/
function localFunction(){

    var localAccess = [["Notebook",.99],["a pack of pens",3.59],["Mirror",9.99]]
    console.log(localAccess);//print the array
}

localFunction(); // Calls the function and prints out the array
/* prints out the following below:
[
  [ 'Notebook', 0.99 ],
  [ 'a pack of pens', 3.59 ],
  [ 'Mirror', 9.99 ]
]

*/


//The below line will give us an access error due to the variable "localAccess" can't be accessed;
// console.log(localAccess);
