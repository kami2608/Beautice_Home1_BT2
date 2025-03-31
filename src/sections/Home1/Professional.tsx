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
    ${tw`relative text-center top-[-392px] z-20 pt-[100px] mb-[-52px] px-0`} 

    @media (max-width: 2600px) {
        ${tw`top-[-100px]`}
    }
    @media (width: 1440px) {
    ${tw`top-[-325px]`}
    }
    @media (max-width: 1300px) {
        ${tw`top-[-300px]`}
    }
    @media (max-width: 1024px) {
		${tw`top-0 py-[80px] px-[10px]`}
	}
	@media (max-width: 768px) {
		${tw`top-[170px] py-[60px] px-[15px]`}
	}
	@media (max-width: 480px) {
		${tw`py-10 px-[10px]`}
	}  
`

const TitleWrapper = styled.div`
    ${tw`mb-[50px]`}
`

const Subtitle = styled.h2`
${tw`text-[15.8px] font-semibold text-[#FF64AE] mb-[16px] leading-[1rem] tracking-[0.01rem]`}
	@media (max-width: 1024px) {
		${tw`mb-4`}
	}
	@media (max-width: 768px) {
		${tw`text-[14px] mb-3`}
	}
`

const Heading = styled.h1`
    ${tw`text-[36px] font-semibold text-[#091156] mb-[21px]  leading-[2.7rem]`}
    @media (max-width: 1024px) {
		${tw`text-[34px] leading-[50px]`}
	}
	@media (max-width: 768px) {
		${tw`text-[32px] leading-[45px] mb-[18px]`}
	}
	@media (max-width: 480px) {
		${tw`text-[26px] leading-[38px] mb-[14px]`}
	}
`

const Description = styled.p`
    ${tw`text-[16px] font-medium text-[#8B8B8B] tracking-[0.094rem] leading-[1.5rem] max-w-[839px] mx-auto my-0`}

    @media (max-width: 1024px) {
		${tw`tracking-[0.1rem] max-w-[800px]`}
	}
	@media (max-width: 768px) {
		${tw`text-[16px] leading-6 tracking-[0.08rem] max-w-[600px]`}
	}
	@media (max-width: 480px) {
		${tw`text-[14px] leading-5 tracking-[0.05rem] max-w-full`}
	}

`

const BoxesWrapper = styled.div`
	${tw`relative flex items-center justify-between z-10 top-[62px]`}
	padding: 0 140px;
	grid-template-columns: repeat(3, 1fr);
    @media (max-width: 1130px) {
		${tw`pb-[120px] px-[50px]`}
	}
	@media (max-width: 860px) {
		${tw`px-[20px] gap-[20px]`}
	}
	@media (max-width: 768px) {
		${tw`flex-col items-center py-0 px-[30px]`}
	}
	@media (max-width: 480px) {
		${tw`gap-[15px] py-0 px-[15px]`}
	}

`

const ProfessionalBox = styled.div<{ index: number }>`
  ${tw`relative z-10 w-[510px] rounded-[40px] shadow-none flex-1 flex flex-col items-center justify-center`}
  ${({ index }) =>
    index === 1
      ? tw`w-[570px] z-20 bg-white shadow-[10px 13px 80px 14px #F2F4FF] px-[26px]`
      : index === 0
      ? tw`left-[-11px]`
      : index === 2
      ? tw`right-[-12px]`
      : tw`relative`}

    @media (max-width: 860px) {
		${tw`p-[25px]`}
	}
	@media (max-width: 768px) {
		${tw`p-[40px] max-w-full`}
	}
	@media (max-width: 480px) {
		${tw`p-[30px] w-[380px]`}
	}
`;

const ProfessionalImage = styled.img`
    ${tw`block mt-[91px] mx-auto w-[146px] h-[146px] mb-[3.3rem]`}

    @media (max-width: 1024px) {
		${tw`w-[160px] h-[160px] mt-0 mb-[20px]`}
	}
	@media (max-width: 860px) {
		${tw`w-[150px] h-[150px]`}
	}
	@media (max-width: 768px) {
		${tw`w-[164px] h-[164px] mb-4`}
	}
	@media (max-width: 480px) {
		${tw`w-[120px] h-[120px] mb-[10px]`}
	}

`

const ProfessionalRole = styled.h3`
    ${tw`text-[16px] font-semibold text-[#ff64ae] mb-[9px]`}

    @media (max-width: 1024px) {
		${tw`text-[15px] mb-[16px]`}
	}
	@media (max-width: 860px) {
		${tw`text-[14px] mb-[15px]`}
	}
	@media (max-width: 768px) {
		${tw`text-[20px] mb-[15px]`}
	}
	@media (max-width: 480px) {
		${tw`text-[18px] mb-[10px]`}
	}

`

const ProfessionalName = styled.h4`
    ${tw`text-[1.125rem] leading-[1.75rem] font-semibold text-[#091156] mb-[18px]`}

    @media (max-width: 1024px) {
		${tw`text-[15px] mb-[16px]`}
	}
	@media (max-width: 860px) {
		${tw`text-[14px] mb-[15px]`}
	}
	@media (max-width: 768px) {
		${tw`text-[20px] mb-[15px]`}
	}
	@media (max-width: 480px) {
		${tw`text-[18px] mb-[10px]`}
	}
`

const ProfessionalDesc = styled.p`
    ${tw`w-[83%] text-[13.5px] font-normal text-[#8B8B8B] leading-[1.3rem] tracking-[0.1rem] mb-[40px]`}
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 1024px) {
		${tw`text-[12px] leading-[20px] mb-5`}
	}
	@media (max-width: 860px) {
		${tw`leading-[18px]`}
	}
	@media (max-width: 768px) {
		${tw`text-[16px] leading-6 mb-[15px]`}
	}
	@media (max-width: 480px) {
		${tw`text-[14px] leading-5 mb-2.5`}
	}

`

const SocialsWrapper = styled.div`
    ${tw`flex w-[67%] gap-[3px]`}
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 76px;

    @media (min-width: 1441px) and (max-width: 2560px) {
        ${tw`w-[33%]`}
    }
    @media (max-width: 1440px) {
    }

    @media (max-width: 1280px) {
    ${tw`w-full gap-0`}
    }
    @media (max-width: 770px) {
        ${tw`w-[65%]`}
    }


`

const SocialIcon = styled.img`
    ${tw`h-20`}
    @media (max-width: 900px) {
        ${tw`max-w-[30%]`}
    }
    @media (max-width: 770px) {
        ${tw`max-w-[35%]`}
    }
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