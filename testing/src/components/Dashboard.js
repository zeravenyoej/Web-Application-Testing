import React from 'react';
import Display from './Display';

class Dashboard extends React.Component {
    constructor(){
        super()
        this.state={
            balls: 1,
            strikes: 1
        }
    }

    reset = (e) => {
        // e.preventDefault();
        this.setState({
            balls: 0,
            strikes: 0,
        })
    }

    increaseBalls = (e) => {
        // e.preventDefault();
        this.setState({
            balls: this.state.balls + 1,
        })
    };

    increaseStrikes = () =>{
        this.setState({
            strikes: this.state.strikes + 1
        })
    };

    /*- a `foul` increases strikes up to 2. With no strikes, a foul makes it 1 strike. 
    With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, 
    count stays at 2 strikes.*/
    handleFoul = ()=>{
        if (this.state.strikes === 0 || this.state.strikes === 1){
            this.setState({
                strikes: this.state.strikes + 1
            })
        } 
    };



    render (){
        return (
            <div className='appDiv'>
                <Display
                    balls={this.state.balls}
                    strikes={this.state.strikes}
                />

                <div className='buttonDiv'>
                    <div>
                        <button onClick={this.increaseStrikes}>Strike</button>
                        <button onClick={this.increaseBalls}>Ball</button>
                    </div>
                    <div>
                        <button onClick={this.handleFoul}>Foul</button>
                        <button onClick={this.reset}>Hit</button>
                    </div>
                </div>
            </div>
        )
    }
};

export default Dashboard