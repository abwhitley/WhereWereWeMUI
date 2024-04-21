import { Close } from "@mui/icons-material";
import { Box, BoxProps, Button, Dialog, DialogContent, Divider, Fade, FadeProps, Grid, Stack, styled, TextField, Typography } from "@mui/material";
import { forwardRef, ReactElement, Ref } from "react";
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
    addGameModal: boolean,
    addUpNextModal: boolean,
    addLastDone: boolean,
    showModal: boolean
    closeModal : (arg:boolean) => void
    gamesList: GamesInterface[]
    gameName: string
    setGameName: (arg: string) => void
    setGamesList: (arg: GamesInterface[]) => void
    
}


const DialogBox = ({addGameModal,addUpNextModal,addLastDone, closeModal, showModal, gamesList, gameName, setGameName, setGamesList}: DialogBoxProps) => {
    
    return (
        
        <>
            {addGameModal ? 
                    <Dialog fullWidth open={showModal} maxWidth='md' scroll='body' onClose={() => closeModal(false)}
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
                                    closeModal(false);
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
                                <Button sx={{mr: 2}} size='large' variant='outlined' color='secondary' onClick={ () => closeModal(false) }>
                                Cancel
                                </Button>
                                <Button  color='primary' variant='contained' onClick={(e) => {
                                    const newGame: GamesInterface = {
                                        title: gameName,
                                        upNext: [""],
                                        lastDone: [""],
                                    }
                                    setGamesList(gamesList:GamesInterface[] => [...gamesList, newGame]);
                                    closeModal(false);
                            }}>Create</Button>
                            </Grid>
                        </Grid>
                    </DialogContent>
                </Dialog>: null}
        </>
        
    );
}

export default DialogBox