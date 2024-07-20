import React from "react"
import { IconButton } from "@mui/material";
import { PhotoCamera } from '@mui/icons-material';
import styled from "@emotion/styled";

const ImageLoad = styled.label`
  display: inline-block;
  padding: 100px;
  border: 6px dashed white;
  cursor: pointer;
`

interface IProps {
  handleFileChange: (e : React.ChangeEvent<HTMLInputElement>) => void;
}

const ImagePicker = ({handleFileChange} : IProps) => {
  return (
    <React.Fragment>
         <input
          accept="image/*"
          style={{ display: 'none' }}
          id="upload-button"
          type="file"
          onChange={handleFileChange}
        />
        <ImageLoad htmlFor="upload-button">
          <IconButton color="secondary" aria-label="upload picture" component="span" >
            <PhotoCamera fontSize="large" />
          </IconButton>
        </ImageLoad>
    </React.Fragment>
  )
}

export default ImagePicker