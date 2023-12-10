
const Banner = () => {
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://i.ibb.co/VLY8Rpd/Screenshot-2023-12-10-213931.png" className="max-w-sm rounded-lg shadow-2xl"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"/>
          <div className="md:w-6/12">
            <h1 className="text-5xl font-bold text-cyan-600" data-aos="fade-down"  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Welcome to my digital space!</h1>
            <p className="py-6" data-aos="fade-down"  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"><p className="text-bold ">I am Fatematuz Jannat Mahi</p>, a passionate Junior MERN Stack Developer, weaving creativity into functional code. Embark on a journey through my portfolio, where innovation meets implementation. Explore the projects, discover the technologies, and witness the artistry of a developer driven by curiosity and a commitment to excellence. Let's bring ideas to life, one line of code at a time</p>
            <button className="btn bg-cyan-600">Download Resume</button>
       
          </div>
        </div>
       
      </div>
    );
};

export default Banner;