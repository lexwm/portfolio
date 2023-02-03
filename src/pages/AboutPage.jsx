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
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit
                            sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias
                            ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 aos-init aos-animate" data-aos="fade-right">
                            <img src={profile} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content aos-init aos-animate" data-aos="fade-left">
                            <h3>UI/UX Designer &amp; Web Developer.</h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore
                                magna aliqua.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <AboutChevron name="Birthday" value={this.birthdayFormat()}/>
                                        <AboutChevron name="Website" value="www.example.com"/>
                                        <AboutChevron name="Phone" value="+123 456 7890"/>
                                        <AboutChevron name="City" value="Kyiv, Ukraine"/>
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