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
		description: "Non pimgurient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
	}, {
		id: 3,
		image: img3,
		title: "Beauty product",
		description: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
	},
]

const ServicesSection = styled.div`
    ${tw`flex flex-col items-center justify-center h-screen`}
`

const TitleWrapper = styled.div`
    ${tw`flex flex-col justify-center items-center`}
`

const Heading = styled.h1`
    ${tw`text-3xl font-semibold`}
`

const Subtitle = styled.h2`
    ${tw`text-lg font-semibold`}
`

const Description = styled.p`
    ${tw`text-lg text-center mt-4`}
`

const BoxesWrapper = styled.div`
    ${tw`flex justify-center items-center`}
`

const ServiceBox = styled.div`
    ${tw`flex flex-col items-center gap-5`}
`

const ServiceImage = styled.img`
    ${tw`w-40 h-40 object-cover rounded-full`}
`

const ServiceTitle = styled.h3`
    ${tw`text-xl font-semibold`}
`

const ServiceDescription = styled.p`
    ${tw`text-lg text-center`}
`



const Services: React.FC = () => {
    return (
        <ServicesSection id="services">
            <TitleWrapper>
                <Subtitle>Main Services</Subtitle>
                <Heading>
                    Learn services to focus on your beauty
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