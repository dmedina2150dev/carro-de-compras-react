import { Component } from "react";
import BubbleAlert from './BubbleAlert';
import DetallesCarro from './DetallesCarro';

const styles = {
    carro: {
        backgroundColor: '#359A2C',
        color: '#FFF',
        padding: '15px',
        border: 'none',
        borderRadius: '15px',
        cursor: 'pointer'
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20,
    }
}

class Carro extends Component {
    render() {
        const { carro, mostrarCarro, esCarroVisible } = this.props;
        const cantidad = carro.reduce( (acc, el) => acc + el.cantidad, 0)
        return (
            <div>
                <span style={ styles.bubble }>
                    { cantidad !== 0 ? <BubbleAlert  value={ cantidad } /> : null }
                </span>
                <button
                    style={ styles.carro }
                    onClick={ mostrarCarro }
                >
                    Carro
                </button>

                { esCarroVisible ? <DetallesCarro carro={ carro } /> : null }
                
            </div>
        )
    }
}

export default Carro;