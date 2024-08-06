import { useLocation } from "react-router-dom";
import { Location } from "react-router-dom";
import { useNavigationStore } from "@gdsc/store/useNavigationStore";

import { TitleWrapper, SubtitleTextContainer, TitleTextContainer, HamburgerMenu } from "./AdminTitle.style";

import Text from "@gdsc/components/common/typography/Text";
import MenuHamburger from '@gdsc/assets/MenuHamburger.svg';

import AdminSideBar from "./AdminSideBar";

const getTitle = (pathname: string): string => {
    switch (pathname) {
        case '/admin':
            return "상태조정";
        case '/admin/team':
            return "팀 배치";
        case '/admin/docs':
            return "서류 확인";
        default:
            return "관리자 페이지";
    }
}

const AdminTitle = () => {
    const pathName: Location = useLocation();
    const { isOpen, open } = useNavigationStore();

    return (
    <TitleWrapper>
        <TitleTextContainer>
            <SubtitleTextContainer>
                <Text size="lg" weight="bold">Admin Page</Text>
                <Text size="sm">GDSC KNU</Text>
            </SubtitleTextContainer>
            <Text size="xxl" weight="bold">{getTitle(pathName.pathname)}</Text>
        </TitleTextContainer>
        <HamburgerMenu src={MenuHamburger} alt="menu" onClick={open}/>
        <AdminSideBar open={isOpen} />
    </TitleWrapper>
    );
}

export default AdminTitle;