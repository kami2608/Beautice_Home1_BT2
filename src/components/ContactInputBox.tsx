import tw from "twin.macro"
import styled from "@emotion/styled"

const ContactInput = styled.form`
    ${tw`flex flex-col justify-center items-center gap-5`}
`

const FormRow = styled.div`
    ${tw`flex gap-5`}
`

const Input = styled.input`
    ${tw`w-96 p-3 border border-gray-200 rounded-md`}
`

const Textarea = styled.textarea`
    ${tw`w-96 p-3 border border-gray-200 rounded-md`}
`

const SubmitButton = styled.button`
    ${tw`w-96 p-3 bg-blue-500 text-white rounded-md`}
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