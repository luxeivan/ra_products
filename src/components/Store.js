import productsList from '../models/Products';
import { useState } from 'react';
import Iconswitch from './Iconswitch';
import ListView from './ListView';
import CardsView from './CardsView';


export default function Store() {
    const [products, setProducts] = useState(productsList)
    const [icon, setIcon] = useState('view_list')

    const handlerSwitch = (event) => {
        icon === 'view_list' ? setIcon('view_module') : setIcon('view_list')
    }
    return (
        <div className='store'>
            <Iconswitch icon={icon} onSwitch={handlerSwitch} />
            { icon === 'view_module' ? <ListView products={products} /> : <CardsView products={products} />}
        </div>
    );
}

