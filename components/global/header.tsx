import { HeaderLogo } from './headerlogo';
export const Header = () => {
    return (
        <header className="header pt-4 relative z-10 w-100 flex justify-center">
            <div className="header-logo--container flex relative items-center">
                <a href="/">
                    <HeaderLogo />
                </a>
            </div>
        </header>
    );
};
