import MenuSection from "./MenuSection";
import { useEffect, useState } from "react";

interface MenuData {
    _id: string;
    name: string;
    menuItems: Array<{
        _id: string;
        dishName: string;
        price: string;
        imageUrl: string;
        __v: number;
    }>;
    __v: number;
}

const Menu: React.FC = () => {
    const [menuData, setMenuData] = useState<MenuData[]>([]);

    useEffect(() => {
        // Fetch menu data
        fetch('http://localhost:3000/menuSections')
            .then(response => response.json())
            .then((data: MenuData[]) => setMenuData(data))
            .catch(error => console.error('Error fetching menu data:', error));
    }, []);

    console.log(menuData);

    return (
        <div id="menu" className="my-10">
            <div className="flex flex-col items-center">
                <div className="flex flex-row items-center border-b-[3px] border-b-red-600 p-4">
                    <img src="src/assets/Opera_Snapshot_2023-12-26_174157_drive.google.com-removebg-preview.png" alt="" />
                    <h1 className="text-red-600 font-bold text-3xl" style={{ fontFamily: 'Juno Semicondensed' }}>
                        Notre Menu
                    </h1>
                    <img src="src/assets/Opera_Snapshot_2023-12-26_174157_drive.google.com-removebg-preview.png" alt="" className="scale-x-[-1]" />
                </div>

                {/* Create MenuSection for each entry in menuData */}
                {menuData.map((sectionData) => (
                    <MenuSection
                        key={sectionData._id}
                        sectionName={sectionData.name}
                        dishesData={sectionData.menuItems}
                    />
                ))}
            </div>
        </div>
    );
};

export default Menu;
