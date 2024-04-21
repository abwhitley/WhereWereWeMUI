

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
    import {forwardRef, ReactElement, Ref, useCallback, useId, useState} from "react";
    import { Close } from '@mui/icons-material';
    import {styled} from '@mui/material/styles'
    import { border } from '@mui/system';
    import DialogBox from './DialogBox';

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
        const [newUpNext, setNewUpNext] = useState<string>("");
        const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
        const [showCreateModal2, setShowCreateModal2] = useState<boolean>(false);
        const [targetedGame, setTargetedGame] = useState(allGames[0])
        const [showModal, setShowModal] = useState(false);



        return (
            <div>
                <Grid container spacing={2} sx={{ display:"flex", justifyContent: "center"}}>
                    <Grid item xs={12} sm={10} md={8} lg={6} xl={4} sx={{border: "1px solid red", display: "flex", justifyContent: "center" }}>
                        <Typography variant="h3" >Where Were We</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        {
                            gamesList.map((singleGame:GamesInterface) => (
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={ <ArrowUpwardIcon fontSize="medium" /> }
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        { singleGame.title }
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
                                            <Button>+</Button>
                                            {
                                                singleGame.lastDone.map((task) => (
                                                    <AccordionDetails>{task}</AccordionDetails>
                                                ))
                                            }
                                            
                                        </Accordion>
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={ <ArrowUpwardIcon fontSize="small" /> }
                                                aria-controls="panel1-content"
                                                id="panel1-header"
                                            >
                                                Up Next
                                            </AccordionSummary>
                                            <Button onClick={() => {
                                                setShowCreateModal2(true)
                                                setTargetedGame(singleGame)
                                                }}>+</Button>
                                            {
                                                singleGame.upNext.map((task) => (
                                                    <AccordionDetails>{task}</AccordionDetails>
                                                ))
                                            }
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
                                        upNext: [""],
                                        lastDone: [""],
                                    }
                                    setGamesList(oldArray => [...oldArray, newGame]);
                                    setShowCreateModal(false);
                            }}>Create</Button>
                            </Grid>
                        </Grid>
                    </DialogContent>
                </Dialog>
                <Dialog fullWidth open={showCreateModal2} maxWidth='md' scroll='body' onClose={() => setShowCreateModal2(false)}
                    TransitionComponent={Transition}> 
                    <Header style={{ display: 'flex', alignItems: 'start' }}>
                        <Stack spacing={2} sx={{ width: '100%', ml: 1.5, mr: -4 }}>
                            <Typography variant='h6'>Add Up Next</Typography>
                            {/* Decrease space between the two  */}
                            <Typography variant='caption'>
                                <span style={{ fontStyle: 'italic' }}>Enter the last thing you finsihed in the game</span>
                            </Typography>
                            <Divider />
                        </Stack>
                        <Close
                            fontSize='small'
                            onClick={
                                () => {
                                    setShowCreateModal2(false);
                                }}
                            sx={{ cursor: 'pointer'}} />
                    </Header>
                    <DialogContent sx={{ position: 'relative'}}>
                        <Grid container spacing={ 6 }>
                            <Grid item xs={ 12 }>
                                <TextField sx={{ width: '100%' }} id="outlined-basic" placeholder="Enter Last Done..." variant="outlined" onChange={(e) => {
                                    setNewUpNext(e.target.value);
                                }} />
                            </Grid>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'right' }}>
                                <Button sx={{mr: 2}} size='large' variant='outlined' color='secondary' onClick={ () => setShowCreateModal2(false) }>
                                Cancel This
                                </Button>
                                <Button  color='primary' variant='contained' onClick={(e) => {
                                    targetedGame.upNext.push(newUpNext);
                                    setShowCreateModal2(false)
                            }}>Add</Button>
                            </Grid>
                        </Grid>
                    </DialogContent>
                </Dialog>
                <Button onClick={() => setShowModal(true)}>Click Me</Button>
                {
                    showModal ? <DialogBox addGameModal={true} addUpNextModal={false} addLastDone={false} closeModal={setShowCreateModal}/> : null
                }
            </div>
        );
    };

    export default App;