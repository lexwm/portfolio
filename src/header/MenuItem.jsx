import Nav from 'react-bootstrap/Nav';

function MenuItem(props) {
    return (
        <Nav.Item as="li">
            <Nav.Link href={props.href}>
                <i className={props.class}></i>
                {props.name}
            </Nav.Link>
        </Nav.Item>
    );
}

export default MenuItem;