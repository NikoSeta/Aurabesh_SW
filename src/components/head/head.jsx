import './head.css'
import NavBar from './navBar/NavBar'

export default function Head() {
    return(
        <nav>
            <div className='title'>
                <img src="star-wars-logo.png" alt='logo star wars' />
            </div>
            <NavBar />
        </nav>
    )
};