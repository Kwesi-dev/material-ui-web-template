import { Paper, InputLabel, Select, MenuItem, Grid, Box, TextField, Typography, FormControl, FormControlLabel, Checkbox, Button } from '@mui/material'
import React from 'react'

const Form = () => {
    const [change, setChange] = React.useState("")
    const handleChange = () =>{
        setChange(change)
    }
  return (
      <Box sx={{width: "100%"}}>
        <Typography variant="h6"component="h6" sx={{color: "#202140", fontWeight: "bold", mb: 1}}>Form</Typography>
        <Paper>
            <Box component="form" sx={{px: 6, py: 10, boxSizing: "border-box"}} elevation={0}>
                <Grid container columnSpacing={2} sx={{mb: 2}}>
                    <Grid item xs={12} sm={6}>
                        <Typography component="h6" sx={{mb: 0.5, fontSize: { xs: "0.9rem", mobile: "1rem"}}}>First name</Typography>
                            <TextField
                                type="text"
                                sx={{width: "100%", fontSize: { xs: "0.9rem", mobile: "1rem"}}}
                                />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography component="h6" sx={{mb: 0.5, fontSize: { xs: "0.9rem", mobile: "1rem"}}}>Last name</Typography>
                            <TextField
                                type="text"
                                sx={{width: "100%", fontSize: { xs: "0.9rem", mobile: "1rem"}}}
                                />
                    </Grid>
                </Grid>
                <Box component="section" sx={{mb: 1}}>
                    <Typography sx={{mb: 0.5, fontSize: { xs: "0.9rem", mobile: "1rem"}}}>Email address</Typography>
                    <TextField
                        id="email-input"
                        type="email"
                        sx={{width: "100%", fontSize: { xs: "0.9rem", mobile: "1rem"}}}
                        helperText="we'll never share your email with anyone else"
                    />      
                </Box>
                <Box component="section" sx={{mb: 1}}>
                    <Typography sx={{mb: 0.5, fontSize: { xs: "0.9rem", mobile: "1rem"}}}>password</Typography>
                    <TextField
                        id="password-input"
                        type="password"
                        sx={{width: "100%", fontSize: { xs: "0.9rem", mobile: "1rem"}}}
                    />      
                </Box>
                <Box cpmponent="section" sx={{mb: 1}}>
                    <Typography component="h6" sx={{mb: 0.5, fontSize: { xs: "0.9rem", mobile: "1rem"}}}>Message</Typography>
                    <TextField
                        multiline
                        minRows={4}
                        aria-label="message textarea"
                        sx={{width: "100%", fontSize: { xs: "0.9rem", mobile: "1rem"}}}
                    />
                </Box>
                <Box cpmponent="section" sx={{mb: 1, fontSize: { xs: "0.9rem", mobile: "1rem"}}}>
                    <Typography component="h6" sx={{mb: 0.5, fontSize: { xs: "0.9rem", mobile: "1rem"}}}>Select</Typography>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">KwesiDev</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="KwesiDev"
                            value={change}
                            onChange={handleChange}
                            >
                            <MenuItem value="Job title">FrontEnd Developer</MenuItem>
                            <MenuItem value="opportunities">Always open to opportunities</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box component="section" sx={{mb: 1}}>
                    <FormControlLabel control={<Checkbox defaultChecked color="error"/>} label="Frontend Developer" sx={{fontSize: { xs: "0.9rem", mobile: "1rem"}}}/>
                </Box>
                <Button sx={{fontSize: { xs: "0.9rem", mobile: "1rem"}}}>Submit</Button>
            </Box>
        </Paper>
    </Box>
  )
}

export default Form