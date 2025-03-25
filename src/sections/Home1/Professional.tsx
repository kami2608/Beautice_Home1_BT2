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
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
        image: img1,
        socials: [twitterIcon, facebookIcon, instagramIcon],
    }, {
        id: 2,
        name: "Bella Sebastian",
        role: "Dermatologist",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
        image: img2,
        socials: [twitterIcon, facebookIcon, instagramIcon],
    }, {
        id: 3,
        name: "Lilly Adams",
        role: "Stylist expert",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
        image: img3,
        socials: [twitterIcon, facebookIcon, instagramIcon],
    },
]

const ProfessionalSection = styled.section`
    ${tw`relative text-center top-[-271px] z-20 py-[100px] px-0`}   
`

const TitleWrapper = styled.div`
    ${tw`mb-[50px]`}
`

const Subtitle = styled.h2`
${tw`text-[15.8px] font-semibold text-[#FF64AE] mb-[16px] leading-[1rem] tracking-[0.01rem]`}
`

const Heading = styled.h1`
    ${tw`text-[36px] font-semibold text-[#091156] mb-[21px]  leading-[2.7rem]`}
`

const Description = styled.p`
    ${tw`text-[16px] font-medium text-[#8B8B8B] tracking-[0.094rem] leading-[1.5rem] max-w-[839px] mx-auto my-0`}

    @media (max-width: 600px) {
        ${tw`w-[80%]`}
    }

    @media (min-width: 600px) and (max-width: 900px) {
        ${tw`w-[80%]`}
    }

    @media (min-width: 900px) and (max-width: 1100px) {
        ${tw`w-[80%]`}
    }

    @media (min-width: 1100px) and (max-width: 1300px) {

    }

    @media (min-width: 1536px) {

    }

`

const BoxesWrapper = styled.div`
	${tw`relative flex items-center justify-between z-10 gap-[3.5rem] top-[137px]`}
	padding: 0 152px;
	grid-template-columns: repeat(3, 1fr);
    @media (max-width: 600px) {
        ${tw`flex-col`}
        padding: 0 15%;
    }

    @media (min-width: 600px) and (max-width: 900px) {
        ${tw`flex-col`}
        padding: 0 15%;
    }

    @media (min-width: 900px) and (max-width: 1100px) {
        ${tw`flex-col`}
        padding: 0 15%;
    }

    @media (min-width: 1100px) and (max-width: 1300px) {

    }

    @media (min-width: 1536px) {
        padding: 0 20%;
    }
`

const ProfessionalBox = styled.div<{ index: number }>`
  ${tw`relative z-10 w-[510px] rounded-[40px] shadow-none flex-1`}
  ${({ index }) =>
    index === 1
      ? tw`w-[570px] z-20 bg-white shadow-[10px 13px 80px 14px #F2F4FF]`
      : index === 0
      ? tw`left-[-10px]`
      : index === 2
      ? tw`right-[-10px]`
      : tw`relative`}

    @media (max-width: 600px) {
        ${tw`w-[90%]`}
    }

    @media (min-width: 600px) and (max-width: 900px) {
        ${tw`w-[90%]`}
    }

    @media (min-width: 900px) and (max-width: 1100px) {
        ${tw`w-[80%]`}
    }
`;

const ProfessionalImage = styled.img`
    ${tw`block mt-[17px] mx-auto w-[146px] h-[146px] mb-[3.3rem]`}

`

const ProfessionalRole = styled.h3`
    ${tw`text-[16px] font-semibold text-[#ff64ae] mb-[9px]`}

`

const ProfessionalName = styled.h4`
    ${tw`text-[1.125rem] leading-[1.75rem] font-semibold text-[#091156] mb-[18px]`}
`

const ProfessionalDesc = styled.p`
    ${tw`w-[83%] text-[13.5px] font-normal text-[#8B8B8B] leading-[1.3rem] tracking-[0.1rem] mb-[40px]`}
    margin-left: auto;
    margin-right: auto;

`

const SocialsWrapper = styled.div`
    ${tw`flex w-[73%] gap-[3px]`}
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 600px) and (max-width: 900px) {
        ${tw`w-[50%]`}
    }

    @media (min-width: 900px) and (max-width: 1100px) {
        ${tw`w-[50%]`}
    }

    @media (min-width: 1100px) and (max-width: 1300px) {
        ${tw`w-[90%]`}
    }
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
                {teamData.map((member, index) => (
                    <ProfessionalBox key={member.id} index={index}>
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