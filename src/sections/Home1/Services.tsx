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
	${tw`relative text-center top-[173px] z-20 py-[100px] px-0`}

`

const TitleWrapper = styled.div`
	${tw`mb-[50px]`}
`

const Heading = styled.h1`
	${tw`text-[36px] font-semibold text-[#091156] mb-[21px]  leading-[2.7rem]`}

`

const Subtitle = styled.h2`
	${tw`text-[15.8px] font-semibold text-[#FF64AE] mb-[16px] leading-[1rem] tracking-[0.01rem]`}

`

const Description = styled.p`
	${tw`text-[16px] font-medium text-[#8B8B8B] tracking-[0.094rem] leading-[1.5rem] max-w-[839px] mx-auto my-0`}

`

const BoxesWrapper = styled.div`
	${tw`relative flex items-center justify-between z-10 gap-[3.5rem] top-[36px]`}
	padding: 0 152px;
	grid-template-columns: repeat(3, 1fr);
`

const ServiceBox = styled.div`
	${tw`relative flex-1 text-center p-[41px] max-w-[500px] bg-white rounded-[40px]`}
	box-shadow: 0px 25px 50px 25px #F6F7FF;
`

const ServiceImage = styled.img`
	${tw`block mt-[17px] mx-auto w-[167px] h-[167px] mb-[3.4rem]`}

`

const ServiceTitle = styled.h3`
	${tw`text-[18px] font-semibold text-[#091156] mb-[18px]`}

`

const ServiceDescription = styled.p`
	${tw`text-[13.5px] font-normal text-[#8B8B8B] leading-[1.3rem] tracking-[0.1rem] mb-[2rem]`}

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