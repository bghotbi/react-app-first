export const Product = ({name, status, capacity, elevation}) => 
{
  return(
   <div>
    <h1>{name}</h1>
    <p>Status:{status},   Capacity:{capacity}, Elevation:{elevation}</p>
   </div>
  );
}