import React from 'react'
import "./proj.css"
function AboutUs() {
  return (
<section className="about-us">
      <h2 className="about-us-heading">About Us</h2>
      <div className="about-us-content">
        <div className="about-us-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ullamcorper risus quis mauris ultrices, nec cursus turpis
            consectetur. Sed varius finibus convallis. Integer ullamcorper
            mi id libero posuere dapibus. Morbi ac dolor vitae ligula
            malesuada tincidunt sed id neque. In hac habitasse platea dictumst.
          </p>
        </div>
        <div className="about-us-images">
          <img src="https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=612x612&w=0&k=20&c=-53aSTGBGoOOqX5aoC3Hs1jhZ527v3Id_xOawHHVPpg=" alt="Image 1" className="about-us-image" />
          <img src="https://media.istockphoto.com/id/1291366083/photo/buddhist-monastery-in-himalayas-mountain-tengboche-nepal.jpg?s=612x612&w=0&k=20&c=yDz4qJnnkFc2no-kiTZOMWdBy5q7C1pq493oJFNtrl4=" alt="Image 2" className="about-us-image" />
        </div>
      </div>
    </section>
  )
}

export default AboutUs