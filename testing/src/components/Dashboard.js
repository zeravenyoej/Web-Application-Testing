import React from 'react';

class Dashboard extends React.Component {
    constructor(){
        super()
    }
    render (){
        return (
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
        )
    }
};

export default Dashboard