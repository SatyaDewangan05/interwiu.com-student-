import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Grid } from "@mui/material";

const Sunday = (date) => {
    const [tate, settate] = React.useState("");
    
    const handleChange = (ev) => {
      settate(ev.target.value);
    };
  return (
    <>
           <FormControl component="fieldset" name="method-of-payment">
        <RadioGroup onChange={handleChange} value={tate}>
          <Grid container spacing={2} sx={{mt:2}}>
            <Grid item xs={6} >
              <FormControlLabel
                value="9:30 AM-10:15 AM"
                control={<Radio />}
                label="9:30 AM-10:15 AM"
                sx={{
              backgroundColor:"aqua",
              borderRadius:8
            }}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                value="1:30 AM-2:15 AM"
                control={<Radio />}
                label="1:30 AM-2:15 AM"
                sx={{
              backgroundColor:"aqua",
              borderRadius:8
            }}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                value="10:30 AM-11:15 AM"
                control={<Radio />}
                label="10:30 AM-11:15 AM"
                sx={{
              backgroundColor:"aqua",
              borderRadius:8
            }}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                value="2:30 AM-3:15 AM"
                control={<Radio />}
                label="2:30 AM-3:15 AM"
                sx={{
              backgroundColor:"aqua",
              borderRadius:8
            }}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                value="6:30 AM-7:15 AM"
                control={<Radio />}
                label="6:30 AM-7:15 AM"
                sx={{
              backgroundColor:"aqua",
              borderRadius:8
            }}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                value="5:30 AM-6:15 AM"
                control={<Radio />}
                label="5:30 AM-6:15 AM"
                sx={{
              backgroundColor:"aqua",
              borderRadius:8
            }}
              />
            </Grid>
          </Grid>
        </RadioGroup>
      </FormControl>
      <p>{`Your selected slot on ${date.date} is at ${tate}`}</p>
    </>
  );
};
const Monday = (date) => {
    const [tate, settate] = React.useState("");

  const handleChange = (ev) => {
    settate(ev.target.value);
  };
  return (
    <>
     <FormControl component="fieldset" name="method-of-payment">
        <RadioGroup onChange={handleChange} value={tate}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <FormControlLabel
                value="9:30 AM"
                control={<Radio />}
                label="9:30 AM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="10:30 AM"
                control={<Radio />}
                label="10:30 AM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="11:30 AM"
                control={<Radio />}
                label="11:30 AM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="7:30 PM"
                control={<Radio />}
                label="7:30 PM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="4:30 PM"
                control={<Radio />}
                label="4:30 PM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="6:30 PM"
                control={<Radio />}
                label="6:30 PM"
              />
            </Grid>
          </Grid>
        </RadioGroup>
      </FormControl>
      <p>{`Your selected slot on ${date.date} is at ${tate}`}</p>
    </>
  )
};
const Tuesday = (date) => {
  const [tate, settate] = React.useState("");
    
    const handleChange = (ev) => {
      settate(ev.target.value);
    };
  return (
    <>
         <FormControl component="fieldset" name="method-of-payment">
        <RadioGroup onChange={handleChange} value={tate}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <FormControlLabel
                value="9:30 AM"
                control={<Radio />}
                label="9:30 AM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="10:30 AM"
                control={<Radio />}
                label="10:30 AM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="11:30 AM"
                control={<Radio />}
                label="11:30 AM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="7:30 PM"
                control={<Radio />}
                label="7:30 PM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="4:30 PM"
                control={<Radio />}
                label="4:30 PM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="6:30 PM"
                control={<Radio />}
                label="6:30 PM"
              />
            </Grid>
          </Grid>
        </RadioGroup>
      </FormControl>
      <p>{`Your selected slot on ${date.date} is at ${tate}`}</p>
    </>
  );
};
const Wednesday = (date) => {
  const [tate, settate] = React.useState("");
    
    const handleChange = (ev) => {
      settate(ev.target.value);
    };
  return (
    <>
         <FormControl component="fieldset" name="method-of-payment">
        <RadioGroup onChange={handleChange} value={tate}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <FormControlLabel
                value="9:30 AM"
                control={<Radio />}
                label="9:30 AM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="10:30 AM"
                control={<Radio />}
                label="10:30 AM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="11:30 AM"
                control={<Radio />}
                label="11:30 AM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="7:30 PM"
                control={<Radio />}
                label="7:30 PM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="4:30 PM"
                control={<Radio />}
                label="4:30 PM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="6:30 PM"
                control={<Radio />}
                label="6:30 PM"
              />
            </Grid>
          </Grid>
        </RadioGroup>
      </FormControl>
      <p>{`Your selected slot on ${date.date} is at ${tate}`}</p>
    </>
  )
};
const Thursday = (date) => {
  const [tate, settate] = React.useState("");
    
    const handleChange = (ev) => {
      settate(ev.target.value);
    };
  return (
    <>
         <FormControl component="fieldset" name="method-of-payment">
        <RadioGroup onChange={handleChange} value={tate}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <FormControlLabel
                value="9:30 AM"
                control={<Radio />}
                label="9:30 AM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="10:30 AM"
                control={<Radio />}
                label="10:30 AM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="11:30 AM"
                control={<Radio />}
                label="11:30 AM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="7:30 PM"
                control={<Radio />}
                label="7:30 PM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="4:30 PM"
                control={<Radio />}
                label="4:30 PM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="6:30 PM"
                control={<Radio />}
                label="6:30 PM"
              />
            </Grid>
          </Grid>
        </RadioGroup>
      </FormControl>
      <p>{`Your selected slot on ${date.date} is at ${tate}`}</p>
    </>
  );
};
const Friday = (date) => {
  const [tate, settate] = React.useState("");
    
    const handleChange = (ev) => {
      settate(ev.target.value);
    };
  return (
    <>
         <FormControl component="fieldset" name="method-of-payment">
        <RadioGroup onChange={handleChange} value={tate}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <FormControlLabel
                value="9:30 AM"
                control={<Radio />}
                label="9:30 AM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="10:30 AM"
                control={<Radio />}
                label="10:30 AM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="11:30 AM"
                control={<Radio />}
                label="11:30 AM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="7:30 PM"
                control={<Radio />}
                label="7:30 PM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="4:30 PM"
                control={<Radio />}
                label="4:30 PM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="6:30 PM"
                control={<Radio />}
                label="6:30 PM"
              />
            </Grid>
          </Grid>
        </RadioGroup>
      </FormControl>
      <p>{`Your selected slot on ${date.date} is at ${tate}`}</p>
    </>
  )
};
const Saturday = (date) => {
  const [tate, settate] = React.useState("");
    
    const handleChange = (ev) => {
      settate(ev.target.value);
    };
  return (
    <>
         <FormControl component="fieldset" name="method-of-payment">
        <RadioGroup onChange={handleChange} value={tate}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <FormControlLabel
                value="9:30 AM"
                control={<Radio />}
                label="9:30 AM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="10:30 AM"
                control={<Radio />}
                label="10:30 AM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="11:30 AM"
                control={<Radio />}
                label="11:30 AM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="7:30 PM"
                control={<Radio />}
                label="7:30 PM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="4:30 PM"
                control={<Radio />}
                label="4:30 PM"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                value="6:30 PM"
                control={<Radio />}
                label="6:30 PM"
              />
            </Grid>
          </Grid>
        </RadioGroup>
      </FormControl>
      <p>{`Your selected slot on ${date.date} is at ${tate}`}</p>
    </>
  );
};
export { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
