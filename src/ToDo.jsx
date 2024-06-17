/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// To export this function you have to use export default 
// export default function ToDo({ Task }) {
//     return (
//         <li>Task : {Task}</li>
//     )
// }

// Conditional rendering option 1
// export default function ToDo({ Task, isDone }) {
//     if (isDone) {
//         return <li>Finished : {Task}</li>
//     }
//     else {
//         return <li>Work on : {Task}</li>
//     }
// }

// Conditional rendering option 2. using ternary operator


// export default function ToDo({ Task, isDone }) {
//     return(
//         <li>{isDone?'Finished':'Work on'} : {Task}</li>
//     );
// }


// Conditional rendering option 3. using '&&' operator
// export default function ToDo({ Task,isDone }) {
//         return (
//  if isDone is true then it print ': Done' .  Basically here 'and' operator check true
//             <li>{Task} {isDone && ': Done'}</li>
//         )
//     }



// export default function ToDo({ Task,isDone }) {
//         return (
//  if isDone is false then it print ': Do it.' . Basically here 'or' operator check false 
//             <li>{Task} {isDone || ': Do it.'}</li>
//         )
//     }


// Conditional rendering option 4 . 
export default function ToDo({ Task, isDone }) {

    let listItem;
    if (isDone) {
        listItem = <li>Finished : {Task}</li>
    }
    else {
        listItem = <li>Work on : {Task}</li>
    }
    return listItem;
}






