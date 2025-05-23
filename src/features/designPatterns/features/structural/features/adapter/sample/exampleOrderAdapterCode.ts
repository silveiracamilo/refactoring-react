export const exampleOrderAdapterCode = 
`import { useQuery } from "@tanstack/react-query";

//type order que cliente espera
type Order = {
    id: string;
    customerName: string;
    email: string;
    items: {
        sku: string;
        quantity: number;
        price: number;
    }[];
};

//type order que api retorna
type ApiOrder = {
    order_id: string;
    customer_info: {
        fname: string;
        lname: string;
        contact: {
            email_address: string;
        };
    };
    items_list: {
        sku: string;
        qty: number;
        price_cents: number;
    }[];
};

//adapta a resposta da api em Order
export const orderApiAdapter = (apiOrder: ApiOrder): Order => ({
    id: apiOrder.order_id,
    customerName: \`\${apiOrder.customer_info.fname} \${apiOrder.customer_info.lname}\`,
    email: apiOrder.customer_info.contact.email_address,
    items: apiOrder.items_list.map(item => ({
        sku: item.sku,
        quantity: item.qty,
        price: item.price_cents / 100, // transforma de cents para reais/dólares
    })),
});

export const useGetOrder = () => {
    return useQuery({ 
        queryKey: ['order'], 
        queryFn: async () => {
            const apiResponse = await Promise.resolve({
                order_id: '12345',
                customer_info: {
                    fname: 'Alice',
                    lname: 'Johnson',
                    contact: {
                        email_address: 'alice@example.com'
                    }
                },
                items_list: [
                    { sku: 'ABC123', qty: 2, price_cents: 1000 },
                    { sku: 'XYZ456', qty: 1, price_cents: 5000 }
                ],
                status_code: 'SHIPPED'
            });
            return orderApiAdapter(apiResponse);
        }
    });
};

export const ExampleOrderAdapter = () => {
    const { data: order, isLoading } = useGetOrder();

    if (isLoading || !order) {
        return <p>loading...</p>
    }

    return (
        <div>
            <h1>Order #{order.id}</h1>
            <p>Customer: {order.customerName} ({order.email})</p>
            <h2>Items:</h2>
            <ul>
            {order.items.map(item => (
                <li key={item.sku}>
                {item.quantity} x {item.sku} @ \${item.price}
                </li>
            ))}
            </ul>
        </div>
    );
};`;

export const exampleOrderAdapterRenderCode = 
`<div className='border-1 border-blue-500 p-1 w-60'>
  <ExampleOrderAdapter />
</div>`;