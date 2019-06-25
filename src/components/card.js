import React from 'react';
import '../App.css';
import funGif from '../fun-gif.gif'
import sportsGif from '../sports-gif.gif'
import '../sports-gif.gif'

export default class Card extends React.Component{
    constructor(props){
        super(props);
    }

    showCard(){
        const {tag, code, image, sound} = this.props;
        switch (code){
            case 0:{
                return(
                    <div className="card">
                        <img src={image}/>
                    </div>
                )
            }
            case 1:{
                let animationSource;
                animationSource = (tag === "fun") ? funGif : sportsGif;
                return(
                    <div className="card">
                        <img src={animationSource}/>
                    </div>
                )
            }
            case 2:{
                return(
                    <div className="card">
                        <audio controls> <source src={sound} type='audio/mpeg'/></audio>
                    </div>
                )
            }
        }

        }


    render(){
        const {title, description} = this.props;
        return(
            <div className="card-container">
                {this.showCard()}
                <div className="title">{title}</div>
                <div className="description">{description}</div>
            </div>
        )
    }
}