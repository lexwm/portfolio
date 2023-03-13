import React from 'react';
import PureCounter from "@srexi/purecounterjs";
import FactsBox from "./FactsBox";

const FactsData = [
    {
        delay: 0,
        icon: "bi bi-emoji-smile",
        count: 10000,
        title: "Happy Clients",
        text: "per one project",
        plus: true
    },
    {
        delay: 100,
        icon: "bi bi-headset",
        count: 6000,
        title: "Hours Of Communication",
        text: "with customers and business",
        plus: true
    },
    {
        delay: 200,
        icon: "bi bi-people",
        count: 15,
        title: "people in team",
        text: "per one project",
        plus: true
    },
    {
        delay: 300,
        icon: "bi bi-journal-richtext",
        count: 5,
        title: "Completed Projects",
        text: "from idea to full self-sufficiency",
        plus: false
    }
];

class FactsPage extends React.Component {

    componentDidMount() {
        new PureCounter({
            once: false
        });
    }

    render() {
        return (
            <section id="facts" className="facts">
                <div className="container">

                    <div className="section-title">
                        <h2>Facts</h2>
                        <p>Some useful figures and facts from my practice</p>
                    </div>

                    <div className="row no-gutters">
                        {FactsData.map(item => (<FactsBox item={item}/>))}
                    </div>

                </div>
            </section>
        );
    }
}

export default FactsPage;