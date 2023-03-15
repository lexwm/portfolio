import ServicesPageItem from "./ServicesPageItem";
import services from "../helpers/services";

function ServicesPage() {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-title">
                    <h2>Services</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit
                        sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias
                        ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
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