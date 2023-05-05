import React from "react";
import { useLoaderData } from "react-router-dom";
import { FcLike } from "react-icons/Fc";
import { RxCookie } from "react-icons/Rx";
import { MdDateRange } from "react-icons/Md";
import ChefDetailsCard from "./ChefDetailsCard";

const ChefDetails = () => {
  const ChefBio = useLoaderData();
  const {
    id,
    chef_picture,
    bio,
    num_recipes,
    likes_num,
    years_of_experience,
    chef_name,
    recipes,
  } = ChefBio;
  return (
    <div className="container mt-5 py-5">
      <h2 className="mt-3">chef Complete Details {recipes.length}</h2>
      <section>
        <div className="d-md-flex gap-4 my-4 align-items-center">
          <div>
            <img className="img-fluid" src={chef_picture} alt="" />
          </div>
          <div>
            <h1 className="fw-bold"> {chef_name}</h1>
            <p className=" text-dark"> {bio}</p>

           
            <div className="d-flex align-items-center py-3 ">
              <FcLike className="fs-4 mx-2"></FcLike>
              <h4> Likes : {likes_num}</h4>
            </div>

            <div className="d-flex align-items-center">
              <RxCookie className="fs-4 mx-2"></RxCookie>
              <h4> num recipes : {num_recipes}</h4>
            </div>

            <div className="d-flex align-items-center py-2">
              <MdDateRange className=" fs-4 mx-2"></MdDateRange>
              <h4 className="fw-bold">
                years of experience : {years_of_experience}
              </h4>
            </div>
            {/*  */}
          </div>
        </div>

        <div>
          <div className="my-10">
            <h1 className="text-center mb-3 mt-5 fw-bold py-10">Recipes</h1>
            <div className="d-md-flex gap-3">
              {recipes.map((cooks) => (
                <ChefDetailsCard
                  cooks={cooks}
                  key={cooks.name}
                ></ChefDetailsCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChefDetails;
