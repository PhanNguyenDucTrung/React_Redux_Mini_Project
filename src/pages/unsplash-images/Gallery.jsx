import { useQuery } from '@tanstack/react-query';
import { useGlobalContext } from './context';
import axios from 'axios';
const url = `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_API_KEY}`;
console.log(process.env.REACT_APP_API_KEY);

const Gallery = () => {
    const { searchTerm } = useGlobalContext();

    const response = useQuery({
        queryKey: ['images', searchTerm],
        queryFn: async () => {
            const result = await axios.get(`${url}&query=${searchTerm}`);
            return result.data;
        },
    });
    console.log(response);

    if (response.isLoading) {
        return (
            <div className='image-container'>
                <h4>Loading...</h4>
                <div className='loading'></div>
            </div>
        );
    }

    if (response.isError) {
        return (
            <div className='image-container'>
                <h4>There was an error...</h4>
            </div>
        );
    }

    const results = response.data.results;
    if (results.length < 1) {
        return (
            <div className='image-container'>
                <h4>No images found.</h4>
            </div>
        );
    }

    return (
        <section className='image-container'>
            {results.map(item => {
                const url = item?.urls?.regular;
                return <img className='img' src={url} alt={item.alt_description} key={item.id} />;
            })}
        </section>
    );
};
export default Gallery;
