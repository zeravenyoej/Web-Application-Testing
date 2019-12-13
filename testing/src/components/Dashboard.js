import React from 'react';
import Display from './Display';


class Dashboard extends React.Component {
    constructor(){
        super()
        this.state={
            balls: 0,
            strikes: 0
        }
    }
    
    handleHit = (e) => {
        // e.preventDefault();
        this.setState({
            balls: 0,
            strikes: 0,
        })
    }
    
    handleBalls = (e) => {
        // e.preventDefault();
        this.setState({
            balls: this.state.balls + 1,
        })
    };
    
    handleStrikes = () =>{
        this.setState({
            strikes: this.state.strikes + 1
        })
    };
    
    handleFoul = ()=>{
        if (this.state.strikes === 0 || this.state.strikes === 1){
            this.setState({
                strikes: this.state.strikes + 1
            })
        } 
    };

    /*- balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls. */
    
    resetWhenMaxedOut = () => {
        if (this.state.balls === 4 || this.state.strikes === 3 ){
            this.setState({
                balls: 0,
                strikes: 0
            })
        }
    };
    
    componentDidUpdate(){
        this.resetWhenMaxedOut();
    }


    render (){
        return (
            <div className='appDiv'>
                <Display
                    balls={this.state.balls}
                    strikes={this.state.strikes}
                />

                <div className='buttonDiv'>
                    <div>
                        <button onClick={this.handleStrikes}>Strike</button>
                        <button onClick={this.handleBalls}>Ball</button>
                    </div>
                    <div>
                        <button onClick={this.handleFoul}>Foul</button>
                        <button onClick={this.handleHit}>Hit</button>
                    </div>
                </div>
            </div>
        )
    }
};

export default Dashboard