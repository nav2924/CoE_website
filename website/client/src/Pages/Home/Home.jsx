/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Navbar } from "../../components";
import { MagicCard } from "@/components/magicui/magic-card";
import {
  Card,
  CardContent,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import TextReveal from "@/components/magicui/text-reveal";

function Home() {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState("");

  const handleOpenDialog = (content) => {
    setDialogContent(content);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setDialogContent("");
  };

  const visionContent = `
    Vision
    Energizing a new era of Electric Mobility through education, innovation, and collaborative excellence.
    Mission
  `;

  const Mission = `
    Dedicated to propelling the future of sustainable transportation, the center fosters innovation, encourages knowledge sharing, and promotes industry collaboration. It offers a dynamic platform for students, researchers, and industry leaders to explore, develop, and implement cutting-edge e-mobility technologies.
  `;

  const objectiveMessage = `
   Objectives
    • To develop proof of concepts, innovative solutions and subsystems in E-Mobility.
    • To conduct training in Electric Vehicle technologies in collaboration with industries.
    • To develop Vocational and Skill development courses on E-Mobility.
    • To develop a blended learning platform on Electric Vehicle Technology, catering to students, researchers and industry professionals, and offering comprehensive training modules for academia and industry needs.
    • To provide consultancy to electric mobility companies and to participate in product development.
    • To promote Startups in E-Mobility.
  `;

  const latestNewsContent =
    "Upcoming events, seminars, workshops, and conferences.";

  return (
    <>
      <Navbar />
      <div className="p-4">
        <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg border bg-white dark:bg-black p-8" style={{borderRadius:'20px',margin:'30px'}}>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4" style={{ color: "#1381ff",fontWeight:'bolder' }}>
              WELCOME TO CENTRE OF EXCELLENCE
            </h1>
            <p
              className="leading-relaxed"
              style={{
                color: "grey",
                fontSize: "18px",
                textAlign: "left",
                // background: "#f5f5f5",
                padding: "20px",
                borderRadius: "10px",
                // boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              Welcome to the Centre of Excellence in e-Mobility at CHRIST (Deemed to be University). As Head of the Centre, I am delighted to invite you to explore the innovative and transformative world of e-mobility with us. <br />
              Since our inception as the E-Mobility R & D Centre in 2018, we have continuously evolved, driven by our commitment to excellence in research, education, and industry collaboration. Our partnership with Decibels Lab Pvt. Ltd. and support from Safran Engineering Services and IEEE have been instrumental in this journey. <br />
              At the Centre of Excellence in e-Mobility, we focus on critical areas such as Energy Storage Systems, Advanced Powertrain Technologies, Software-Driven Vehicles, and Sustainable Transportation. Our goal is to equip students, researchers, and industry professionals with the knowledge and skills needed to lead in the rapidly advancing field of e-mobility. <br />
              We offer a range of programs, including M.Tech in Storage Materials with a specialization in Battery Management Systems, PGDM in Electric Vehicle Technology, and various certification courses. Additionally, our consultancy services and startup incubation support further our mission to foster innovation and sustainable solutions. <br />
              Thank you for visiting our website. We look forward to collaborating with you and advancing the future of e-mobility together. <br />
              Warm regards, <br /> <br />
              <span style={{color:"black",fontWeight:'bolder'}}>Dr. Parag Jose C</span> <br />
              Head, Centre of Excellence in e-Mobility <br />
              CHRIST (Deemed to be University)
            </p>
          </div>
        </div>

        <div  style={{borderRadius:'20px',margin:'30px',background: "#f5f5f5",padding:'20px'}}>
        <Typography
              variant="h5"
              className="font-bold"
              style={{ fontSize: "40px", color: "#1381ff",fontWeight:'bolder',marginLeft:'20px' }}
            >
              Introduction
            </Typography>
            <Typography
              style={{
                color: "grey",
                fontSize: "18px",
                background: "#f5f5f5",
                padding: "20px",
                borderRadius: "10px",
                
              }}
            >
              The Centre of Excellence in e-Mobility, housed within the School of Engineering & Technology at CHRIST (Deemed to be University), Kengeri Campus, is a pioneering initiative in collaboration with Decibels Lab Pvt. Ltd. Originally established as the E-Mobility R & D Centre in 2018, it was funded by Safran Engineering Services and IEEE. With this support, the Centre has evolved into a premier hub for innovation and research, now recognized as the Centre of Excellence in e-Mobility by CHRIST (Deemed to be University). Our Centre focuses on key areas critical to the advancement of e-mobility, including: 
              <br></br>• Energy Storage Systems 
              <br></br>• Advanced Powertrain Technologies <br></br>• Software-Driven Vehicles <br></br>• Sustainable Transportation <br></br> We are dedicated to providing comprehensive training for students, researchers, and industry professionals. Our academic offerings include an M.Tech in Storage Materials with a specialization in Battery Management Systems, PGDM courses in Electric Vehicle Technology, and a variety of certification courses. In addition to educational programs, the Centre engages in consultancy services within its focus areas and supports startups through incubation at the Innovation and Incubation Centre (IIIC) at CHRIST University. Our mission is to drive forward the future of e-mobility through cutting-edge research, education, and industry collaboration.
            </Typography>
        </div>

        <div className="flex flex-col lg:flex-row gap-4" style={{margin:'30px'}}>
          <MagicCard
            gradientColor="#ffffff"
            className="cursor-pointer flex-col items-center justify-center shadow-m w-full lg:w-1/3"
          >
            <div className="flex justify-between items-center w-full p-4">
              <Typography
                variant="h5"
                className="font-bold"
                style={{ fontSize: "20px", color: "black" }}
              >
                Our Vision
              </Typography>
              <IconButton onClick={() => handleOpenDialog(visionContent)}>
                <AddIcon />
              </IconButton>
            </div>
          </MagicCard>

          <MagicCard
            gradientColor="#ffffff"
            className="cursor-pointer flex-col items-center justify-center shadow-m w-full lg:w-1/3"
          >
            <div className="flex justify-between items-center w-full p-4">
              <Typography
                variant="h5"
                className="font-bold"
                style={{ fontSize: "20px", color: "black" }}
              >
                Our Mission
              </Typography>
              <IconButton onClick={() => handleOpenDialog(Mission)}>
                <AddIcon />
              </IconButton>
            </div>
          </MagicCard>

          <MagicCard
            gradientColor="#ffffff"
            className="cursor-pointer flex-col items-center justify-center shadow-m w-full lg:w-1/3"
          >
            <div className="flex justify-between items-center w-full p-4">
              <Typography
                variant="h5"
                className="font-bold"
                style={{ fontSize: "20px", color: "black" }}
              >
                Our Objectives
              </Typography>
              <IconButton onClick={() => handleOpenDialog(objectiveMessage)}>
                <AddIcon />
              </IconButton>
            </div>
          </MagicCard>
        </div>
      </div>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          <div className="flex justify-between items-center">
            <span>Details</span>
            <IconButton onClick={handleCloseDialog}>
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <Typography style={{ color: "grey", fontSize: "18px" }}>
            {dialogContent}
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Home;
