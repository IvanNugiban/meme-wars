import styled from "@emotion/styled";
import { PhotoCamera } from '@mui/icons-material';
import { IconButton } from "@mui/material";
import React from "react";
import AlertStore from "../store/AlertStore";

const ImageLoad = styled.label`
  display: flex;
  justify-content: center;
  padding: 12vh;
  border: 6px dashed white;
  cursor: pointer;
`

interface IProps {
  handleFileChange: (file: File) => void;
}

const ImagePicker = ({ handleFileChange }: IProps) => {
  return (
    <React.Fragment>
      <input
        accept=".gif, .png, .jpeg, .jpg"
        style={{ display: 'none' }}
        id="upload-button"
        type="file"
        onChange={(e) => {
          const file = e.target.files?.[0];

          if (!file) return AlertStore.setAlert("'Please select a file.", "error");

          const validTypes = ['image/gif', 'image/png', 'image/jpeg', 'image/jpg'];

          if (!validTypes.includes(file.type)) 
            return AlertStore.setAlert('Only GIF, PNG, JPG and JPEG images are allowed.', "error");
          

          handleFileChange(file);
        }}
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