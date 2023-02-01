import ProgressItem from "./ProgressItem";

function SkillsPage() {
    return (
        <section id="skills" className="skills section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Skills</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit
                        sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias
                        ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row skills-content">

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <ProgressItem name="HTML" percent="90"/>
                        <ProgressItem name="CSS" percent="90"/>
                        <ProgressItem name="JavaScript" percent="80"/>
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <ProgressItem name="PHP" percent="95"/>
                        <ProgressItem name="Unit Tests" percent="90"/>
                        <ProgressItem name="Data Base" percent="90"/>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default SkillsPage;