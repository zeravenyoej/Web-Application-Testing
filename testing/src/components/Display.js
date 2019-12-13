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
                    <p>10</p>
                </div>

                <div className='displayBoxes'>
                    <h2>Strikes:</h2>
                    <p>18</p>
                </div>
            </div>
        )
    }
};

export default Display;