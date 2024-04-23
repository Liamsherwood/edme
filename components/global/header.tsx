export const Header = () => {
    return (
        <header className="header py-4 relative z-10 w-100 flex justify-center">
            <div className="header-logo--container flex relative items-center">
                <h1 className="logo mb-0 leading-0 flex">
                    <a className="font-bold text-2xl text-white hover:text-primary-500 transition duration-500 flex items-center">
                        edme.
                    </a>
                </h1>
            </div>
        </header>
    );
};
