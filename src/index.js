import React from 'react'
import ReactDOM from 'react-dom'
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ShippingLabelMarker from './core/components/features/shipping-label-maker/ShippingLabelMarker';
import ShippingLabel from './core/components/features/shipping-label-maker/ShippingLabel';

ReactDOM.render((
    <div>
        <ShippingLabelMarker></ShippingLabelMarker>
    </div>
), document.getElementById('app'))
