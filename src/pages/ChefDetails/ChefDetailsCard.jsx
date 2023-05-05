import React, { useState } from "react";
import Rating from "react-rating";
import { FcLike,FcSerialTasks,FcStart } from "react-icons/Fc";
import { toast } from "react-toastify";


const ChefDetailsCard = ({ cooks }) => {
  const { name, img, ingredients, method, rating } = cooks;

  const [active, setActive] = useState(false)

  const HandelLike = () => {
      
      setActive(true)
      toast("Favorite Successfully add");
  
  }

  return (
    <div>
      <div>
        <img className="img-fluid" src={img} alt="" />
      </div>
      <div>
        <h2 className="py-2 fw-bold"> {name}</h2>
      </div>
      <div>
        <div className="md:p-10">
          <div>
            <p className="py-4">ingredient</p>
            {ingredients.map((ingredient, index) => (
              <p className="m-0" key={index}>
                {ingredient}
              </p>
            ))}
          </div>
          <div>
            <p className="py-4 fw-bold">Cooking method</p>
            {method.map((meth, index) => (
              <p className="m-0" key={index}>
                {meth}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="d-flex">
          
          <p className="text-2xl">
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
                <FcLike className="text-5xl"></FcLike>
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
