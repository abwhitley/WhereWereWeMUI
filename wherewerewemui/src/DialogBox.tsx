import { Dialog } from "@mui/material";

interface DialogBoxProps {
    addGameModal: boolean,
    addUpNextModal: boolean,
    addLastDone: boolean,
    closeModal : (showModal:boolean) => void
}


const DialogBox = ({addGameModal,addUpNextModal,addLastDone, closeModal}: DialogBoxProps) => {
    
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
                </Dialog>: null}
        </>
        
    );
}

export default DialogBox