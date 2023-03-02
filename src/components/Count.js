import { useSelector } from 'react-redux';

function Count() {
    const counter = useSelector((state) => state.counter.value);
    let text = ' turns';
    if (counter === 10) {
        text = ' turn';
    }
    
    return (
        <div className="count">
            <span>{(11 - counter) + text + ' remaining'}</span>

        </div>
    );
}

export default Count;