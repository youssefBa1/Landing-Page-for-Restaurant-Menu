import React, { useState } from 'react';
import "../../src/assets/font/style.css";
import DishCard from "./DishCard";

interface DishData {
    dishName: string;
    price: string;
    imageUrl: string;
}

interface MenuSectionProps {
    sectionName: string;
    dishesData: DishData[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ sectionName, dishesData }) => {
    const [visibleCards, setVisibleCards] = useState(10);
    const [showSeeLess, setShowSeeLess] = useState(false);

    const handleSeeMore = () => {
        // Increase the number of visible cards
        setVisibleCards(visibleCards + 8);
        setShowSeeLess(true);
    };

    const handleSeeLess = () => {
        // Decrease the number of visible cards
        setVisibleCards(10);
        setShowSeeLess(false);
    };

    return (
        <div className="my-10 mx-10 w-full">
            <h2 className="text-green-600 text-6xl mb-4" style={{ fontFamily: 'Juno Semicondensed' }}>{sectionName}</h2>
            <div className="grid grid-cols-5 gap-8 w-full">
                {dishesData.slice(0, visibleCards).map((data, index) => (
                    <DishCard key={index} dishName={data.dishName} price={data.price} imageUrl={data.imageUrl} />
                ))}
            </div>
            <div className="flex justify-center mt-4">
                {visibleCards < dishesData.length && (
                    <>
                        <button
                            className={`text-red-500 hover:underline mr-4 ${showSeeLess ? 'hidden' : ''}`}
                            onClick={handleSeeMore}
                        >
                            Voir plus
                        </button>
                        {showSeeLess && (
                            <button
                                className="text-red-500 hover:underline"
                                onClick={handleSeeLess}
                            >
                                Voie moins
                            </button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default MenuSection;
