

import './App.css';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import GamesInterface, { allGames } from "./GamesInterface";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {Grid} from "@mui/material";
import Typography from '@mui/material/Typography';
import {useState} from "react";

function App() {

    const [showCreateModal, setShowCreateModal] = useState(false)

    return (
        <div>
            <Grid container spacing={2} sx={{ display:"flex", justifyContent: "center"}}>
                <Grid item xs={12} sm={10} md={8} lg={6} xl={4} sx={{border: "1px solid red", display: "flex", justifyContent: "center" }}>
                    <Typography variant="h3" >Where Were We</Typography>
                </Grid>
                <Grid item xs={10}>
                    {
                        allGames.map((x:GamesInterface) => (
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={ <ArrowUpwardIcon fontSize="medium" /> }
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    { x.title }
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={ <ArrowUpwardIcon fontSize="small" /> }
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >
                                            Last Done
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            { x.lastDone }
                                        </AccordionDetails>
                                    </Accordion>

                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={ <ArrowUpwardIcon fontSize="small" /> }
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >
                                            Up Next
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            { x.upNext }
                                        </AccordionDetails>
                                    </Accordion>
                                </AccordionDetails>
                            </Accordion>
                        ))
                    }
                </Grid>
            </Grid>

            {/*{*/}
            {/*    showCreateModal &&*/}
            {/*    */}
            {/*}*/}
        </div>
    );
}

export default App;

// <AccordionSummary
//     expandIcon={"Hello"}
//     aria-controls="panel1-content"
//     id="panel1-header"
// >
//     Accordion 1
// </AccordionSummary>
// <AccordionDetails>
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//     malesuada lacus ex, sit amet blandit leo lobortis eget.
// </AccordionDetails>
// </Accordion>
// <Accordion>
//     <AccordionSummary
//         expandIcon={"hello"}
//         aria-controls="panel2-content"
//         id="panel2-header"
//     >
//         Accordion 2
//     </AccordionSummary>
//     <AccordionDetails>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//         malesuada lacus ex, sit amet blandit leo lobortis eget.
//     </AccordionDetails>
// </Accordion>
// <Accordion defaultExpanded>
//     <AccordionSummary
//         expandIcon={"hello"}
//         aria-controls="panel3-content"
//         id="panel3-header"
//     >
//         Accordion Actions
//     </AccordionSummary>
//     <AccordionDetails>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//         malesuada lacus ex, sit amet blandit leo lobortis eget.
//     </AccordionDetails>
//     <AccordionActions>
//         <Button>Cancel</Button>
//         <Button>Agree</Button>
//     </AccordionActions>
