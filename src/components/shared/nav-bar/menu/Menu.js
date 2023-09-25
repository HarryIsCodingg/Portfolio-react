import './Menu.css';
import {Icon} from "@iconify/react";
import {useEffect} from "react";
import Modal from 'react-modal';
import NavLinkWrapper from "../nav-link-wrapper/NavLinkWrapper";
import {useDispatch, useSelector} from "react-redux";
import {closeMenuModal, openMenuModal, selectIsMenuModalOpen} from "../../../../core/redux/slices/menuModalSlice";
import SocialLinks from "../social-links/SocialLinks";

const Menu = () => {

    const mobileScreenThreshold = 768;
    const isModalOpen = useSelector(selectIsMenuModalOpen);
    const dispatch = useDispatch();

    useEffect(() => {
        const handleWindowResize = () => {

            const screenWidth = window.innerWidth;

            if (screenWidth > mobileScreenThreshold && isModalOpen) {
                handleCloseModal();
            }
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [isModalOpen]);

    const customStyle = {
        overlay: {
            backgroundColor: '#282C33'
        }
    }

    const handleOpenModal = () => {
        dispatch(openMenuModal());
    }
    const handleCloseModal = () => {
        dispatch(closeMenuModal());
    }



    return (
        <div className='menu-container'>
            {isModalOpen && <Icon icon='line-md:menu-to-close-alt-transition' fontSize={28} onClick={handleCloseModal}/>}
            {!isModalOpen && <Icon icon='line-md:close-to-menu-alt-transition' fontSize={28} onClick={handleOpenModal}/>}
            <Modal isOpen={isModalOpen} className='menu-modal' style={customStyle}>
                <div className='menu-navlink-wrapper'>
                    <NavLinkWrapper />
                </div>
                <div className='menu-social-link-wrapper'>
                    <SocialLinks />
                </div>
            </Modal>
        </div>
    )
}

export default Menu;
