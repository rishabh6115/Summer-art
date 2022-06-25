import "./App.css";
import Capture from "./Assets/Capture.PNG";
import ReactStars from "react-stars";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";

function App() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="md:container md:mx-auto shadow-sm shadow-gray-400 p-6 rounded-lg">
          <h1 className="text-2xl  font-bold">
            Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gogh,
            Matisse, & More Multi-Day Course
          </h1>
          <h3 className=" text-slate-900 font-semibold">Multi-Day Course </h3>
          <div className="flex  my-10">
            <span className=" mr-4 w-7/12 ">
              <p className=" font-medium ">
                In this 5 day class we will explore artists Monet, Matisse Van
                Gogh, among others and then recreate paintings using crayon and
                watercolor. Students will have fun learning about the artists &
                creating their own art inspired by their work.
              </p>
              <div className="my-5 text-blue-500 font-bold">
                Kimberly R Mosler
              </div>
              <div>
                <div className="flex items-center ">
                  <ReactStars count={5} size={24} color2={"#ffd700"} />
                  <span className="ml-2 text-gray-700 font-semibold">
                    467 total reviews for this teacher
                  </span>
                </div>
                <div className="flex items-center">
                  <ReactStars count={5} size={24} color2={"#ffd700"} />
                  <span className="ml-2 text-gray-700 font-semibold">
                    5 reviews for this teacher
                  </span>
                </div>
              </div>
              <div className=" text-slate-900 font-bold my-2">
                Completed by 21 learners
              </div>
              <div className="flex items-center">
                <button className="my-5 bg-indigo-600 text-white px-5 py-2 rounded-2xl">
                  See Class Schedule >
                </button>
                <span className="mx-7 flex items-center">
                  <AiOutlineHeart />
                  <p className="ml-1">Save</p>
                </span>
                <span className="flex items-center">
                  <div>
                    <AiOutlineShareAlt />
                  </div>
                  Share
                </span>
              </div>
            </span>

            <span className="w-5/12 ">
              <img className="rounded-xl" src={Capture} alt="pic" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
