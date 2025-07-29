import { useSelector } from 'react-redux';
import './Nav2.css';

export default function Nav() {
    const user = useSelector((store) => store.user);

    return (
        <div className="Nav2">
            <div className='NavTitle'>
                <h3>Name Here</h3>
            </div>
        </div>
    )
}

