import React from 'react'
import {useEffect, useState} from 'react';
import {GifGridItem} from './GifGridItem'


export const GrifGrid = ({category}) => {
    
    const [images, setImages] = useState([])

    useEffect( () => {
        getGifs();
    }, [])

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Naruto&limit=10&api_key=V0A6OAyez0wYN1iu4y6XbFe9Zqk1e12l'
        const resp = await fetch (url);
        const {data} = await resp.json();
        const gifs = data.map(img =>{
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        setImages(gifs);
        console.log(gifs)
    
    }

    return(
        <>
            <h3>{category}</h3>
                {
                    images.map(img =>
                        (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    )
                         
                    )
                }
        </>
    )
}