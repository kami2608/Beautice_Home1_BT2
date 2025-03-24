import tw from "twin.macro"
import styled from "@emotion/styled"

const SlideButtonContainer = styled.div`
	${tw`flex justify-center items-center relative transform translate-y-[15.6rem] gap-[0.6rem]`}
    @media (max-width: 1440px) {
        top: -110px;
    }

`

const Bar = styled.div<{ $isActive?: boolean }>(({ $isActive }) => [
	tw`w-[1rem] h-1 bg-[#eee] rounded-full transition-all duration-300`,
	$isActive && tw`w-[1.7rem] h-2 bg-[#414880]`,
]);

const SlideButton: React.FC = () => {
    return (
        <SlideButtonContainer>
            <Bar/>
            <Bar $isActive/>
            <Bar/>
        </SlideButtonContainer>
    )
}

export default SlideButton;