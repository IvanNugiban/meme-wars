
import { useEffect, useState } from 'react'
import Container from '../ui/Container'
import { Box, Button, CircularProgress, IconButton, Typography } from '@mui/material';
import ImagePicker from '../ui/ImagePicker';
import { observer } from 'mobx-react-lite';
import Submit from '../store/Submit';
import Loader from '../ui/Loader';
import ErrorMessage from '../ui/ErrorMessage';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import SuccessMessage from '../ui/SuccessMessage';

const SubmitPage = observer(() => {

  useEffect(() => {
    if (!Submit.fetched) Submit.userSumbited();
  }, [])

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  if (Submit.isLoading && !Submit.fetched) return <Loader />
  if (Submit.error) return <ErrorMessage text={Submit.error} />;
  if (Submit.isUserSubmited) return <SuccessMessage text="You successfully submited your meme." />

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    if (!selectedFile) return;
    Submit.uploadMeme(selectedFile);
  };
  
  const reset = () => {
    setSelectedFile(null);
    setPreview(null);
  }

  return (
    <Container>
      <Box height='100%' display='flex' flexDirection='column' justifyContent='space-between' alignItems='center'  textAlign="center" gap={2}>
        <Box>
          <Typography textAlign='center' variant='h4' fontFamily='cursive' sx={{ marginBottom: "5px" }}>
            Upload your meme
          </Typography>
          <Typography textAlign='center' variant='h5' fontFamily='cursive'>
            (it will participate in tomorrow's contest)
          </Typography>
        </Box>

        {!preview ? <ImagePicker handleFileChange={handleFileChange} /> :
          <Box position='relative' mt={2}>
            <img src={preview} alt="Preview" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
            <IconButton onClick={reset} sx={{position: 'absolute', right: 0, top: 0, transform: "translate(50%, -50%)"}} color="error" aria-label="cancel picture" >
              <CancelOutlinedIcon fontSize="large" />
            </IconButton>
          </Box>
        }
        <Box mt={2}>
          <Button
            variant="contained"
            size='large'
            color="primary"
            disabled={!selectedFile || Submit.isLoading}
            onClick={handleUpload}
          >
            {Submit.isLoading ? <CircularProgress size={24} /> : 'Upload'}
          </Button>
        </Box>
      </Box>
    </Container>
  )
})

export default SubmitPage