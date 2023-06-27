import { Box, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
export const Login=({openLoginDialog,SetopenLoginDialog})=>{

    const handleclose = ()=>{
        SetopenLoginDialog(false)
    }
    return(
        <Dialog open={openLoginDialog} onClose={handleclose}>
          <Box>
                 <Box></Box>
                 


                 <Box>
                 <TextField id="standard-basic" label="Standard" variant="standard" />
                 </Box>


          </Box>

        </Dialog>
    )
}
