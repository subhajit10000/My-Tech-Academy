import { MyMentor } from "../data/MyMentor"; // adjust path if needed

export default function Mentor() {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font w-full min-h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {MyMentor.map((mentor) => (
              <div key={mentor.id} className="lg:w-1/3 md:w-1/2 p-4">
                <div className="h-full text-center bg-gray-800 p-6 rounded-xl">
                  <img
                    alt={mentor.name}
                    className="w-30 h-30 mb-8 object-cover object-center rounded-3xl inline-block border-2 border-gray-700"
                    src={mentor.img}
                  />

                  <p className="leading-relaxed">
                    {mentor.designation}
                  </p>

                  <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>

                  <h2 className="text-white font-medium title-font tracking-wider text-sm">
                    {mentor.name}
                  </h2>

                  <p className="text-gray-500">
                    {mentor.expertise}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}