
const ItemListContainer = (props) => {
    console.log(props);
    return (
        <section className="flex">
            <div className="listContainer"> 
                <h3>Saludos, soy ItemListContainer.. {props.titulo}</h3>
            </div>
        </section>
    )
  }
  
  export default ItemListContainer
