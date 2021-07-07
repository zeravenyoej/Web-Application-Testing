export const handleHit = (e) => {
    // e.preventDefault();
    this.setState({
        balls: 0,
        strikes: 0,
    })
}

export const handleBalls = (e) => {
    // e.preventDefault();
    this.setState({
        balls: this.state.balls + 1,
    })
};

export const handleStrikes = () =>{
    this.setState({
        strikes: this.state.strikes + 1
    })
};


export const handleFoul = ()=>{
    if (this.state.strikes === 0 || this.state.strikes === 1){
        this.setState({
            strikes: this.state.strikes + 1
        })
    } 
};

