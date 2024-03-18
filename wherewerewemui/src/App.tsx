

import './App.css';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import GamesInterface, {allGames} from "./GamesInterface";

function App() {

    return (
        <div>
            <h1>Where Were We</h1>
            {
                allGames.map((x:GamesInterface) => (
                    <Accordion>
                        <AccordionSummary
                            expandIcon={"^"}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                        {x.title}
                        </AccordionSummary>
                        <AccordionDetails>
                            <Accordion>
                            <AccordionSummary
                                expandIcon={"^"}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                             Last Done
                            </AccordionSummary>
                            <AccordionDetails>
                                {x.lastDone}
                            </AccordionDetails>
                            </Accordion>

                            <Accordion>
                                <AccordionSummary
                                    expandIcon={"^"}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    Up Next
                                </AccordionSummary>
                                <AccordionDetails>
                                    {x.upNext}
                                </AccordionDetails>
                            </Accordion>
                        </AccordionDetails>
                    </Accordion>
                ))
            }
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
