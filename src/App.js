import React from 'react';
import {fetchCards} from "./actions/index";
import {connect} from 'react-redux';
import Card from './components/card'
import Loading from './components/loading'
import './App.css'

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentCardIndex: Math.floor(Math.random() * 5),
            titles : {},
            descriptions : {}
        }
    }

    componentDidMount(){
        this.props.fetchCards().then(console.log("this props state is", this.props.state));
        this.setState({
            cards:  this.props.cards
        })
    }



    renderNextCard(event){
        document.getElementById("title").value="";
        document.getElementById("desc").value="";
        this.setState({
            currentCardIndex: Math.floor(Math.random() * 5)
        });

        event.preventDefault();

    }

    updateTitle(event){
        const index = this.state.currentCardIndex;
        const {titles} = this.state;
        const cardNextTitle = event.target.value;
        titles[index] = cardNextTitle;
            this.setState({
            titles: titles
        });
    }

    updateDescription(event) {
        const index = this.state.currentCardIndex;
        const {descriptions} = this.state;
        const cardNextDescription = event.target.value;
        descriptions[index] = cardNextDescription;
        this.setState({
            descriptions: descriptions
        });
    }


    render(){
        const {cards} = this.props;
        const cardIndex = this.state.currentCardIndex;
        let card, title, description;
        if (cards && cards[cardIndex]){
            card = cards[cardIndex];
            title = this.state.titles[cardIndex] ? this.state.titles[cardIndex] : card["title"];
            description = this.state.descriptions[cardIndex] ? this.state.descriptions[cardIndex] : card["description"];
        }

        return(
            cards ?
                <div className="card-form">
                    <Card
                        title={title}
                        description={description}
                        tag={card.tag}
                        code={card.code}
                        image={card.image}
                        sound={card.sound}
                    />
                    <div className="form-container" onSubmit={(event)=>this.renderNextCard(event)}>
                        <form>
                            <fieldset>
                                <input id="title" type="text" placeholder="Title" onChange={(event)=>this.updateTitle(event)}/>
                                <input id="desc" type="text" placeholder="Description" onChange={(event)=>this.updateDescription(event)}/>
                                <input type="submit" value="Try"/>
                            </fieldset>
                        </form>
                    </div>
                </div>

                :<div><Loading/></div>
        )
    }
}

function mapStateToProps(state, ownProps) {

    if (state.reduxState.cards){
        return {cards: state.reduxState.cards}

    }
    return {}
}



export default connect(mapStateToProps, {fetchCards})(App)