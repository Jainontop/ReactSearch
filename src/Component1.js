import { useState } from 'react';
import Card from './Card';
import axios from 'axios';

const Put = () => {
    const [searchText, setSearchText] = useState(null);
    const [searchResult, setSearchResult] = useState([]);
    const handleInput = (e) => {
        setSearchText(e.target.value);
    }
    const search = () => {
        const effect = axios.get('http://localhost:3010/', { params: { s: searchText } });
        effect.then((s) => {
            setSearchResult(s.data);
        });
        effect.catch((err) => {
            console.log(err);
        });
    }

    return(
        <>
        <div className="input-group mb-3 Width" >
            <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleInput} />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" onClick={search}>Click me</button>
            </div>
        </div>
        <div className='card-parent'>
        {
            searchResult.map((item) => (
                <Card key={item._id} name={item.title} img={item.image} desc={item.desc} href={item.link} />
            ))
        }
        </div>
        </>
    ); 
     
} 
export default Put;