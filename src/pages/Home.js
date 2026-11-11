
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">
            FITNESS • TRAINING • WELLNESS
          </p>

          <h1>
            Build a Stronger,
            <br />
            Healthier <span>You</span>
          </h1>

          <p className="hero-description">
            Your personal fitness companion to plan workouts,
            track progress, and achieve your goals.
          </p>

          <div className="hero-buttons">
            <Link to="/auth" className="primary-btn">
              Get Started
            </Link>

            <Link to="/workouts" className="secondary-btn">
              Explore Workouts
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Custom Workouts</h3>
          <p>Create your own training plan.</p>
        </div>

        <div className="feature-card">
          <h3>Track Progress</h3>
          <p>Monitor your fitness journey.</p>
        </div>

        <div className="feature-card">
          <h3>Stay Healthy</h3>
          <p>Build healthy habits every day.</p>
        </div>
      </section>
    </div>
  );
}
