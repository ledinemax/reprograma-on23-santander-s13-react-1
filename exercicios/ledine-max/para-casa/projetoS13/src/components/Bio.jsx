import Title from './Title'
import Text from './Text'
import Image from './Image'

import eu from '../assets/lemax.JPG'

function Bio() {
    return (
        <div className='card_container'>
            <Title text='Prazer, Ledine Maximiano!' />
            <Text text="Estudei Marketing por 2 anos e meio e acabei desistindo, 
            e por conta da pandamia, percebi que não era o que eu gostaria de 
            fazer para o resto da vida e decidi procurar novos horizontes."/>
            <Image img={eu} description="Mulher negra com vestida com uma jaqueta tactel e
            calça jeans azul e tênis brancos, posando para foto na frente do Rio Liffey." />
        </div>
    )
}

export default Bio