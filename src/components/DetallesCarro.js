import { Component } from "react";


const styles = {
    detallesCarro: {
        backgroundColor: '#FFF',
        position: 'absolute',
        marginTop: '3rem',
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '0.5rem',
        width: '300px',
        right: 50
    },
    ul: {
        margin: 0,
        padding: 0

    },
    producto: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem',
        borderBottom: 'solid 1px #AAA'
    }
}

class DetallesCarro extends Component {
    render() {

        const { carro } = this.props;

        return (
           <div style={ styles.detallesCarro }>
                <ul style={ styles.ul } >
                    { carro.map( p => 
                        <li style={ styles.producto } key={p.name}>
                            <img src={p.img} alt={p.name} width='50' height='32' />
                            { p.name } <span>{ p.cantidad }</span>
                        </li>
                    ) }
                </ul>
           </div>
        )
    }
}

export default DetallesCarro;