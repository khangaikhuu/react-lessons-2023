import TextField from '@mui/material/TextField';
export default function LoginForm() {
    return (
        <div>
            <form>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    variant="filled"
                    size="small"
                />
            </form>
        </div>
    )
}