import React from 'react';

class Botao extends React.Component<any>  { 

    render() { 
        const isActive = false;
        const style = {
            backgroundColor: isActive ? 'green' : 'blue' 
        }
        return (
            <button style={ style }>
                {this.props.children}
            </button>
        )
    }
}
export default Botao;