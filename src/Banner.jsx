
const Banner = () => {
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
   <div className="rounded-full">


   <img  src="https://i.ibb.co/VLY8Rpd/Screenshot-2023-12-10-213931.png" className=" max-w-sm rounded-full shadow-2xl"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"/>
   </div>
          <div className="md:w-6/12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-600 to-blue-700 text-transparent bg-clip-text" 
    data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
  Welcome to my digital space!
</h1>

            <p className="py-6 font-semibold text-slate-500 " data-aos="fade-down"  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"><p className="font-bold text-xl">I am Fatematuz Jannat Mahi</p> a passionate <span className="font-bold text-cyan-500">Junior MERN Stack Developer</span>, weaving creativity into functional code. Embark on a journey through my portfolio, where innovation meets implementation. Explore the projects, discover the technologies, and witness the artistry of a developer driven by curiosity and a commitment to excellence. Let's bring ideas to life, one line of code at a time</p>
            {/* <button className="btn bg-cyan-600">Download Resume</button> */}
            <a href="https://drive.google.com/uc?export=download&id=1Ru4hhN5RZ5Rp2iJYk920B2vGfC9w_1K3" download="YourResumeFileName.pdf">
  <button className="btn bg-cyan-600">Download Resume</button>
</a>




       
          </div>
        </div>
       
      </div>
    );
};

export default Banner;