import PropTypes from 'prop-types';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category, handleDeleteCategory }) => {

    const { images, isLoading } = useFetchGifs(category);

    const handleDelete = id => {
        handleDeleteCategory(id);
    }

    return (
        <>
            {
                isLoading && <h2>Cargando...</h2>
            }
            {
                !isLoading && (
                    <>
                        <h3>{category}</h3>
                        <button className='danger' onClick={() => { handleDelete(category) }}>Eliminar</button>
                    </>
                )
            }

            <div className='card-grid'>
                {
                    images.map((image) => 
                        <GifItem key={image.id}{...image} />
                    )
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
