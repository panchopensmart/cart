

const ButtonDelete = ({deleteProduct, id}) => {
    return ( 
        <button type="button" onClick={() => {deleteProduct(id)}}>
            <img src="./img/icons/cross.svg" alt="" style={{width: '30px', height: '30px'}}/>
        </button>
     );
}
 
export default ButtonDelete;