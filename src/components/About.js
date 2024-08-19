import React from 'react'
import aboutImg from "../images/about.jpg"
import Title from "./Title"
export default function About() {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />
      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} alt="awesome beach" className="about-photo"/>
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptate.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptate.</p>
          <a href="#" className="btn about-btn">read more</a>
        </article>
      </div>
    </section>
  )
}
