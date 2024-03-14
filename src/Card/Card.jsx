import { CiDollar } from "react-icons/ci";
import { PiBookOpenLight } from "react-icons/pi";


const Card = ({Data,handleCredit}) => {
    const {name,description,photo,price,credit}=Data
    return (

        
        <div className="card  bg-base-100 shadow-xl">

  <figure className="px-10 pt-10">
    <img src={photo} alt={name} className="rounded-xl" />
  </figure>
  <div className="card-body  text-left">
    <h2 className="font-bold">{name}</h2>
    <p>{description.slice(0,60)}</p>
    <div className="flex items-center justify-between pb-2">
        {/* 1 */}
        <div className="flex items-center gap-3">
        <CiDollar />
        <p>Price: {price}</p>
        </div>
        {/* 2 */}
        <div className="flex items-center gap-3">
        <PiBookOpenLight />
        <p>Credit: {credit}</p>
        </div>
    </div>
    <div className="card-actions">
      <button className="btn bg-sky-600 text-white w-full" onClick={()=>handleCredit(Data)}>Buy Now</button>
    </div>
    
  </div>

        </div>


    );
};

export default Card;