import ProgressItem from "./ProgressItem";
import {Badge} from "react-bootstrap";

function SkillsPage() {
    return (
        <section id="skills" className="skills section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Skills and Knowledge</h2>
                    <p>The percentage of time spent with technology in relation to the total work experience</p>
                </div>

                <div className="row skills-content">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <ProgressItem name="HTML" percent="40"/>
                        <ProgressItem name="CSS / LESS / SASS" percent="40"/>
                        <ProgressItem name="JavaScript / jQuery" percent="50"/>
                        <ProgressItem name="NGINX" percent="40"/>
                        <ProgressItem name="Redis" percent="70"/>
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <ProgressItem name="PHP" percent="95"/>
                        <ProgressItem name="Unit Tests" percent="30"/>
                        <ProgressItem name="MySQL" percent="90"/>
                        <ProgressItem name="PostgreSQL" percent="40"/>
                        <ProgressItem name="Elastic Search" percent="30"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 tags" data-aos="fade-up" data-aos-delay="100">
                        <Badge>Leadership</Badge>&nbsp;
                        <Badge>PHP</Badge>&nbsp;
                        <Badge>Composer</Badge>&nbsp;
                        <Badge>Laravel</Badge>&nbsp;
                        <Badge>Symfony</Badge>&nbsp;
                        <Badge>Yii 1.x</Badge>&nbsp;
                        <Badge>Yii 2.x</Badge>&nbsp;
                        <Badge>REST API</Badge>&nbsp;
                        <Badge>OOP</Badge>&nbsp;
                        <Badge>MVC</Badge>&nbsp;
                        <Badge>DAO</Badge>&nbsp;
                        <Badge>TDD</Badge>&nbsp;
                        <Badge>SOLID</Badge>&nbsp;
                        <Badge>Git</Badge>&nbsp;
                        <Badge>Jira</Badge>&nbsp;
                        <Badge>Confluence</Badge>&nbsp;
                        <Badge>Bitbucket</Badge>&nbsp;
                        <Badge>Docker</Badge>&nbsp;
                        <Badge>node.js</Badge>&nbsp;
                        <Badge>React</Badge>&nbsp;
                        <Badge>VUE</Badge>&nbsp;
                        <Badge>Ajax</Badge>&nbsp;
                    </div>
                </div>

            </div>
        </section>
    );
}

export default SkillsPage;