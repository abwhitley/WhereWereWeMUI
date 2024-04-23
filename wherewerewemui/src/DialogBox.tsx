import { Close, LastPage } from "@mui/icons-material";
import { Box, BoxProps, Button, Dialog, DialogContent, Divider, Fade, FadeProps, Grid, Stack, styled, TextField, Typography } from "@mui/material";
import { forwardRef, ReactElement, Ref, useState } from "react";
import GamesInterface from "./GamesInterface";

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

interface DialogBoxProps {
    showGameModal: boolean
    setShowGameModal : (arg:boolean) => void
    showLastDoneModal: boolean
    setShowLastDoneModal : (arg:boolean) => void
    showUpNextModal: boolean
    setShowUpNextModal : (arg:boolean) => void
    gamesList: GamesInterface[]
    gameName: string
    setGameName: (arg: string) => void
    setGamesList: (oldArray:GamesInterface[]) => void
    targetedGame: GamesInterface
    
}


const DialogBox = ({showGameModal,setShowGameModal,showLastDoneModal, setShowLastDoneModal, showUpNextModal, setShowUpNextModal ,gamesList, gameName, setGameName, setGamesList, targetedGame}: DialogBoxProps) => {

    const [newLastDone, setNewLastDone] = useState<string>("");
    const [newUpNext, setNewUpNext] = useState<string>("");
    
    return (
        
        <>
            { showGameModal ? 
                    <Dialog fullWidth open={showGameModal} maxWidth='md' scroll='body' onClose={() => setShowGameModal(false)}
                    TransitionComponent={Transition}> 
                    <Header style={{ display: 'flex', alignItems: 'start' }}>
                        <Stack spacing={2} sx={{ width: '100%', ml: 1.5, mr: -4 }}>
                            <Typography variant='h6'>Create Game</Typography>
                            <Typography variant='caption'>
                                <span style={{ fontStyle: 'italic' }}>Enter a game name</span>
                            </Typography>
                            <Divider />
                        </Stack>
                        <Close
                            fontSize='small'
                            onClick={
                                () => {
                                    setShowGameModal(false);
                                }}
                            sx={{ cursor: 'pointer'}} />
                    </Header>
                    <DialogContent sx={{ position: 'relative'}}>
                        <TextField sx={{ width: '100%' }} id="outlined-basic" placeholder="Enter A Game Name..." variant="outlined" onChange={(e) => {
                                    setGameName(e.target.value);
                                }}>
                        </TextField>
                        <Button onClick={()=> {
                            let newGame: GamesInterface = {
                                title: gameName,
                                upNext: [],
                                lastDone: []
                            }
                            setGamesList([...gamesList, newGame]);
                            setShowGameModal(false);
                        }}>Add</Button>
                    </DialogContent>
                </Dialog> 

                : showUpNextModal ?
                <Dialog fullWidth open={showUpNextModal} maxWidth='md' scroll='body' onClose={() => setShowUpNextModal(false)}
                TransitionComponent={Transition}> 
                <Header style={{ display: 'flex', alignItems: 'start' }}>
                    <Stack spacing={2} sx={{ width: '100%', ml: 1.5, mr: -4 }}>
                        <Typography variant='h6'>Add Up Next</Typography>
                        <Typography variant='caption'>
                            <span style={{ fontStyle: 'italic' }}>New Up Next</span>
                        </Typography>
                        <Divider />
                    </Stack>
                    <Close
                        fontSize='small'
                        onClick={
                            () => {
                                setShowUpNextModal(false);
                            }}
                        sx={{ cursor: 'pointer'}} />
                </Header>
                <DialogContent sx={{ position: 'relative'}}>
                    <TextField sx={{ width: '100%' }} id="outlined-basic" placeholder="Enter Up Next..." variant="outlined" onChange={(e) => {
                                setNewUpNext(e.target.value);
                            }}>
                    </TextField>
                    <Button onClick={()=> {
                        targetedGame.upNext.push(newUpNext);
                        setShowUpNextModal(false);
                    }}>Add</Button>
                </DialogContent>
                </Dialog> 

                : showLastDoneModal ?
                <Dialog fullWidth open={showLastDoneModal} maxWidth='md' scroll='body' onClose={() => setShowLastDoneModal(false)}
                TransitionComponent={Transition}> 
                <Header style={{ display: 'flex', alignItems: 'start' }}>
                    <Stack spacing={2} sx={{ width: '100%', ml: 1.5, mr: -4 }}>
                        <Typography variant='h6'>Add Last Done</Typography>
                        <Typography variant='caption'>
                            <span style={{ fontStyle: 'italic' }}>New Last Done</span>
                        </Typography>
                        <Divider />
                    </Stack>
                    <Close
                        fontSize='small'
                        onClick={
                            () => {
                                setShowLastDoneModal(false);
                            }}
                        sx={{ cursor: 'pointer'}} />
                </Header>
                <DialogContent sx={{ position: 'relative'}}>
                    <TextField sx={{ width: '100%' }} id="outlined-basic" placeholder="Enter Last Done..." variant="outlined" onChange={(e) => {
                                setNewLastDone(e.target.value);
                            }}>
                    </TextField>
                    <Button onClick={()=> {
                        targetedGame.lastDone.push(newLastDone);
                        setShowLastDoneModal(false);
                    }}>Add</Button>
                </DialogContent>
                </Dialog> 

                :null

            }

        </>
        
    );
}

export default DialogBox