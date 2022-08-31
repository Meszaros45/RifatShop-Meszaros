import  './style.css';

const ItemListContainer =({titulo , titulo2}) =>{
  console.log(titulo)
  return(

    <div className='saludo'>

        <h1>{titulo}</h1>
        <h2>{titulo2}</h2>
    </div>
  );
};

export default ItemListContainer;