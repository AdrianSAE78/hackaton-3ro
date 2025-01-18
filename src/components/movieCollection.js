import '../styles/movie_collection.css'

function movieCollection({ src, text }) {
    return (
        <picture className='image-container'>
            <img className='movie-collection' src={src} alt='movie collection' />
            <span className='text-image'>{text}</span>
        </picture>
    )
}

export default movieCollection;