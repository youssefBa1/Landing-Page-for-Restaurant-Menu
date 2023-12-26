import MenuSection from "./MenuSection";

const Menu = () => {
    // Dummy data for MenuSections
    const foodData = [
        { dishName: "Tajin 1", price: "45.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
        { dishName: "Tajin 2", price: "55.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
        { dishName: "Tajin 3", price: "35.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
        { dishName: "Tajin 4", price: "40.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
        { dishName: "Tajin 5", price: "49.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
        { dishName: "Tajin 1", price: "45.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
        { dishName: "Tajin 2", price: "55.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
        { dishName: "Tajin 3", price: "35.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
        { dishName: "Tajin 4", price: "40.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
        { dishName: "Tajin 5", price: "49.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
        { dishName: "Tajin 1", price: "45.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
        { dishName: "Tajin 2", price: "55.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
        { dishName: "Tajin 3", price: "35.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
        { dishName: "Tajin 4", price: "40.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
        { dishName: "Tajin 5", price: "49.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
        { dishName: "Tajin 1", price: "45.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
        { dishName: "Tajin 2", price: "55.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
        { dishName: "Tajin 3", price: "35.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
        { dishName: "Tajin 4", price: "40.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
        { dishName: "Tajin 5", price: "49.9 dt", imageUrl: "src/assets/chiliDish.jpg" }
    ];

    const drinkData = [
        { dishName: "Drink 1", price: "45.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
        { dishName: "Drink 2", price: "55.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
        { dishName: "Drink 3", price: "35.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
        { dishName: "Drink 4", price: "40.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
        { dishName: "Drink 5", price: "49.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
        { dishName: "Drink 1", price: "45.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
        { dishName: "Drink 2", price: "55.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
        { dishName: "Drink 3", price: "35.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
        { dishName: "Drink 4", price: "40.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
        { dishName: "Drink 5", price: "49.9 dt", imageUrl: "src/assets/chiliDish.jpg" },
    ];

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

                {/* Additional content can be added here */}
            </div>
            {/* Pass foodData to the first MenuSection */}
            <MenuSection sectionName="Food Menu" dishesData={foodData} />

            {/* Pass drinkData to the second MenuSection */}
            <MenuSection sectionName="Drink Menu" dishesData={drinkData} />
        </div>
    );
};

export default Menu;
