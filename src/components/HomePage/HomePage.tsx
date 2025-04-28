import React from 'react';
import './HomePage.css';


const Homepage: React.FC = () => {
    return (
        <div className="homepage">
            <nav className="navbar">
                <div className="navbar-logo">MentorConnect</div>
                <ul className="navbar-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Mentors</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>

            <section className="mentor-section">
                {/* Image on the left and text on the right */}
                <div className="mentor-header">
                    <div className="mentor-image">
                        <div className="image-overlay"></div>
                    </div>
                    <div className="mentor-text">
                        <h2 className="mentor-title">Our Mentors are Here to Help You Grow</h2>
                        <p className="mentor-subtitle">
                            Connect with experienced professionals who are passionate about helping you succeed in your career.
                        </p>
                    </div>
                </div>
                {/* Three mentor cards below */}
                <div className="mentor-cards-container">
                    <div className="mentor-card">
                        <img
                            src="https://img.freepik.com/free-photo/view-3d-practicing-lawyer_23-2151023407.jpg?t=st=1744890383~exp=1744893983~hmac=299e7410adac75aecae9a629a2aaf792d91324fef4530266ae73d8c91a7a0e8a&w=740"
                            alt="Mentor"
                            className="mentor-img"
                        />
                        <h3 className="mentor-name">John Doe</h3>
                        <p className="mentor-description">Expert in Software Development with over 10 years of experience in various technologies.</p>
                    </div>
                    <div className="mentor-card">
                        <img
                            src="https://img.freepik.com/free-photo/view-3d-practicing-lawyer_23-2151023405.jpg?t=st=1744890492~exp=1744894092~hmac=194baf124bf85dedce5b2605fa39ee0dc439243b11f7a2aa2d876eaa2d57d0fc&w=740"
                            alt="Mentor"
                            className="mentor-img"
                        />
                        <h3 className="mentor-name">Jane Smith</h3>
                        <p className="mentor-description">Passionate Product Manager, guiding professionals to scale their career in product development.</p>
                    </div>
                    <div className="mentor-card">
                        <img
                            src="https://img.freepik.com/free-photo/3d-illustration-little-boy-military-uniform-sitting-flower-garden_1057-45943.jpg?t=st=1744890576~exp=1744894176~hmac=437c177898b295ede56e993213b37821a9964700c371f6cab06eba9dafbbee55&w=826"
                            alt="Mentor"
                            className="mentor-img"
                        />
                        <h3 className="mentor-name">Michael Lee</h3>
                        <p className="mentor-description">Skilled in AI & Machine Learning, helping mentees breakthrough into the world of AI innovations.</p>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <h2>Ready to take the next step in your career?</h2>
                <p>Get personalized guidance from top professionals to accelerate your growth!</p>
                <button className="cta-button">Join Now</button>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <h2>What Our Mentees Are Saying</h2>
                <div className="testimonials-container">
                    <div className="testimonial-card">
                        <p>"MentorConnect helped me secure my dream job! The personalized mentorship changed my career path." - Sarah L.</p>
                    </div>
                    <div className="testimonial-card">
                        <p>"The mentor I connected with helped me gain clarity and confidence in my skills." - Mark R.</p>
                    </div>
                    <div className="testimonial-card">
                        <p>"Amazing experience! I learned so much about AI and machine learning from my mentor." - Anna K.</p>
                    </div>
                </div>
            </section>


            {/* Contact Form Section */}
            <section className="contact-section">
                <h2>Get in Touch</h2>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </section>

            <footer className="footer">
                <p>&copy; 2025 Mentor Connect. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </footer>
        </div>
    );
};

export default Homepage;
