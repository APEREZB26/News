import './css/prices.css'
export const Prices = ({id,name,image,price}) =>{
    return(
        <ul className='list'>
            <li>
                <img src={image} width={50}/>
                <p>{name}: ${price}</p>
            </li>
        </ul>
    )
}