import React from 'react';

interface DishCardProps {
    dishName: string;
    price: string;
    imageUrl: string;
}

const DishCard: React.FC<DishCardProps> = ({ dishName, price, imageUrl }) => {
    return (
        <div className=" bg-white rounded-lg overflow-hidden flex flex-col ">
            <img src={imageUrl} alt={dishName} className="w-[100%] h-48 object-cover rounded-lg" />

            <div className="flex flex-col items-start p-4">
                <p className="text-red-600 font-bold text-xl mb-2" style={{ fontFamily: 'Juno Semicondensed' }}>
                    {dishName}
                </p>
                <p className="text-green-500 font-bold text-lg">{price}</p>
            </div>
        </div>
    );
};

export default DishCard;
