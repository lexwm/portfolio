import React from "react";
import AboutChevron from "./AboutChevron";
import Bio from "../helpers/Bio";
import profile from '../assets/profile-img.jpg';

class AboutPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            day : 21,
            month : 'March',
            year :  1982,
        };
    }

    birthdayFormat() {
        return this.state.day + " " + this.state.month + " " + this.state.year;
    }

    ageCalculator () {
        let today = new Date(),
            dob = new Date(this.state.month + " " + this.state.day + " " + this.state.year),
            diff = today.getTime() - dob.getTime();
        return Math.floor(diff / 31556736000);
    }

    render() {
        return (
            <section id="about" className="about">
                <div className="container">

                    <div className="section-title">
                        <h2>About</h2>
                        <p>My whole life is programming. I started at university and to present day I have always been a programmer.

                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 aos-init aos-animate" data-aos="fade-right">
                            <img src={profile} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content aos-init aos-animate" data-aos="fade-left">
                            <h3>Team Lead &amp; PHP Web Developer.</h3>
                            <p className="fst-italic">
                                I have 15+ years of experience designing and developing web solutions user-centered from initial concept to final, polished deliverable.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <AboutChevron name="Birthday" value={this.birthdayFormat()}/>
                                        <AboutChevron name="Website" value={Bio.website}/>
                                        <AboutChevron name="Phone" value={Bio.phone}/>
                                        <AboutChevron name="City" value={Bio.location}/>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <AboutChevron name="Age" value={this.ageCalculator()}/>
                                        <AboutChevron name="Degree" value="Master"/>
                                        <AboutChevron name="Email" value={Bio.email}/>
                                        <AboutChevron name="Freelance" value="Available"/>
                                    </ul>
                                </div>
                            </div>
                            <p>
                                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt
                                adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                                Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus
                                itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                                culpa magni laudantium dolores.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default AboutPage;