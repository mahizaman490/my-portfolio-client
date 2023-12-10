
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-black text-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://i.ibb.co/VLY8Rpd/Screenshot-2023-12-10-213931.png" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold" >Welcome to my digital space!</h1>
            <p className="py-6"><b>I am Fatematuz Jannat Mahi</b>, a passionate Junior MERN Stack Developer, weaving creativity into functional code. Embark on a journey through my portfolio, where innovation meets implementation. Explore the projects, discover the technologies, and witness the artistry of a developer driven by curiosity and a commitment to excellence. Let's bring ideas to life, one line of code at a time</p>
            <button className="btn btn-primary">Download Resume</button>
       
          </div>
        </div>
       
      </div>
    );
};

export default Banner;