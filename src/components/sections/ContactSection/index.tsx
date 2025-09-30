import { Stack, FormControl, Typography, Button } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { Section } from "../../blocks/Section"
import { SectionHeader } from "../../blocks/SectionHeader/SectionHeader"
import { Input } from "../../blocks/Input"
import { useEffect, useState } from "react";

export const ContactSection = () => {

    const [name, setName] = useState<string>('');
    const [company, setCompany] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const submitData = () => {
        const allData = [name, company, email, phone, message]
        console.log(allData)
    }

    return (
        <Section id="contact" sx={{ pb: 10, backgroundColor: '#232323ff' }}>
            <SectionHeader sx={{ textAlign: 'center', color: 'white' }}>Want to learn more?</SectionHeader>
            <Typography sx={{ textAlign: 'center', color: 'white', fontSize: '18px' }}>Fill out the form and contact me!</Typography>
            <FormControl sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px', mt: '40px' }}>
                <Stack width={{ xs: '100%', md: '80%' }} gap={2}>
                    <Stack direction={'row'} gap={2} width={'100%'} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
                        <Input id="name" label="Full Name" onChange={(e) => setName(e.target.value)} />
                        <Input id="company" label="Company Name" onChange={(e) => setCompany(e.target.value)} />
                    </Stack>
                    <Stack direction={'row'} gap={2} width={'100%'} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
                        <Input id="email" label="Email" onChange={(e) => setEmail(e.target.value)} />
                        <Input id="phone" label="Phone" onChange={(e) => setPhone(e.target.value)} />
                    </Stack>
                    <Input id="message" label="Message" multiline onChange={(e) => setMessage(e.target.value)} />
                </Stack>
                <Stack direction={'row'} width={{ xs: '100%', md: '80%' }} justifyContent={'end'}>
                    <Button onClick={submitData}>Send Message<SendIcon sx={{ ml: '20px' }} /></Button>
                </Stack>
            </FormControl>
        </Section >
    )
}