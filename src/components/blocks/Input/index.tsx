import { TextField, InputAdornment } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';

export const Input = ({
  label,
  id,
  sx = [],
  multiline,
  value,
  onChange,
  error = false,
  helperText,
}: {
  label: string;
  id: string;
  sx?: SxProps<Theme>;
  value: string;
  multiline?: boolean;
  onChange: (
    _e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  error?: boolean;
  helperText?: string;
}) => {
  return (
    <TextField
      id={id}
      label={label}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      variant="filled"
      multiline={multiline ?? false}
      minRows={multiline ? 8 : undefined}
      maxRows={multiline ? 8 : undefined}
      sx={[
        {
          width: '100%',
          color: 'white',
          background: '#646464ff',
          '& .MuiInputBase-input': {
            color: 'white',
          },
          borderRadius: 2,
          '& .MuiInputLabel-root': {
            color: 'white',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'white',
          }, // Custom error color for helper text
          '& .MuiFormHelperText-root.Mui-error': {
            color: '#ff6b6bff',
          },
          '& .MuiFilledInput-underline:hover:before': {
            borderBottomColor: '#edf8ffff',
          },
          '& .MuiFilledInput-underline:after': {
            borderBottomColor: '#8dd3ffff',
          }, // Ensure background color remains on error state
          '& .MuiFilledInput-root.Mui-error': {
            background: '#646464ff',
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" sx={{ color: 'white' }} />
        ),
      }}
    />
  );
};
