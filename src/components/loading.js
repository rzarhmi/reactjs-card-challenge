import React from 'react';
import loadingGif from '../loading-gif.gif'
import '../App.css';

export default class Loading extends React.Component{
    render(){
        return(
            <div className="loading-bar">
                <img src={loadingGif}/>
            </div>
        )
    }
}