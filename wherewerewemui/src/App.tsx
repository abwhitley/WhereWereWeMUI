

import './App.css';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import GamesInterface, { allGames } from "./GamesInterface";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {Box, Dialog, DialogContent, Fade, FadeProps, Grid, TextField, BoxProps, Stack, Divider} from "@mui/material";
import Typography from '@mui/material/Typography';
import {forwardRef, ReactElement, Ref, useState} from "react";
import { Close } from '@mui/icons-material';
import {styled} from '@mui/material/styles'

const Transition = forwardRef(function Transition({
    children,
    ...rest
}: 
FadeProps & { children?: ReactElement<any, any> }, ref: Ref<unknown>) {
    return (
        <Fade ref={ref} {...rest}>
            {children}
        </Fade>
    );
});

const Header = styled(Box)<BoxProps>(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(3, 4),
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.default
}));

function App() {

    const [gamesList, setGamesList] = useState<GamesInterface[]>(allGames);
    const [gameName, setGameName] = useState<string>("");
    const [showCreateModal, setShowCreateModal] = useState<boolean>(false);

    return (
        <div>
            <Grid container spacing={2} sx={{ display:"flex", justifyContent: "center"}}>
                <Grid item xs={12} sm={10} md={8} lg={6} xl={4} sx={{border: "1px solid red", display: "flex", justifyContent: "center" }}>
                    <Typography variant="h3" >Where Were We</Typography>
                </Grid>
                <Grid item xs={10}>
                    {
                        gamesList.map((x:GamesInterface) => (
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
            <Button onClick={() => {setShowCreateModal(true)}}>Show Modal</Button>
            <Dialog fullWidth open={showCreateModal} maxWidth='md' scroll='body' onClose={() => setShowCreateModal(false)}
                TransitionComponent={Transition}> 
                <Header style={{ display: 'flex', alignItems: 'start' }}>
                    <Stack spacing={2} sx={{ width: '100%', ml: 1.5, mr: -4 }}>
                        <Typography variant='h6'>Create Game</Typography>
                        {/* Decrease space between the two  */}
                        <Typography variant='caption'>
                            <span style={{ fontStyle: 'italic' }}>Enter a game name</span>
                        </Typography>
                        <Divider />
                    </Stack>
                    <Close
                        fontSize='small'
                        onClick={
                            () => {
                                setShowCreateModal(false);
                            }}
                        sx={{ cursor: 'pointer'}} />
                </Header>
                <DialogContent sx={{ position: 'relative'}}>
                    <Grid container spacing={ 6 }>
                        <Grid item xs={ 12 }>
                            <TextField sx={{ width: '100%' }} id="outlined-basic" placeholder="Enter A Game Name..." variant="outlined" onChange={(e) => {
                                setGameName(e.target.value);
                            }}>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'right' }}>
                            <Button sx={{mr: 2}} size='large' variant='outlined' color='secondary' onClick={ () => setShowCreateModal(false) }>
                            Cancel
                            </Button>
                            <Button  color='primary' variant='contained' onClick={(e) => {
                                const newGame: GamesInterface = {
                                    title: gameName,
                                    upNext: undefined,
                                    lastDone: undefined
                                }
                                setGamesList(oldArray => [...oldArray, newGame]);
                                setShowCreateModal(false);
                        }}>Create</Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default App;