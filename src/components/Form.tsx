import "../../src/assets/font/style.css";
function Form() {
    return (
        <div className=" bg-red-700 rounded-3xl p-8 w-[50%] mx-auto my-10 bg-cover" style={{ backgroundImage: 'url(src/assets/formBg.png)', }}>
            <h2 className="text-center text-white text-4xl mb-4" style={{ fontFamily: 'Juno Semicondensed' }}>Prendre Contact</h2>
            <div className="flex flex-row">
                <div className="w-1/2">

                    <form>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Nom et Prénom"
                                className="w-60 p-2 border rounded "
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Adresse Email"
                                className="w-60 p-2 border rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                placeholder="Votre message ici"
                                className="w-60 p-2 border rounded"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="bg-white text-black px-4 py-2 rounded cursor-pointer w-60"
                            >
                                Envoyer
                            </button>
                        </div>
                    </form>
                </div>
                <div className="w-1/2 flex items-center ">
                    {/* Replace the following div with your logo */}
                    <div className="w-48 h-48 bg-white border rounded-full flex items-center p-6 content-center justify-center">
                        <img src="src/assets/chili'slogo.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
