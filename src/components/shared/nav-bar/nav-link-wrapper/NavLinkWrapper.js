import {NavLink} from "react-router-dom";
import './NavLinkWrapper.css';
import {useDispatch, useSelector} from 'react-redux';
import {closeMenuModal, selectIsMenuModalOpen} from "../../../../core/redux/slices/menuModalSlice";

const NavLinkWrapper = () => {

    const isMenuModalOpen = useSelector(selectIsMenuModalOpen);
    const dispatch = useDispatch();

    const closeModal = () => {

        if(isMenuModalOpen){
            dispatch(closeMenuModal());
        }
    }

    return (
        <>
            <NavLink to='/' className='nav-link link' onClick={closeModal}><span className='primary-color'>#</span>home</NavLink>
            <NavLink to='/works' className='nav-link link' onClick={closeModal}><span className='primary-color'>#</span>works</NavLink>
            <NavLink to='/about' className='nav-link link' onClick={closeModal}><span className='primary-color'>#</span>about-me</NavLink>
            <NavLink to='/contact' className='nav-link link' onClick={closeModal}><span className='primary-color'>#</span>contact</NavLink>
        </>
    )
}

export default NavLinkWrapper;
