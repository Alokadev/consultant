import React from "react";

const Analytics = () => {
  return (
    <div id="courses" className="flex w-full bg-[#F3F3EF] py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src="https://i.pinimg.com/564x/45/75/80/4575806a1128bb874d0ce59f0051312c.jpg"
          alt="web development"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-[#CEAB2B] font-bold">Web Development</h1>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Full Stack Web Development
          </h1>
          <p>
            This course is a deep dive into the fundamental technologies and
            frameworks that power the modern web. Starting with the essentials
            of HTML, CSS, and JavaScript, you'll build a solid foundation in
            front-end development. From there, we'll explore back-end
            technologies, including PHP and the Laravel framework, enabling you
            to create robust and scalable server-side applications.
          </p>
          <button className="md:left bg-[#CEAB2B] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-6 py-3">
            Contact Our Team
          </button>
        </div>
      </div>
    </div>

  );
};

export default Analytics;
