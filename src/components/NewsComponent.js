import React from "react";

const NewsComponent = (props) => {
  let { title, description, imgUrl, newsUrl, author, time, mode } = props;
  return (
    <div>
      <div className={`card my-3 mx-1 bg-${mode === 'light'?'light':'dark'} text-${mode === 'light'?'black':'white'}`}>
        <img
          src={
            imgUrl
              ? imgUrl
              : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className={`btn btn-sm btn-${mode === 'light'?'dark':'info'}`}
          >
            Read More
          </a>
          <p className="card-text">
            <small className="text-body-primary">
              By {!author ? "Unknown" : author} at{" "}
              {new Date(time).toGMTString()}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
