import React from 'react';
import Display from './Display';

class Dashboard extends React.Component {
    constructor(){
        super()
    }


    render (){
        return (
            <div className='appDiv'>
                <Display/>
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