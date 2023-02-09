import React from 'react';
import PureCounter from "@srexi/purecounterjs";
import FactsBox from "./FactsBox";

const FactsData = [
    {
        delay: 0,
        icon: "bi bi-emoji-smile",
        count: 232,
        title: "Happy Clients",
        text: "consequuntur quae"
    },
    {
        delay: 100,
        icon: "bi bi-journal-richtext",
        count: 521,
        title: "Projects",
        text: "adipisci atque cum quia aut"
    },
    {
        delay: 200,
        icon: "bi bi-headset",
        count: 1453,
        title: "Hours Of Support",
        text: "aut commodi quaerat"
    },
    {
        delay: 300,
        icon: "bi bi-people",
        count: 32,
        title: "Hard Workers",
        text: "rerum asperiores dolor"
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
                        {
                            FactsData.map(item => (
                                <FactsBox item={item} />
                            ))
                        }
                    </div>

                </div>
            </section>
        );
    }
}

export default FactsPage;