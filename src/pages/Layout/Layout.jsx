import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "components/Loader/Loader";
import { Nav, BtnNavLink, Container } from './Layout.styled';

const Layout = () => {
    return (
        <>
            <Nav>
                <BtnNavLink to='/'>Home</BtnNavLink>
                <BtnNavLink to='/movies'>Movies</BtnNavLink>
            </Nav>

            <Container>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </Container>
        </>
    );
};

export default Layout;