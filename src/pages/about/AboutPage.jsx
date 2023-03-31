import React from "react";
import AboutChevron from "./AboutChevron";
import Bio from "../../helpers/Bio";
import profile from '../../assets/600x600.jpg';

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
                        <p>I began my programming journey during my university years and have remained a dedicated
                            programmer ever since. Over the years, I have constantly evolved and honed my skills by
                            exploring diverse technologies and programming languages. Collaborating with others brings
                            me great joy as I believe that one can always gain knowledge from different perspectives.
                            I am a responsible and goal-oriented individual who prioritizes delivering results in
                            every project I undertake.

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
                                As a colleague, I am friendly and approachable, but when it comes to managing a team,
                                I am firm and focused on achieving our goals. After a long week of work, I enjoy
                                spending time with my team and socializing over a glass of beer. My primary tools for
                                work include Telegram, Jira, PHPStorm, Mail, Calendar, and the command line.
                                These tools are essential to my productivity and help me stay organized and efficient
                                in managing tasks and projects.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default AboutPage;