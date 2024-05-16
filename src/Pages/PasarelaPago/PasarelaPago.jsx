import React from "react";

import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
initMercadoPago('TEST-df321b75-6fa4-45e2-8c03-38f021efc91e');


export default function PasarelaPago() {
    return (
        <div>
            <h1>Pasarela de pago</h1>
        </div>
    );
}