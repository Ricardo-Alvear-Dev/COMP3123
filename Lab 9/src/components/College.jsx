/*

College will be a functional component defined using a prototype constructor

Props: name, city

*/

// Extracting the destructed name and city in the param list
// is the same to have College(props){
//  const name = props.name
// }

function College({ name, city }) {
  // in functional components we do not need to write the name of the new method render() within COllege
  // We can simply return, and this returns from render() automatically
  return (
    <h2>
      {name} : {city}
    </h2>
  );
}

export default College;
