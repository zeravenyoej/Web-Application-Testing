import React from 'react';

class Display extends React.Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div className='displayBigDiv'>
                <div className='displayBoxes'>
                    <h2>Balls: </h2>
                    <p>{this.props.balls}</p>
                </div>

                <div className='displayBoxes'>
                    <h2>Strikes:</h2>
                    <p>{this.props.strikes}</p>
                </div>
            </div>
        )
    }
};

export default Display;