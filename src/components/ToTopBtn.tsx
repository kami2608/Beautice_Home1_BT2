import arrowUpIcon from "../assets/ToTop Button.png"
import tw from "twin.macro"
import styled from "@emotion/styled"
import { useEffect, useState } from "react";

interface ToTopButtonProps {
	$isVisible: boolean;
};

const ToTopButton = styled.div<ToTopButtonProps>(({ $isVisible }) => [
    tw`fixed flex justify-end cursor-pointer opacity-0 invisible transition-all duration-300 z-30 bottom-[172px] right-[66px]`,
    $isVisible && tw`visible opacity-100`,
    `
	@media (max-width: 1440px) {
		bottom: 170px;
		right: 66px;
		width: 36px;
		height: 36px;
	}
	@media (max-width: 768px) {
		right: 70px;
	}
	@media (max-width: 480px) {
		right: 20px;
	}
    `
]);

const ToTopIcon = styled.img`
	${tw`w-[35px] h-[35px] transition-all duration-300`}
	@media (max-width: 1440px) {
		${tw`w-[35px] h-[35px]`}
	}
`


const ToTopBtn: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const threshold: number = 0.9;

	const toggleButtonVisibility = (): void => {
		const scrollPosition = window.scrollY + window.innerHeight;
		const documentHeight = document.documentElement.scrollHeight;

		if (scrollPosition / documentHeight >= threshold) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

    const scrollToTop = (): void => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

    useEffect(() => {
		window.addEventListener("scroll", toggleButtonVisibility);
		return () => {
			window.removeEventListener("scroll", toggleButtonVisibility);
		};
	}, []);

    return (
        <ToTopButton $isVisible={isVisible} onClick={scrollToTop} >
            <ToTopIcon src={arrowUpIcon} alt="Arrow Up"/>
        </ToTopButton>
    )
}

export default ToTopBtn;