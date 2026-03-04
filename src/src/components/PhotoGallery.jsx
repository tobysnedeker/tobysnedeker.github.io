import './PhotoGallery.css'
import { Link, useLocation } from "react-router-dom"
import { images } from "../photoData"

const PhotoGallery = () => {
  const location = useLocation();

  return (
    <div className="d-grid w-100 align-content-start" style={{ gridTemplateColumns: "200px 1fr" }}>
      <div className="menu d-grid">
        <Link to="/" className="back text-decoration-none py-3">Back</Link>
      </div>
      <div className="gallery d-flex flex-wrap">
        {images.map(image => (
          <div className="gallery-item">
            <Link to={`/photo/gallery/${image.src}`} state={{backgroundLocation: location}} className="link">
              <img
                src={`/photos/${image.src}`}
                className="d-block clickable-image"
                alt={image.alt}
                loading="lazy"
                decoding="async"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery;