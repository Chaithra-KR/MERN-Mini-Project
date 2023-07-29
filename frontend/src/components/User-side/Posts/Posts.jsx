import React from 'react';
import './Posts.css'

const Posts = () => {
  return (
        <div className="postParentDiv">
        <div className="moreView">
            <div className="heading">
            <span>Quick Menu</span>
            <span>View more</span>
            </div>
            <div className="cards">
            <div
                className="card"
            >
                <div className="favorite">
                </div>
                <div className="image">
                <img src="https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_640.jpg" alt="flower" />
                </div>
                <p className="name">Flower with butterfly</p>
                <div className="date">
                <span>Tue May 04 2021</span>
                </div>
            </div>
            </div>
        </div>
        </div>
  );
}

export default Posts;
