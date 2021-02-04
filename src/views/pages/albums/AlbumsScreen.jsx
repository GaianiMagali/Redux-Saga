import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { albumsActions } from '../../../core/albums/actions';
import { AlbumCard } from '../../components/albums/AlbumCard';




export const AlbumsScreen = () => {

    const { albums } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(albumsActions.getAlbums())
    }, []);


    console.log(albums.toJS());


    return (

        <div className="container">
            <div className="row ">
                {
                    albums && albums.albums.map(album =>
                        <AlbumCard
                            key={album.id}
                            album={album}
                        />

                    )
                }
            </div>
        </div>


    )
}
