import { useEffect, useState, useRef } from "react";
import { Nav, MenuMobile } from "./style";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../../Hooks";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Link = ({
    page,
    selectedPage,
    setSelectedPage,
    animationButtonMobile,
}) => {
    const lowerCasePage = page.toLowerCase();
    /* Opções possíveis: inicio, habilidades, projetos, contato */

    const animationAfterClick = () => {
        /* Change the page */
        setSelectedPage(lowerCasePage);

        /* Close de right modal */
        setTimeout(() => {
            animationButtonMobile();
        }, 200);
    };
    return (
        <AnchorLink
            className={`animation ${
                selectedPage === lowerCasePage ? lowerCasePage : ""
            }`}
            href={`#${lowerCasePage}`}
            onClick={() => {
                animationAfterClick();
            }}
        >
            {page}
        </AnchorLink>
    );
};

const NavBar = ({ selectedPage, setSelectedPage }) => {
    /* Irá gerenciar o clique no menu hamburguer */
    const [isMenuToggled, setIsMenuToggled] = useState(false);

    /* Para gerenciar a animação do menu */
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    /* 
    Retorna true quando está acima de 768px e false caso o contrário,
    portanto, iremos renderizar o menu hamburguer quando essa condição 
    for falsa
    */

    const animationButtonMobile = () => {
        setIsMenuOpen(true);
        setTimeout(() => {
            setIsMenuToggled(!isMenuToggled);
            setIsMenuOpen(false);
        }, 400);
    };

    return (
        <Nav $blur={isAboveSmallScreens}>
            <div className="ContainerNav">
                <h1>Marcos Brito</h1>

                {/* Menu de navegação DESKTOP */}
                {isAboveSmallScreens ? (
                    <div className="desktop">
                        <Link
                            page="Início"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Habilidades"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Projetos"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contato"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                    <IoMdMenu
                        size={45}
                        onClick={() => {
                            setIsMenuToggled(!isMenuToggled);
                        }}
                    />
                )}

                {/* MOBILE MENU */}
                {!isAboveSmallScreens && isMenuToggled && (
                    <MenuMobile $isopen={isMenuOpen}>
                        <div className="CloseButton">
                            <IoMdClose
                                size={30}
                                onClick={animationButtonMobile}
                            />
                        </div>

                        <div className="Container">
                            <Link
                                page="Início"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                animationButtonMobile={animationButtonMobile}
                            />
                            <Link
                                page="Habilidades"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                animationButtonMobile={animationButtonMobile}
                            />
                            <Link
                                page="Projetos"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                animationButtonMobile={animationButtonMobile}
                            />
                            <Link
                                page="Contato"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                animationButtonMobile={animationButtonMobile}
                            />
                        </div>
                    </MenuMobile>
                )}
            </div>
        </Nav>
    );
};

export default NavBar;
