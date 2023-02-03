import React from 'react';
import Helper from "./Helper";

class MobileToggle extends React.Component {

    mobileToggle () {
        let helper = new Helper();
        helper.select('body').classList.toggle('mobile-nav-active');

        let navToggle = helper.select('.mobile-nav-toggle');
        navToggle.classList.toggle('bi-list');
        navToggle.classList.toggle('bi-x');
    }

    render() {
        return(
            <i className="bi bi-list mobile-nav-toggle d-xl-none" onClick={this.mobileToggle}></i>
        );
    }
}

export default MobileToggle;