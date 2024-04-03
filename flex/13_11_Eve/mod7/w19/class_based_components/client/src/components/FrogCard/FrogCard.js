import React from 'react';

class FrogCard extends React.Component {
    componentDidMount() { //useEffect with blank dependency array
        console.log("Component mounted");
      }
    componentWillUnmount() { //useEffect with cleanup function
        console.log("Component unmounted");
        if(this.props.interval){
          this.props.cleanup();
        }
    
      }
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <img src={this.props.imgSrc} width="300px" alt="Frog Alt Text" />
            </div>
        )
    }
}

export default FrogCard;