import React, { Component } from 'react';
import BlackjackCard from './BlackjackCard'
import FlexRow from '../FlexRow'

class Blackjack extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            gameInProgress: false,
            isLoading: false,
            deck: [],
            dealerHand: [],
            dealerValue: 0,
            playerHand: [],
            playerValue: 0,
            playerBust: false,
            stay: false,
            win: false,
            lose: false,
            logArr: [],
            blackjack: false,
            playerAces: 0,
            dealerAces: 0
        }
        this.fullDeck = [
                    ['Ace_Spades',1],['2_Spades',2],['3_Spades',3],['4_Spades',4],['5_Spades',5],['6_Spades',6],['7_Spades',7],['8_Spades',8],['9_Spades',9],['10_Spades',10],['Jack_Spades',10],['Queen_Spades',10],['King_Spades',10],
                    ['Ace_Clubs',1],['2_Clubs',2],['3_Clubs',3],['4_Clubs',4],['5_Clubs',5],['6_Clubs',6],['7_Clubs',7],['8_Clubs',8],['9_Clubs',9],['10_Clubs',10],['Jack_Clubs',10],['Queen_Clubs',10],['King_Clubs',10],
                    ['Ace_Diamonds',1],['2_Diamonds',2],['3_Diamonds',3],['4_Diamonds',4],['5_Diamonds',5],['6_Diamonds',6],['7_Diamonds',7],['8_Diamonds',8],['9_Diamonds',9],['10_Diamonds',10],['Jack_Diamonds',10],['Queen_Diamonds',10],['King_Diamonds',10],
                    ['Ace_Hearts',1],['2_Hearts',2],['3_Hearts',3],['4_Hearts',4],['5_Hearts',5],['6_Hearts',6],['7_Hearts',7],['8_Hearts',8],['9_Hearts',9],['10_Hearts',10],['Jack_Hearts',10],['Queen_Hearts',10],['King_Hearts',10],
                ]         
    }
    render() {
        let resultText="" 
        if (this.state.win) {
            resultText="Win!"
        } else if (this.state.lose) {
            resultText="Lose!"
        }
        let gameVisibility='Invisible'
        if (this.state.gameInProgress) {
            gameVisibility='Visible'
        }
        return ( 
            <div className='blackjackApp'>
                <div className='blackjackControls'>
                    <h2>Blackjack</h2>
                    <button onClick={()=>this.shuffleDeck()}>New Game (Shuffle Deck)</button>
                    <div className={gameVisibility}>
                        <p>Cards remaining in Deck: {this.state.deck.length}</p>
                        <h4>Dealer's Hand:
                            {this.state.dealerHand.map((card)=>{
                                return " " + card[0]
                            })}
                        </h4>
                        <p>Hand Value: {this.state.dealerValue}
                        </p>
                        <h4>Player's Hand:</h4> 
                        <div className='FlexRow'>
                            {this.state.playerHand.map((card,i)=>{
                                return (
                                    <BlackjackCard key={i} value={card[1]} name={card[0]}/>
                                )
                            })}
                        
                        </div>
                            
                        <p>Hand Value: {this.state.playerValue}</p>
                        {this.hitButton()}
                        {this.stayButton()}
                        <button
                            onClick = {()=>this.newHand()}
                            >New Hand</button>
                    </div>
                </div>
                <div className='blackjackLog'>
                    <h3>{resultText}</h3>
                    <div className="log">
                        {this.state.logArr.map((element, i)=>{
                            return (<p key={i}>{element}</p>)
                        })}
                    </div>
                </div>

                </div>
            
         );
    }

    stayButton = () => {
        if (this.state.playerBust||this.state.stay||this.state.blackjack) {
            return
        } else {
            return (
                <button
                    onClick={()=>this.onStay()}
                >Stay</button>  
            )
        }
    }

    hitButton = () => {
        if (this.state.playerBust||this.state.stay||this.state.blackjack) {
            return
        } else {
            return (
                <button
                    onClick={()=>this.onHit()}
                >Hit</button>  
            )
        }
    }

    onHit = () => {
        let arr=this.state.deck
        let hand=this.state.playerHand
        let value=this.state.playerValue
        let card=arr.pop()
        value+=card[1]
        this.playerAceCheck(card)
        hand.push(card)
        let bust = false
        let blackjack = false
        let lose = false
        let win = false
        if (value>21){
            bust = true
            lose = true
        } else if (value===21) {
            win = true
            blackjack = true
        }
        this.setState({
            deck:arr,
            playerHand:hand,
            playerValue:value,
            playerBust:bust,
            lose:lose,
            win:win,
            blackjack:blackjack
        }, ()=>this.checkWin())
    }

    playerAceCheck = (card) => {
        let name=card[0].split('_')[0]
        let count=this.state.playerAces+1
        if (name==='Ace') {
            this.setState({
                playerAces:count
            },console.log(this.state.playerAces))
        }
    }

    newHand = () => {
        this.setState({
            playerHand:[],
            playerValue: 0,
            dealerHand:[],
            dealerValue: 0,
            stay: false,
            playerBust: false,
            lose: false,
            win: false,
            blackjack:false
        })
    }

    checkWin = () => {
        const playerValue=this.state.playerValue
        const dealerValue=this.state.dealerValue
            if (playerValue>21) {
                this.addToLog("Player Bust",'lose')
            } else if (dealerValue>21) {
                this.addToLog("Dealer Bust", 'win')
            } else if (playerValue>dealerValue&&this.state.stay) {
                this.addToLog("Player Wins", 'win')
            } else if (playerValue===21) {
                this.addToLog("Blackjack!",'win')
            } else if (this.state.stay) {
                this.addToLog("Dealer Wins", 'lose')
            }
    }

    addToLog = (text, result) => {
        let win = false
        let lose = false
        let arr = this.state.logArr
        arr.push(text)
        if (result==="win") {
            win=true
        } else if (result==='lose') {
            lose=true
        }
        this.setState({
            logArr:arr,
            win: win,
            lose: lose
        })
    }
   
    
    onStay = (value=0,stop=false) => {
        if(stop===true){
            this.setState({
                dealerValue:value,
                stay:true
            },() => this.checkWin())
            return
        }
        let arr = this.state.deck
        let hand = this.state.dealerHand
        let card = arr.pop()
        let add = card[1]+value
        if (add>=17){
            stop=true
        }
        hand.push(card)
        this.setState({
            deck:arr,
            dealerHand:hand
        },this.onStay(add,stop))
        
    }

    shuffleDeck = () => {
        this.newHand()
        let arr=[...this.shuffleArr(this.fullDeck)]
        this.setState({
           deck:arr,
           gameInProgress: true
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