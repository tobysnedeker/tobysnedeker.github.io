import './PhotoDisplay.css';
import { useParams, Link } from 'react-router-dom';


const PhotoDisplay = () => {
  const { back, filename } = useParams();

  let backLink;

  if (back == "carousel") {
    backLink = "/"
  } else {
    backLink = "/gallery"
  }

  return (
    <>
      <div id='background' />

      <div id='photo-wrapper'>
        <div className="photo-container justify-content-center">
          <div id="frame">
            <img id="target-photo" src={`/photos/${filename}`} alt="Targeted Photo"/>
          </div>
        </div>
      </div>

      
      <div id="back">
        <Link to={backLink}>
        <img id="back-img" src="/resources/x.png"/>
        </Link>
      </div>

    </>
  );
}

export default PhotoDisplay;