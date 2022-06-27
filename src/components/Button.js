import { Component } from "react";

const styles = {
    button: {
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#0A283E',
        color: '#FFF',
        padding: '15px 20px',
        cursor: 'pointer',
    }
}
class Button extends Component {
    render() {
        return (
            <button style={ styles.button } { ...this.props } />
        )
    }
}

export default Button;