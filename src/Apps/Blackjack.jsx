import React, { Component } from 'react';

class Blackjack extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading: false,
            dealerHand: [],
            playerhand: [],
            deck: [
                'AceSpades','2Spades','3Spades','4Spades','5Spades','6Spades','7Spades','8Spades','9Spades','10Spades','JackSpades','QueenSpades','KingSpades',
                'AceClubs','2Clubs','3Clubs','4Clubs','5Clubs','6Clubs','7Clubs','8Clubs','9Clubs','10Clubs','JackClubs','QueenClubs','KingClubs',
                'AceDiamonds','2Diamonds','3Diamonds','4Diamonds','5Diamonds','6Diamonds','7Diamonds','8Diamonds','9Diamonds','10Diamonds','JackDiamonds','QueenDiamonds','KingDiamonds',
                'AceHearts','2Hearts','3Hearts','4Hearts','5Hearts','6Hearts','7Hearts','8Hearts','9Hearts','10Hearts','JackHearts','QueenHearts','KingHearts',
            ],
         }
         
    }
    render() {
        let loadText="" 
        if (this.state.isLoading == true) {
            loadText="Loading"
        }
        return ( 
            <>
                <h2>Blackjack</h2>
                <h3><em>Currently recreating in React, not all functionality implemented</em></h3>
                <p>{loadText}</p>
                <button onClick={()=>this.shuffleDeck()}>New Game (Shuffle Deck)</button>
                <br />
                <button>Hit</button>
                <button>Stay</button>
                <p>Cards remaining in Deck: {this.state.deck.length}</p>
                <h4>Dealer's Hand</h4>
                <p>Hand Value</p>
                <h4>Player's Hand</h4>
                <p>Hand Value</p>
                <button>New Hand</button>
            </>
         );
    }

    shuffleDeck = () => {
        let arr=this.shuffleArr(this.state.deck)
        this.setState({
           deck:arr 
        },()=>{
                console.log(this.state.deck)
            })
            return arr;
    }

    shuffleArr = (a) => {
            var j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
    }
}
 
export default Blackjack;