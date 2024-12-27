import { useState } from 'react';

interface Values {
    value: string;
    label: string;
}

const useDateCitySelector = () => {
    const values: Values[] = [
        {
            value: 'col-1',
            label: '10 de Enero - Jaime Morón, Cartagena',
        },
        {
            value: 'col 2',
            label: '25 de Enero - Atanasio Girardot, Medellín',
        },
        {
            value: 'col 3',
            label: '20 de Abril - El Campín, Bogotá',
        },
        {
            value: 'col 4',
            label: '11 de Mayo - Estadio Olímpico, Manizales',
        },
    ];

    // Inicializamos con la opción predeterminada
    const [selectedValue, setSelectedValue] = useState<Values>(values[0]);
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (value: Values) => {
        console.log(value)
        setSelectedValue(value);
        setIsOpen(false);  // Cerramos el selector después de seleccionar
    };

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev); // Alternamos el estado de apertura del selector
    };

    return {
        selectedValue,
        values,
        isOpen,
        handleSelect,
        toggleDropdown,
        setIsOpen,
    };
};

export default useDateCitySelector;
