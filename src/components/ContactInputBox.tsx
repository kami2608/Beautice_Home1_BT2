import tw from "twin.macro"
import styled from "@emotion/styled"

const ContactInput = styled.form`
	${tw`flex flex-col gap-[35px]`}
`

const FormRow = styled.div`
	${tw`flex gap-[38px]`}
	.first-name, .last-name {
		${tw`flex-1 rounded-[14px] border border-[#D9DDFE] text-[16px] text-[#000]`}
		padding-left: 1.5rem;
		padding-right: 1.25rem;
		padding-top: 10px;
		padding-bottom: 15px;
	}
`

const Input = styled.input`
	${tw`relative h-16 w-full px-[22px] py-[15px] border border-[#D9DDFE] rounded-[14px] text-[16px] text-[#000]`}
	&::placeholder {
		${tw`text-[#C5C5C5] tracking-[0.1rem]`}
	}
`

const Textarea = styled.textarea`
	${tw`relative w-full px-[22px] py-[27px] border border-[#D9DDFE] rounded-[14px] text-[16px] text-[#000] resize-none h-[15rem]`}
	&::placeholder {
		${tw`text-[#C5C5C5] tracking-[0.1rem]`}
	}
`

const SubmitButton = styled.button`
	${tw`relative text-white rounded-[50px] w-[249px] h-[60px] border-none font-semibold cursor-pointer tracking-widest z-10 bg-[#FF64AE] shadow-md`}
	margin-top: 21px;

`

const ContactInputBox: React.FC = () => {
    return (
        <ContactInput>
            <FormRow>
                <Input className="first-name" type="text" placeholder="First name" name="first_name" required/>
                <Input className="last-name" type="text" placeholder="Last name" name="last_name" required/>
            </FormRow>
            <Input className="email" type="email" placeholder="Email address" name="email" required/>
            <Input className="subject" type="text" placeholder="Subject message" name="subject" required/>
            <Textarea placeholder="Your inquiry here" name="message" rows={4} required/>
            <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactInput>
    )
}

export default ContactInputBox;