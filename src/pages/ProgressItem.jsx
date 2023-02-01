import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressItem(props) {
    return (
        <div className="progress">
            <span className="skill">{props.name} <i className="val">{props.percent}%</i></span>
            <ProgressBar now={props.percent} className="progress-bar-wrap" />
        </div>
    );
}

export default ProgressItem;