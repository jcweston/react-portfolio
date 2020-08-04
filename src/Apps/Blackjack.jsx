import React, { Component } from 'react';

class Blackjack extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            gameInProgress: true,
            isLoading: false,
            deck: [],
            dealerHand: [],
            dealerValue: 0,
            playerHand: [],
            playerValue: 0,
            playerBust: false
        }
        this.fullDeck = [
                    ['AceSpades',1],['2Spades',2],['3Spades',3],['4Spades',4],['5Spades',5],['6Spades',6],['7Spades',7],['8Spades',8],['9Spades',9],['10Spades',10],['JackSpades',10],['QueenSpades',10],['KingSpades',10],
                    ['AceClubs',1],['2Clubs',2],['3Clubs',3],['4Clubs',4],['5Clubs',5],['6Clubs',6],['7Clubs',7],['8Clubs',8],['9Clubs',9],['10Clubs',10],['JackClubs',10],['QueenClubs',10],['KingClubs',10],
                    ['AceDiamonds',1],['2Diamonds',2],['3Diamonds',3],['4Diamonds',4],['5Diamonds',5],['6Diamonds',6],['7Diamonds',7],['8Diamonds',8],['9Diamonds',9],['10Diamonds',10],['JackDiamonds',10],['QueenDiamonds',10],['KingDiamonds',10],
                    ['AceHearts',1],['2Hearts',2],['3Hearts',3],['4Hearts',4],['5Hearts',5],['6Hearts',6],['7Hearts',7],['8Hearts',8],['9Hearts',9],['10Hearts',10],['JackHearts',10],['QueenHearts',10],['KingHearts',10],
                ]         
    }
    render() {
        let loadText="" 
        if (this.state.isLoading) {
            loadText="Loading"
        }
        let gameVisibility='Invisible'
        if (this.state.gameInProgress) {
            gameVisibility='Visible'
        }
        return ( 
            <>
                <h2>Blackjack</h2>
                <h3><em>Currently recreating in React, not all functionality implemented</em></h3>
                <p>{loadText}</p>
                

                <button onClick={()=>this.shuffleDeck()}>New Game (Shuffle Deck)</button>

                <div className={gameVisibility}>
                    <p>Cards remaining in Deck: {this.state.deck.length}</p>
                    <h4>Dealer's Hand</h4>
                    <p>Hand Value</p>
                    <h4>Player's Hand: 
                        {this.state.playerHand.map((card)=>{
                            return card[0]
                        })}
                    </h4>
                    <p>Hand Value: {this.state.playerValue}</p>
                    <button
                        onClick={()=>this.onHit()}
                        >Hit</button>
                    <button
                        onClick={()=>this.onStay()}
                        >Stay</button>  
                    <button>New Hand</button>

                </div>
            </>
         );
    }

    onHit = () => {
        let arr=this.state.deck
        let hand=this.state.playerHand
        let value=this.state.playerValue
        let card=arr.pop()
        hand.push(card)
        console.log(card)
        value+=card[1]
        let bust = false
        if (value>=22){
            bust = true
        }
        this.setState({
            deck:arr,
            playerHand:hand,
            playerValue:value,
            playerBust:bust
        })
    }

    onStay = () => {

    }

    shuffleDeck = () => {
        let arr=[...this.shuffleArr(this.fullDeck)]
        this.setState({
           deck:arr,
           gameInProgress: true
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