import { useState } from "react";
import { MyData } from "../data/MyData.js";

export default function Courses() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
              Popular Courses
            </h1>

            <p className="lg:w-2/3 mx-auto leading-relaxed text-base tracking-wide text-shadow-amber-100">
              20% discount on Annual plans | Monthly plans Starts at ₹299
            </p>

            <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
              <button
                onClick={() => setIsAnnual(false)}
                className={`py-1 px-4 focus:outline-none ${
                  !isAnnual
                    ? "bg-indigo-500 text-white"
                    : "text-gray-300"
                }`}
              >
                Monthly
              </button>

              <button
                onClick={() => setIsAnnual(true)}
                className={`py-1 px-4 focus:outline-none ${
                  isAnnual
                    ? "bg-indigo-500 text-white"
                    : "text-gray-300"
                }`}
              >
                Annually
              </button>
            </div>
          </div>

          <div className="flex flex-wrap -m-4">
            {MyData.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                isAnnual={isAnnual}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function CourseCard({ course, isAnnual }) {
  const monthlyPrice = Number(course.price.replace(/[^0-9]/g, ""));

  // annual 20% discount
  const annualPrice = Math.floor(monthlyPrice * 12 * 0.8);

  return (
    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
      <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
        <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
          {course.name}
        </h2>

        <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
          <span>
            ₹{isAnnual ? annualPrice : monthlyPrice}
          </span>

          <span className="text-lg ml-1 font-normal text-gray-400">
            /{isAnnual ? "year" : "month"}
          </span>
        </h1>

        {[course.att1, course.att2, course.att3, course.att4].map(
          (feature, index) => (
            <p
              key={index}
              className="flex items-center text-gray-400 mb-2"
            >
              <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              {feature}
            </p>
          )
        )}

        <button className="flex items-center mt-auto font-bold text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">
          Enroll Now
        </button>

        <p className="text-xs text-gray-400 mt-3">
          {course.offer}
        </p>
      </div>
    </div>
  );
}