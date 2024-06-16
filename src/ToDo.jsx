/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// To export this function you have to use export default 
// export default function ToDo({ Task }) {
//     return (
//         <li>Task : {Task}</li>
//     )
// }

// Conditional rendering option 1
export default function ToDo({ Task, isDone }) {
    if (isDone) {
        return <li>Finished : {Task}</li>
    }
    else {
        return <li>Work on : {Task}</li>
    }
}