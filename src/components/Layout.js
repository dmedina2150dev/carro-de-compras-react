import { Component } from "react";

const styles = {
    layout: {
        backgroudColor: '#FFF',
        color: '#0A283E',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    container: {
        with: '1200px',
    }
}

class Layout extends Component {
    render() {
        return (
            <div style={ styles.layout }>
                <div style={ styles.container }>
                    { this.props.children }
                </div>
            </div>
        )
    }
}

export default Layout;