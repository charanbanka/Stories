import { Grid, IconButton, InputAdornment, TextField } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React from 'react';

const Input = ({name,label,half,handleChange,autoFocus,type,handleShowPassword}) => {
  return (
      <Grid item xs={12} sm={half?6:12} height="20px">
          <TextField 
            name={name}
            label={label}
            variant ="outlined"
            required
            fullWidth
            onChange={handleChange}
            autoFocus={autoFocus}
            type={type}
            InputProps={name==="password" ?{
                endAdornment:(
                    <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                            {type==="password"?<Visibility/> :<VisibilityOff/> }
                        </IconButton>
                    </InputAdornment>
                )
            }:null}
          />

      </Grid>

  )
};

export default Input;
