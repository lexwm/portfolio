

function MenuItem(props) {
    return (
        <li>
            <a href={props.href} className="nav-link scrollto">
                <i className={props.class}></i>
                <span>{props.name}</span>
            </a>
        </li>
    );
}

export default MenuItem;