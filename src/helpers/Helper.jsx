class Helper {
    select (el, all = false) {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)];
        } else {
            return document.querySelector(el);
        }
    }

    on (type, el, listener, all = false) {
        let selectEl = this.select(el, all);
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener));
            } else {
                selectEl.addEventListener(type, listener);
            }
        }
    }

    onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    scrollTo = (el) => {
        let elementPos = this.select(el).offsetTop
        window.scrollTo({
            top: elementPos,
            behavior: 'smooth'
        })
    }

    toggleBackToTop = () => {
        if (window.scrollY > 200) {
            this.select('.back-to-top').classList.add('active')
        } else {
            this.select('.back-to-top').classList.remove('active')
        }
    }
}

export default Helper;