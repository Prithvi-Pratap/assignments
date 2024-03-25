import React, { useState, useMemo } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'monster', value: 150 },
        { name: 'creatine', value: 550 },
        { name: 'whey protein', value: 2500 },
        { name: 'EAA', value: 1700 },
    ]);

    function totalSpending(items){
        let total=0;
        // items.map((item)=>{
        //     total+=item.value;
        // })
        // return total;
        total=items.reduce((accumulator,current)=>accumulator+current.value,0);
        return total;

    }
    const totalValue = useMemo(()=>totalSpending(items),[items]);

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: ${totalValue}</p>
        </div>
    );
};
