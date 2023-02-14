import LoginForm from "./LoginForm"
import Grid from '@mui/material/Grid';
export default function Login() {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >

            <Grid item xs={3}>
                <LoginForm />
            </Grid>

        </Grid>
    )
}