import tw from "twin.macro"
import styled from "@emotion/styled"

const SlideButtonContainer = styled.div`
    ${tw`flex items-center justify-center gap-2`}
`

const Bar = styled.div<{ $isActive?: boolean }>`
    ${tw`w-4 h-0.5 bg-gray-700 rounded-lg`}
    ${({ $isActive }) => $isActive && tw`w-6 h-1`}
`

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