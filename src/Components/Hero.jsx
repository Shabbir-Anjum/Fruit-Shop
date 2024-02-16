import React from "react";

export default function Hero() {
  return (
    <section className=" bg-WhiteColor flex gap-16 items-center p-9 mt-16 justify-center ">
      <div className="flex flex-col gap-4">
        <div className="title md:bg-red-600">Welcome to our Fruit Shop</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          cumque officia voluptatum amet quia magnam minus atque sint. In
          nesciunt exercitationem soluta ad eius molestiae consequatur alias ut
          aspernatur vitae?
        </div>
        <div>
          <button className="btn bg-OrangeColor mr-8"><a href="#fruit">Shop Now</a></button>
          <button className="btn bg-black"><a href="#contact">Contact Us</a></button>
        </div>
      </div>
      <div>
        <img src="../Images/slide-img.png" alt="error" />
      </div>
    </section>
  );
}
