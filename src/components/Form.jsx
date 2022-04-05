import { Paper, InputLabel, Select, MenuItem, Grid, Box, TextField, Typography, FormControl, FormControlLabel, Checkbox, Button } from '@mui/material'

import React from 'react'

const Form = () => {
  return (
      <Box>
        <Typography variant="h6"component="h6" sx={{color: "#202140", fontWeight: "bold", mb: 1}}>Form</Typography>
        <Paper>
            <Box component="form" sx={{px: 6, py: 10, boxSizing: "border-box"}} elevation={0}>
                <Grid container columnSpacing={2} sx={{mb: 2}}>
                    <Grid item md={6}>
                        <Typography component="h6" sx={{mb: 0.5}}>First name</Typography>
                            <TextField
                                id="text-input"
                                type="text"
                                sx={{width: "100%"}}
                                />
                    </Grid>
                    <Grid item md={6}>
                        <Typography component="h6" sx={{mb: 0.5}}>Last name</Typography>
                            <TextField
                                id="text-input"
                                type="text"
                                sx={{width: "100%"}}
                                />
                    </Grid>
                </Grid>
                <Box component="section" sx={{mb: 1}}>
                    <Typography sx={{mb: 0.5}}>Email address</Typography>
                    <TextField
                        id="email-input"
                        type="email"
                        sx={{width: "100%"}}
                        helperText="we'll never share your email with anyone else"
                    />      
                </Box>
                <Box component="section" sx={{mb: 1}}>
                    <Typography sx={{mb: 0.5}}>password</Typography>
                    <TextField
                        id="password-input"
                        type="password"
                        sx={{width: "100%"}}
                    />      
                </Box>
                <Box cpmponent="section" sx={{mb: 1}}>
                    <Typography component="h6" sx={{mb: 0.5}}>Message</Typography>
                    <TextField
                        multiline
                        minRows={4}
                        aria-label="message textarea"
                        sx={{width: "100%"}}
                    />
                </Box>
                <Box cpmponent="section" sx={{mb: 1}}>
                    <Typography component="h6" sx={{mb: 0.5}}>Select</Typography>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">KwesiDev</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="KwesiDev"
                            >
                            <MenuItem value="Job title">FrontEnd Developer</MenuItem>
                            <MenuItem value="opportunities">Always open to opportunities</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box component="section" sx={{mb: 1}}>
                    <FormControlLabel control={<Checkbox defaultChecked color="error"/>} label="Frontend Developer" />
                </Box>
                <Button>Submit</Button>
            </Box>
        </Paper>
    </Box>
  )
}

export default Form