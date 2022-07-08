import React from "react";
import "./DateTimePicker.css";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import TextField from "@mui/material/TextField";
//import { set } from "date-fns";
// import Popup from "./Popup";
import { Radio, RadioGroup } from "@material-ui/core";
import Tooltip from "@mui/material/Tooltip";
// import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import moment from "moment";
// import { CTimePicker } from '@coreui/react-pro'
// import KendoTimePicker from "kendo-ui-react-jquery-timepicker";
//Don't forget CSS, webpack used to include CSS
// import "kendo-ui-core/css/web/kendo.common.core.min.css";
// import "kendo-ui-core/css/web/kendo.default.min.css";

const DateTimePicker1 = () => {
  const [fields, setFields] = React.useState({
    date: false,
    time: false,
  });

  const { date, time } = fields;

  const handleFieldsChange1 = (event) => {
    // if (date === true && time === true) {
    //   console.log("Error");
    // } else {
    //   setFields({ ...fields, [event.target.name]: event.target.checked });
    // }
    setFields({ ...fields, [event.target.name]: event.target.checked });
  };
  const handleFieldsChange2 = (event) => {
    // if (date === false && time === false) {
    //   console.log("Error");
    // } else {
    //   setFields({ ...fields, [event.target.name]: event.target.checked });
    // }
    setFields({ ...fields, [event.target.name]: event.target.checked });
  };

  const [category, setCategory] = React.useState();

  const [isHighlighted1, setIsHighlighted1] = React.useState(false);
  const [read1, setRead1] = React.useState(true);
  const [isHighlighted2, setIsHighlighted2] = React.useState(false);
  const [read2, setRead2] = React.useState(true);
  const [isHighlighted3, setIsHighlighted3] = React.useState(false);
  const [isHighlighted4, setIsHighlighted4] = React.useState(false);
  const [isHighlighted5, setIsHighlighted5] = React.useState(false);
  const [isHighlighted6, setIsHighlighted6] = React.useState(false);

  //const [popup, setPopup] = React.useState(false);

  const handleClick1 = () => {
    // if (date === true && time === true) {
    //   setPopup((show) => !show);
    // } else {
    //   setIsHighlighted1((current) => !current);
    //   setRead1((current) => !current);
    // }
    if (isHighlighted1 === false) {
      setIsHighlighted1((current) => !current);
      setRead1((current) => !current);
      if (isHighlighted3) {
        setIsHighlighted3(false);
      } else if (isHighlighted4) {
        setIsHighlighted4(false);
      } else if (isHighlighted5) {
        setIsHighlighted5(false);
      } else if (isHighlighted6) {
        setIsHighlighted6(false);
      }
    } else {
      console.log("Radio Button Can't Be Deselected on Pressing again on it");
    }
  };
  const handleClick2 = () => {
    // if (date === true && time === false) {
    //   setIsHighlighted2((current) => !current);
    //   setRead2((current) => !current);
    // } else if (date === false && time === true) {
    //   setIsHighlighted2((current) => (current ? !current : current)); //Only Ternary conditional works inside function logics
    //   setRead2((current) => (!current ? !current : current));
    // } else if (date === true && time === true) {
    //   setIsHighlighted2((current) => !current);
    //   setRead2((current) => !current);
    // } else {
    //   setPopup((show) => !show);
    // } //Several cases had to be dealt with here
    setIsHighlighted2((current) => !current);
    setRead2((current) => !current);
  };
  // const togglePopup = (show) => {
  //   setPopup(!show);
  // };
  const handleClick3 = () => {
    if (isHighlighted3 === false) {
      setIsHighlighted3((current) => !current);
      if (isHighlighted1) {
        setIsHighlighted1(false);
        setRead1(true);
      } else if (isHighlighted4) {
        setIsHighlighted4(false);
      } else if (isHighlighted5) {
        setIsHighlighted5(false);
      } else if (isHighlighted6) {
        setIsHighlighted6(false);
      }
    }
  };
  const handleClick4 = () => {
    if (isHighlighted4 === false) {
      setIsHighlighted4((current) => !current);
      if (isHighlighted1) {
        setIsHighlighted1(false);
        setRead1(true);
      } else if (isHighlighted3) {
        setIsHighlighted3(false);
      } else if (isHighlighted5) {
        setIsHighlighted5(false);
      } else if (isHighlighted6) {
        setIsHighlighted6(false);
      }
    }
  };
  const handleClick5 = () => {
    if (isHighlighted5 === false) {
      setIsHighlighted5((current) => !current);
      if (isHighlighted1) {
        setIsHighlighted1(false);
        setRead1(true);
      } else if (isHighlighted3) {
        setIsHighlighted3(false);
      } else if (isHighlighted4) {
        setIsHighlighted4(false);
      } else if (isHighlighted6) {
        setIsHighlighted6(false);
      }
    }
  };
  const handleClick6 = () => {
    if (isHighlighted6 === false) {
      setIsHighlighted6((current) => !current);
      if (isHighlighted1) {
        setIsHighlighted1(false);
        setRead1(true);
      } else if (isHighlighted3) {
        setIsHighlighted3(false);
      } else if (isHighlighted4) {
        setIsHighlighted4(false);
      } else if (isHighlighted5) {
        setIsHighlighted5(false);
      }
    }
  };

  const [value1, setValue1] = React.useState(new Date());
  const [value2, setValue2] = React.useState(new Date("2022-12-31T23:59:59"));
  // const [value3, setValue3] = React.useState(new Date("2022-06-23T00:00:00"));
  // const [value4, setValue4] = React.useState(new Date("2022-06-23T23:45:00"));
  const now = moment().hour(0).minute(0);
  const then = moment().hour(23).minute(45);
  const format = "h:mm a";

  const handleChange1 = (newValue) => {
    setValue1(newValue);
    console.log(newValue);
  };
  const handleChange2 = (newValue) => {
    setValue2(newValue);
    console.log(newValue);
  };
  // const handleChange3 = (newValue) => {
  //   setValue3(newValue);
  //   console.log(newValue);
  // };
  // const handleChange4 = (newValue) => {
  //   setValue4(newValue);
  //   console.log(newValue);
  // };

  // const color = "orange";
  // const [time1, setTime1] = React.useState("");

  function getTime(value) {
    console.log(value && value.format(format));
  }

  return (
    <div className="datetime">
      <FormControl component="fieldset">
        {/* <FormLabel
          component="legend"
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#ffa500",
            fontSize: "30px",
          }}
        >
          Filters
        </FormLabel> */}
        <RadioGroup
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <div
            className="date"
            style={{
              backgroundColor: isHighlighted1 ? "	#7fffd4" : "",
            }}
          >
            <FormControlLabel
              value="date"
              control={
                <Radio
                  onChange={handleFieldsChange1}
                  onClick={handleClick1}
                  name="date"
                />
              }
              label="Date"
            />
            <div className="fromto">
              <div className="from">
                <span style={{ marginRight: "20px" }}>From</span>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    views={["day", "month", "year"]}
                    label="Date"
                    inputFormat="dd/MM/yyyy"
                    minDate={value1}
                    value={value1}
                    onChange={handleChange1}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        helperText={null}
                        sx={{ width: "45%" }}
                      />
                    )}
                    readOnly={read1}
                  />
                </LocalizationProvider>
              </div>
              <div className="to">
                <span style={{ marginRight: "20px", marginLeft: "20px" }}>
                  To
                </span>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    views={["day", "month", "year"]}
                    label="Date"
                    inputFormat="dd/MM/yyyy"
                    minDate={value1}
                    maxDate={"31/10/2022"}
                    value={value2}
                    onChange={handleChange2}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        helperText={null}
                        sx={{ width: "45%" }}
                      />
                    )}
                    readOnly={read1}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>
          <hr />
          <div
            className="today"
            style={{
              backgroundColor: isHighlighted3 ? "#7fffd4" : "",
            }}
          >
            <Tooltip title="This option will show All the Available Slots of Today">
              <FormControlLabel
                value="today"
                control={<Radio onClick={handleClick3} name="today" />}
                label="Today"
              />
            </Tooltip>
          </div>
          <hr />
          <div
            className="tomorrow"
            style={{
              backgroundColor: isHighlighted4 ? "#7fffd4" : "",
            }}
          >
            <Tooltip title="This option will show All the Available Slots of Tomorrow">
              <FormControlLabel
                value="tomorrow"
                control={<Radio onClick={handleClick4} name="tomorrow" />}
                label="Tomorrow"
              />
            </Tooltip>
          </div>
          <hr />
          <div
            className="week"
            style={{
              backgroundColor: isHighlighted5 ? "#7fffd4" : "",
            }}
          >
            <Tooltip title="This option will show All the Available Slots for the Next 7 Days starting from Today">
              <FormControlLabel
                value="week"
                control={<Radio onClick={handleClick5} name="week" />}
                label="One Week from Now"
              />
            </Tooltip>
          </div>
          <hr />
          <div
            className="month"
            style={{
              backgroundColor: isHighlighted6 ? "#7fffd4" : "",
            }}
          >
            <Tooltip title="This option will show All the Available Slots for the Next 1 Month starting from Today">
              <FormControlLabel
                value="month"
                control={<Radio onClick={handleClick6} name="month" />}
                label="One Month from Now"
              />
            </Tooltip>
          </div>
          <hr
            style={{
              height: "5px",
              backgroundColor: "green",
              border: "1px solid",
            }}
          />
        </RadioGroup>
        <FormGroup>
          <div
            className="time"
            style={{
              backgroundColor: isHighlighted2 ? "#7fffd4" : "",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={time}
                  onChange={handleFieldsChange2}
                  onClick={handleClick2}
                  name="time"
                />
              }
              label="Time"
            />
            {/* {popup && <Popup handleClose={togglePopup} />} */}
            <div className="fromto">
              <div className="from">
                <span>From</span>
                {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePicker
                    label="Time"
                    value={value3}
                    minutesStep={15}
                    onChange={handleChange3}
                    renderInput={(params) => <TextField {...params} />}
                    readOnly={read2}
                  />
                </LocalizationProvider> */}
                <TimePicker
                  label="Time"
                  defaultValue={now}
                  placeholder="Select Time"
                  use12Hours
                  showSecond={false}
                  focusOnOpen={true}
                  minuteStep={15}
                  format={format}
                  onChange={getTime}
                  disabled={read2}
                />
              </div>
              <div className="to">
                <span style={{ marginLeft: "15px" }}>To</span>
                {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePicker
                    label="Time"
                    value={value4}
                    minTime={value3}
                    minutesStep={15}
                    onChange={handleChange4}
                    renderInput={(params) => <TextField {...params} />}
                    readOnly={read2}
                  />
                </LocalizationProvider> */}
                <TimePicker
                  label="Time"
                  defaultValue={then}
                  placeholder="Select Time"
                  use12Hours
                  showSecond={false}
                  focusOnOpen={true}
                  minuteStep={15}
                  format={format}
                  onChange={getTime}
                  disabled={read2}
                />
              </div>
            </div>
          </div>
        </FormGroup>
        {/* <TimePickerComponent step={15} /> */}

        {/* <div class="container" style={{ margin: "100px" }}>
          <div style={{ position: "relative" }}>
            <input className="form-control" type="text" id="datetime" />
          </div>
        </div> */}
      </FormControl>
      {/* <CTimePicker locale="en-US" /> */}
      {/* <KendoTimePicker>
        <input value="10:00 AM" />
      </KendoTimePicker> */}
    </div>
  );
};

export default DateTimePicker1;
