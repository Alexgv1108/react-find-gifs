export const GifItem = ({id, title, url}) => {
    return (
        <>
            <div className='card'>
                <img className='card' src={url} alt={ title } />
                <p>{ title }</p>
            </div>
        </>
    )
}
