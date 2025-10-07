import {
  Stack,
  FormControl,
  Typography,
  Button,
  CircularProgress,
  Fade,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Section } from '../../blocks/Section';
import { SectionHeader } from '../../blocks/SectionHeader/SectionHeader';
import { Input } from '../../blocks/Input';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = {
  name: boolean;
  email: boolean;
  message: boolean;
};

const initialFormData: FormData = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
};

const initialErrors: FormErrors = {
  name: false,
  email: false,
  message: false,
};

export const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>(initialErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [id]: false }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors = { ...initialErrors };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = true;
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = true;
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = true;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company_name: formData.company,
          phone_number: formData.phone,
          message: formData.message,
        },
        PUBLIC_KEY,
      );

      toast.success('Message sent successfully!');
      setFormData(initialFormData);
      setErrors(initialErrors);

      // Show completion screen
      setIsComplete(true);
    } catch (error) {
      toast.error('Failed to send message. Please try again.' + error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Loading screen overlay
  if (isSubmitting) {
    return (
      <Section
        id="contact"
        sx={{
          pb: 10,
          backgroundColor: '#232323ff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '60vh',
        }}
      >
        <Fade in={true} timeout={500}>
          <Stack alignItems="center" color="white">
            <CircularProgress color="inherit" />
            <Typography sx={{ mt: 3 }}>Sending your message...</Typography>
          </Stack>
        </Fade>
      </Section>
    );
  }

  // Completion screen
  if (isComplete) {
    return (
      <Section
        id="contact"
        sx={{
          pb: 10,
          backgroundColor: '#232323ff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '60vh',
        }}
      >
        <Fade in={true} timeout={600}>
          <Stack alignItems="center" color="white" spacing={2}>
            <CheckCircleIcon sx={{ fontSize: 70, color: '#4caf50' }} />
            <Typography variant="h5" fontWeight="bold">
              Message Sent Successfully!
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.8 }}>
              Thank you for reaching out. I’ll get back to you soon.
            </Typography>
            <Button
              variant="outlined"
              sx={{ mt: 2 }}
              onClick={() => setIsComplete(false)}
            >
              Send Another Message
            </Button>
          </Stack>
        </Fade>
      </Section>
    );
  }

  // Main form
  return (
    <Section id="contact" sx={{ pb: 10, backgroundColor: '#232323ff' }}>
      <SectionHeader sx={{ textAlign: 'center', color: 'white' }}>
        Want to learn more?
      </SectionHeader>
      <Typography
        sx={{ textAlign: 'center', color: 'white', fontSize: '18px' }}
      >
        Fill out the form and contact me!
      </Typography>

      <FormControl
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          mt: '40px',
        }}
      >
        <Stack width={{ xs: '100%', md: '80%' }} gap={2}>
          <Stack
            direction={'row'}
            gap={2}
            width={'100%'}
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          >
            <Input
              id="name"
              label="Full Name *"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              helperText={errors.name ? 'Name is required' : ''}
            />
            <Input
              id="company"
              label="Company Name"
              value={formData.company}
              onChange={handleChange}
            />
          </Stack>

          <Stack
            direction={'row'}
            gap={2}
            width={'100%'}
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          >
            <Input
              id="email"
              label="Email *"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              helperText={errors.email ? 'Email is required' : ''}
            />
            <Input
              id="phone"
              label="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Stack>

          <Input
            id="message"
            label="Message *"
            multiline
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            helperText={errors.message ? 'Message is required' : ''}
          />
        </Stack>

        <Stack
          direction={'row'}
          width={{ xs: '100%', md: '80%' }}
          justifyContent={'end'}
        >
          <Button type="submit" disabled={isSubmitting}>
            Send Message
            <SendIcon sx={{ ml: '20px' }} />
          </Button>
        </Stack>
      </FormControl>
    </Section>
  );
};
