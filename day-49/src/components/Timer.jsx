import Container from '@mui/material/Container'
import {Box, Card, CardContent, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import TimerActionButton from "./TimerActionButton";

export default function Timer({title, project}) {

    function handleDelete(e) {
        console.log(e)
    }

    function handleEdit(e) {
        console.log(e)
    }

    return (<Container maxWidth='sm'>
        <Card sx={{maxWidth: 345}}>
            <CardContent>
                <Typography sx={{fontSize: 28}} color="text.secondary" gutterBottom>
                    {title}
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary">
                    {project}
                </Typography>
                <Box sx={{display: 'flex', justifyContent: "center", alignItems: 'center'}}>
                    <h2>
                        {'Timer'}
                    </h2>
                </Box>
                <Box sx={{display: 'flex', justifyContent: "flex-end", alignItems: 'center', marginBottom: '20px'}}>
                    <DeleteIcon onClick={handleDelete}/>
                    <ModeEditIcon onClick={handleEdit}/>
                </Box>
                <TimerActionButton timerIsRunning={false} onStartClick={() => console.log('on start click')}
                                   onStopClick={() => console.log('on stop click')}/>
            </CardContent>
        </Card>
    </Container>)
}