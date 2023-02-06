import Bio from "../helpers/Bio";
function ResumePage() {
    return (
        <section id="resume" className="resume">
            <div className="container">

                <div className="section-title">
                    <h2>Resume</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit
                        sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias
                        ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row">
                    <div className="col-lg-6 aos-init" data-aos="fade-up">
                        <h3 className="resume-title">Sumary</h3>
                        <div className="resume-item pb-0">
                            <h4>{Bio.name}</h4>
                            <p><em>IT engineer with 15+ years of experience designing and developing web solutions user-centered from initial concept to final, polished deliverable.</em></p>
                            <ul>
                                <li>{Bio.location}</li>
                                <li>{Bio.phone}</li>
                                <li>{Bio.email}</li>
                            </ul>
                        </div>

                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>Bachelor</h4>
                            <h5>2002 - 2006</h5>
                            <p><em>Simferopol Faculty of Kiev National University, Crimea, Ukraine</em></p>
                            <p>The first programming languages: BASIC, C, Assembler. The theme of the graduation dissertation is programmable PIC controllers. Excellently.</p>
                        </div>
                        <div className="resume-item">
                            <h4>PC operator. Collection and processing of information.</h4>
                            <h5>2003 - 2004</h5>
                            <p><em>Spa treatment center Air Force of Ukraine. Sudak, Crimea, Ukraine.</em></p>
                            <p>Part-time student. Laying networks. PC maintenance. Printing orders. Database server support.</p>
                        </div>
                        <div className="resume-item">
                            <h4>Engineer Research and Development Center.</h4>
                            <h5>2004 - 2005</h5>
                            <p><em>“Bugaz”. Sudak, Crimea, Ukraine.</em></p>
                            <p>Part-time student. Research base Bugaz. Maintenance of a network and other communication systems. Products prototype testing</p>
                        </div>
                    </div>
                    <div className="col-lg-6 aos-init" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item">
                            <h4>Php Team Lead</h4>
                            <h5>May 2022 - January 2023</h5>
                            <p><em>Snov.io, Chernihiv, Ukraine</em></p>
                            <p>Email marketing. Find and processing prospects.</p>
                            <ul>
                                <li>Development and implementation of the business solutions.</li>
                                <li>Support and development of existing functionality.</li>
                                <li>Performance optimization.</li>
                                <li>Work with: PHP Laravel, Mysql, RabbitMQ, Redis,
                                    Docker, Microservices, AWS S3 and other technologies.
                                </li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Full stack PHP developer</h4>
                            <h5>March 2016 - March 2022</h5>
                            <p><em>Amadeus IT Group, Kyiv, Ukraine</em></p>
                            <p>Business management platform. Air tickets.</p>
                            <ul>
                                <li>Support and development of existing functionality</li>
                                <li>Implementation of the business solutions</li>
                                <li>Performance optimization.</li>
                                <li>Writing unittests</li>

                                <li>Work with: PHP 5, PHP 7, Symfony, PostgeSQL, Mysql, RabbitMQ, Vault, Redis, Js/jQuery, Html etc…</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Team Lead/CTO</h4>
                            <h5>January 2015 – February 2016</h5>
                            <p><em>BlaBlaTeka, Kyiv, Ukraine</em></p>
                            <p>Online video-chat</p>
                            <ul>
                                <li>Database architect</li>
                                <li>Design and Introduction of the cluster solutions</li>
                                <li>Design and implementation of a wide variety of standard and custom solutions</li>
                                <li>Creating a high performance server solutions</li>
                                <li>Site development (front-end, back-end)</li>
                                <li>Implementation E-commerce solutions (PayPal, WebMoney)</li>

                                <li>Work with: PHP 5, Yii 1.x, Yii 2.0, Redis, Node JS, AMQP, ElasticSearch</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Team Lead/CTO</h4>
                            <h5>September 2012 – January 2015</h5>
                            <p><em>RTB System, Kyiv, Ukraine</em></p>
                            <p>Analog google adsense</p>
                            <ul>
                                <li>Database architect</li>
                                <li>Design and Introduction of the cluster solutions</li>
                                <li>Design and implementation of a wide variety of standard and custom solutions</li>
                                <li>Creating a high performance server solutions</li>
                                <li>Site development (front-end, back-end)</li>
                                <li>Implementation E-commerce solutions (PayPal, WebMoney)</li>

                                <li>Work with: PHP 5, Yii 1.x, MySQL, Redis, ElasticSearch</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Team leader / PHP Developer</h4>
                            <h5>March2010 – September 2012</h5>
                            <p><em>“ITCrimea”. Simpferopol, Crimea, Ukraine</em></p>
                            <p>Support and development of various sites</p>
                            <ul>
                                <li>Development and implementation of the business solutions.</li>
                                <li>Site development (Drupal, Zend, custom develop)</li>
                                <li>Site development (front-end, back-end)</li>
                                <li>Communication with customer</li>
                                <li>Implementation E-commerce solutions (PayPal, WebMoney)</li>
                                <li>Work with: PHP 4, PHP 5, MySQL, Zend Framework</li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>PHP Developer</h4>
                            <h5>July 2008 –  March2010</h5>
                            <p><em>“ITCrimea”. Simpferopol, Crimea, Ukraine</em></p>
                            <p>Support and development of various sites</p>
                            <ul>
                                <li>Site development (Joomla, Drupal, Wordpress, Zend, custom develop)</li>
                                <li>Site development (front-end, back-end)</li>
                                <li>Bug fixing</li>
                                <li>Work with: PHP 4, PHP 5, MySQL, Zend Framework</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ResumePage;