import '../styles/style.css'
import BeatLoader from 'react-spinners/BeatLoader'

export default function Spinner() {
    return (
        <div className='spinner-container'>
            <BeatLoader color='#7CCBE8' />
        </div>
    )
}