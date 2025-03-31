import tw from "twin.macro"
import styled from "@emotion/styled"
import img1 from "../../assets/Animation1.png"
import img2 from "../../assets/Animation2.png"
import img3 from "../../assets/Animation3.png"


interface Service {
    id: number;
    title: string;
    description: string;
    image: string;
}

const serviceData: Service[] = [
    {
        id: 1,
        image: img1,
        title: "Beauty consultation",
        description: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
    }, {
        id: 2,
		image: img2,
		title: "Skin treatments",
		description: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
	}, {
		id: 3,
		image: img3,
		title: "Beauty product",
		description: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
	},
]

const ServicesSection = styled.div`
	${tw`relative text-center top-[304px] z-20 py-[100px] px-0`}
	@media (max-width: 1440px) {
		${tw`top-[142px]`}
	}
	@media (max-width: 1024px) {
		${tw`top-[160px] py-[80px] px-[10px]`}
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

const Heading = styled.h1`
	${tw`text-[46px] font-semibold text-[#091156] mb-[26px]`}
	@media (max-width: 1440px) {
		${tw`text-[35px] leading-[45px] mb-[19px] tracking-[0.03rem]`}
	}
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

const Subtitle = styled.h2`
	${tw`text-[21px] font-semibold text-[#FF64AE] mb-[19px] leading-5 tracking-[0.01rem]`}
	@media (max-width: 1440px) {
		${tw`text-[16px] mb-3`}
	}
	@media (max-width: 1024px) {
		${tw`mb-4`}
	}
	@media (max-width: 768px) {
		${tw`text-[14px] mb-3`}
	}
`

const Description = styled.p`
	${tw`text-[20px] font-medium text-[#8B8B8B] tracking-[0.13rem] leading-8 max-w-[1110px] mx-auto my-0`}
	@media (max-width: 1440px) {
		${tw`text-[16px] leading-6 tracking-[0.095rem] max-w-[860px] mb-5`}
	}
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
	${tw`relative flex items-center justify-between z-10 gap-10 top-[62px]`}
	padding: 0 198px;
	grid-template-columns: repeat(3, 1fr);
	@media (max-width: 1440px) {
		${tw`top-[31px] gap-[50px] py-0 px-[150px]`}
	}
	@media (max-width: 1130px) {
		${tw`py-0 px-[50px]`}
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

const ServiceBox = styled.div`
	${tw`relative flex-1 text-center p-[41px] max-w-[500px] bg-white rounded-[40px]`}
	box-shadow: 0px 25px 50px 25px #F6F7FF;
    	@media (max-width: 1440px) {
		${tw`p-[30px]`}
	}
	@media (max-width: 860px) {
		${tw`p-[25px]`}
	}
	@media (max-width: 768px) {
		${tw`p-[40px] max-w-full`}
	}
	@media (max-width: 480px) {
		${tw`p-[30px]`}
	}
`

const ServiceImage = styled.img`
	${tw`block mt-[17px] mx-auto w-[220px] h-[220px] mb-12`}
	@media (max-width: 1440px) {
		${tw`w-[164px] mt-[6px] mb-[28px]`}
	}
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

const ServiceTitle = styled.h3`
	${tw`text-[24px] font-semibold text-[#091156] mb-[22px]`}
	@media (max-width: 1440px) {
		${tw`text-[18px] mb-[18px]`}
	}
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

const ServiceDescription = styled.p`
	${tw`text-[20px] font-normal text-[#8B8B8B] leading-7 tracking-[0.09rem] mb-8`}
	@media (max-width: 1440px) {
		${tw`text-[14px] font-medium leading-[21px] tracking-[0.08rem] mb-[39px]`}
	}
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



const Services: React.FC = () => {
    return (
        <ServicesSection id="services">
            <TitleWrapper>
                <Subtitle>Main Services</Subtitle>
                <Heading>
                    Learn services to focus <br/> on your beauty
                </Heading>
                <Description>
                Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
                Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
                </Description>
            </TitleWrapper>
            <BoxesWrapper>
                {serviceData.map((service) => (
                    <ServiceBox key={service.id}>
                        <ServiceImage src={service.image} alt={service.title} />
                        <ServiceTitle>{service.title}</ServiceTitle>
                        <ServiceDescription>{service.description}</ServiceDescription>
                    </ServiceBox>
                ))}
            </BoxesWrapper>
        </ServicesSection>
    )
}

export default Services;