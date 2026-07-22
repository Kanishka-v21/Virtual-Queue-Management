import"./Hero.css";
import heroImage from "../assets/hero.png";

function Hero() {
    return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="hero-tag">Your Time Matters</span>

        <h1>
          Skip the Queue.
          <br />
          Save your Time
          <span> Online.</span>
        </h1>

        <p>
          Our Virtual Queue Management System is a smart web application designed to eliminate long physical waiting lines. Instead of standing in queues, users can join a virtual queue from anywhere, monitor their position in real time, receive notifications as their turn approaches, and visit the service location only when needed. This improves convenience for users while helping organizations manage crowds efficiently and reduce waiting time.
          
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Virtual Queue Illustration" />
      </div>
    </section>
  );
}
export default Hero;
