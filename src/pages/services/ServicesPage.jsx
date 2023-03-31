import ServicesPageItem from "./ServicesPageItem";
import services from "../../helpers/services";

function ServicesPage() {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-title">
                    <h2>Services</h2>
                    <p>With the rapid advancements in technology, businesses need reliable and secure IT services
                        to maintain their digital infrastructure, manage their data, and stay competitive in
                        their respective industries. IT services include hardware and software maintenance,
                        network and server management, cybersecurity, data analytics, and cloud computing,
                        among others. Investing in quality IT services can help businesses of all sizes and
                        industries achieve their goals and stay ahead of the competition in today's digital economy.
                    </p>
                </div>
                <div className="row">
                    {
                        services.map(item => (
                            <ServicesPageItem item={item}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ServicesPage;