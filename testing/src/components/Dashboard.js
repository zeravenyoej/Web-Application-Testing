import React from 'react';
import Display from './Display';

class Dashboard extends React.Component {
    constructor(){
        super()
        this.state={
            balls: 15,
            strikes: 35
        }
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
                        <button>Strike</button>
                        <button>Ball</button>
                    </div>
                    <div>
                        <button>Foul</button>
                        <button>Hit</button>
                    </div>
                </div>
            </div>
        )
    }
};

export default Dashboard