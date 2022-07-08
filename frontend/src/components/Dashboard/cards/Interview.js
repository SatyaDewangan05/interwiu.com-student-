import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Divider } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

import {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
} from ".././days";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const display = (day) => {
  const date = day.toLocaleDateString();
  day = day.getDay();
  if (day === 0) {
    return <Sunday date={date} />;
  } else if (day === 1) {
    return <Monday date={date} />;
  } else if (day === 2) {
    return <Tuesday date={date} />;
  } else if (day === 3) {
    return <Wednesday date={date} />;
  } else if (day === 4) {
    return <Thursday date={date} />;
  } else if (day === 5) {
    return <Friday date={date} />;
  } else {
    return <Saturday date={date} />;
  }
};

const Interview = ({ name, desg, price, logo }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [date, setDate] = useState(new Date());
  return (
    <>
      <div className="search-result-item">
        <div className="search-result-item-head flex">
          <div>
            <div className="flex">
              <div className="interviewer-logo">
                <img src={logo} alt="google" />
              </div>
              <div className="interviewer-head">
                <div className="flex">
                  <h4 className="text-2xl font-[500]">{name}</h4>
                  <div className="head-icon flex">
                    <i class="fa-solid fa-bookmark"></i>
                  </div>
                  <div className="head-icon flex">
                    <i class="fa-solid fa-share"></i>
                  </div>
                </div>
                <p>{desg}</p>
              </div>
            </div>
            <div className="details flex">
              <div className="detail">
                <p className="detail-head">Profile</p>
                <p className="detail-body">Data Science</p>
              </div>
              <div className="detail">
                <p className="detail-head">Price</p>
                <p className="detail-body">{price}</p>
              </div>
              <div className="detail">
                <p className="detail-head">Session Duration</p>
                <p className="detail-body">45 Min</p>
              </div>
            </div>
          </div>
          <div className="search-result-item-profile">
            <img src={require("../../../images/photo.png")} alt="Profile" />
            <Link
              className="search-view-btn text-sky-400 underline"
              to="/interviewer-dashboard"
            >
              View Profile
            </Link>
          </div>
        </div>
        <div className="search-result-item-desc">
          <div className="time-preference">
            <p>Slots Available </p>
            <ul className="slot-list">
              <li className="px-2 mx-2 my-1 rounded bg-green-700 text-white">
                Sun (5-7 pm)
              </li>
              <li className="px-2 mx-2 my-1 rounded bg-green-700 text-white">
                Mon (3-4 pm)
              </li>
              <li className="px-2 mx-2 my-1 rounded bg-green-700 text-white">
                Tue (5-7 pm)
              </li>
              <li className="px-2 mx-2 my-1 rounded bg-orange-500 text-white">
                Wed (3-4 pm)
              </li>
              <li className="px-2 mx-2 my-1 rounded bg-green-700 text-white">
                Thu (5-7 pm)
              </li>
              <li className="px-2 mx-2 my-1 rounded bg-red-700 text-white">
                Fri (3-4 pm)
              </li>
              <li className="px-2 mx-2 my-1 rounded bg-green-700 text-white">
                Sat (5-7 pm)
              </li>
            </ul>
          </div>
          <div className="search-result-item-btns flex">
            <Button
              style={{ marginTop: "10px" }}
              variant="contained"
              onClick={handleOpen}
            >
              Request a Mock Interview with Feedback Session
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Box
                  sx={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                  }}
                >
                  <CloseIcon onClick={handleClose} />
                </Box>
                <Typography
                  id="modal-modal-title"
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    mb: 2,
                  }}
                >
                  Request a Mock Interview with Mr. John Doe
                </Typography>

                <Grid container spacing={2}>
                  <Grid xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <CalendarPicker
                        date={date}
                        format="dd/MM/yyyy"
                        onChange={(newDate) => setDate(newDate)}
                        views={["day"]}
                        disablePast={true}
                      />
                    </LocalizationProvider>
                  </Grid>

                  <Grid
                    xs={6}
                    sx={{
                      mt: 2,
                    }}
                  >
                    {display(date)}
                    <Grid xs={12} sx={{ textAlign: "center" }}>
                      <Button variant="contained">Confirm Slot</Button>
                    </Grid>
                  </Grid>
                  <Grid xs={12} sx={{ textAlign: "center" }}>
                    <Button variant="contained">Send Request</Button>
                  </Grid>
                </Grid>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interview;
