import Navbar from "./Navbar";
import PhotoCarousel from "./PhotoCarousel";

const HomeView = () => {
  return (
    <>
      <Navbar />
      <PhotoCarousel />
      <div style={{background: 'linear-gradient(to top, #2e2e2e 77%, #4D4B47)'}}>
        <p className="py-5 my-0 w-50 mx-auto" style={{
          background: 'linear-gradient(to top, #2e2e2e 75%, #4D4B47)', 
          color: 'white', 
          fontFamily: 'Google Sans Code',
          fontSize: '18px',
          fontWeight: '400'
        }}>
          Nice to meet you! I'm Toby Snedeker, a student at NC State University with a major in Computer Science and minor in Brewing Science. I'm passionate about many more things,
          including rock climbing, cars, movies, and (especially) photography. I made this space to show off some of my favorite shots while exercising my web skills.
        </p>
      </div>
      <div style={{background: '#2e2e2e'}}>
        <img src="/resources/headshot.jpg" className="d-block pb-5 w-25 mx-auto"/>
      </div>
      
    </>
  );
}

export default HomeView;