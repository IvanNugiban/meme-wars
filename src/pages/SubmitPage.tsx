
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Box, Button, CircularProgress, IconButton, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import HotWalletIcon from '../icons/HotWalletIcon';
import Submit from '../store/Submit';
import Container from '../ui/Container';
import ErrorMessage from '../ui/ErrorMessage';
import ImagePicker from '../ui/ImagePicker';
import Loader from '../ui/Loader';
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

  const handleFileChange = (file: File) => {
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
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
      <Box height='100%' display='flex' flexDirection='column' justifyContent='space-between' alignItems='center' textAlign="center" gap={2}>
        <Box>
          <Typography textAlign='center' variant='h4' fontFamily='ComicSansMS' sx={{ marginBottom: "5px" }}>
            Upload your meme
          </Typography>
          <Typography textAlign='center' variant='h5' fontFamily='ComicSansMS'>
            (it will participate in tomorrow's contest)
          </Typography>
        </Box>

        {!preview ? <ImagePicker handleFileChange={handleFileChange} /> :
          <Box position='relative' mt={2}>
            <img src={preview} alt="Preview" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
            <IconButton onClick={reset} sx={{ position: 'absolute', right: 0, top: 0, transform: "translate(50%, -50%)" }} color="error" aria-label="cancel picture" >
              <CancelOutlinedIcon fontSize="large" />
            </IconButton>
          </Box>
        }
        <Box mt={2}>
          <Button
            sx={{ fontFamily: 'ComicSansMS' }}
            variant="contained"
            size='large'
            color="primary"
            disabled={!selectedFile || Submit.isLoading}
            onClick={handleUpload}
          >
            {Submit.isLoading ? <CircularProgress size={24} /> :
              <Box display='flex' justifyContent='center'>
                <Box mr={1}>Upload</Box> (1
                <HotWalletIcon />
                )
              </Box>}
          </Button>
        </Box>
      </Box>
    </Container>
  )
})

export default SubmitPage