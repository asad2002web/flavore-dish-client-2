import React, { useState } from "react";
import Rating from "react-rating";
import { FcLike,FcSerialTasks,FcStart} from "react-icons/Fc";
import { toast } from "react-toastify";


const ChefDetailsCard = ({ cooks }) => {
  const { name, img, ingredients, method, rating } = cooks;

  const [active, setActive] = useState(false)

  const HandelLike = () => {
      
      setActive(true)
      toast("Favorite Successfully add");
  
  }

  return (
    <div className="my-3">
      <div>
        <img className="img-fluid" src={img} alt="" />
      </div>
      <div>
        <h2 className="my-2 fs-4 fw-bold"> {name}</h2>
      </div>
      <div>
        <div>
          <div>
            <p className="py-2 fs-4 text-danger fw-bold">ingredient</p>
            {ingredients.map((ingredient, index) => (
              <p className="m-0" key={index}>
                   *  {ingredient}
              </p>
            ))}
          </div>
          <div>
            <p className=" py-2 fs-4 text-danger fw-bold">Cooking method</p>
            {method.map((meth, index) => (
              <p className="m-0" key={index}>
               <span className="text-danger">#</span>  { meth}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="d-flex">
          <p className="fs-5 mt-2">
            <Rating
              placeholderRating={rating}
              emptySymbol={<FcSerialTasks className="text-orange-300"></FcSerialTasks>}
              placeholderSymbol={<FcStart className="text-orange-300"></FcStart>}
              fullSymbol={<FcStart className="text-orange-300"></FcStart>}
            />
            {rating}
          </p>
        </div>

        <div>
          <button onClick={HandelLike} disabled={active}>
         
            {active ? (
              <button class=" cursor-not-allowed">
                <FcLike className="fs-4"></FcLike>
              </button>
            ) : (
              <>
                <button className="btn btn-danger">ADD TO Favorite</button>{" "}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefDetailsCard;
