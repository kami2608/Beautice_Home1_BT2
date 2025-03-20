import tw from "twin.macro"
import styled from "@emotion/styled"
import img1 from "../../assets/unsplash_pTrhfmj2jDA.png"
import img2 from "../../assets/unsplash_FVh_yqLR9eA.png"
import img3 from "../../assets/unsplash_mEZ3PoFGs_k.png"
import twitterIcon from "../../assets/twitter.png"
import facebookIcon from "../../assets/Facebook.png"
import instagramIcon from "../../assets/instagram.png"

interface TeamMember {
    id: number;
    name: string;
    role: string;
    desc: string;
    image: string;
    socials: string[];
}

const teamData: TeamMember[] = [
    {
        id: 1,
        name: "Briyan Nevalli",
        role: "Surgeon",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit.",
        image: img1,
        socials: [twitterIcon, facebookIcon, instagramIcon],
    }, {
        id: 2,
        name: "Bella Sebastian",
        role: "Dermatologist",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit.",
        image: img2,
        socials: [twitterIcon, facebookIcon, instagramIcon],
    }, {
        id: 3,
        name: "Lilly Adams",
        role: "Stylist expert",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit.",
        image: img3,
        socials: [twitterIcon, facebookIcon, instagramIcon],
    },
]

const ProfessionalSection = styled.section`
    ${tw`flex flex-col items-center justify-center h-screen`}   
`

const TitleWrapper = styled.div`
    ${tw`flex flex-col justify-center items-center`}
`

const Subtitle = styled.h2`
    ${tw`text-lg font-semibold`}
`

const Heading = styled.h1`
    ${tw`text-3xl font-semibold`}
`

const Description = styled.p`
    ${tw`text-lg text-center mt-4`}
`

const BoxesWrapper = styled.div`
    ${tw`flex justify-center items-center`}
`

const ProfessionalBox = styled.div`
    ${tw`flex flex-col items-center gap-5`}
`

const ProfessionalImage = styled.img`
    ${tw`w-40 h-40 rounded-full`}
`

const ProfessionalRole = styled.h3`
    ${tw`text-xl font-semibold`}
`

const ProfessionalName = styled.h4`
    ${tw`text-lg font-semibold`}
`

const ProfessionalDesc = styled.p`
    ${tw`text-lg text-center`}
`

const SocialsWrapper = styled.div`
    ${tw`flex gap-3`}
`

const SocialIcon = styled.img`
    ${tw`h-20`}
`

const Professional: React.FC = () => {
    return (
        <ProfessionalSection id="professional">
            <TitleWrapper>
                <Subtitle>Professional Teams</Subtitle>
                <Heading>The Professional expert</Heading>
                <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                </Description>
            </TitleWrapper>
            <BoxesWrapper>
                {teamData.map((member) => (
                    <ProfessionalBox key={member.id}>
                        <ProfessionalImage src={member.image} alt={member.name} />
                        <ProfessionalRole>{member.role}</ProfessionalRole> 
                        <ProfessionalName>{member.name}</ProfessionalName>
                        <ProfessionalDesc>{member.desc}</ProfessionalDesc>
                        <SocialsWrapper>
                            {member.socials.map((social, index) => (
                                <SocialIcon key={index} src={social} alt="Social Icon" />
                            ))}
                        </SocialsWrapper>
                    </ProfessionalBox>
                ))}
            </BoxesWrapper>
        </ProfessionalSection>
    )
}

export default Professional;