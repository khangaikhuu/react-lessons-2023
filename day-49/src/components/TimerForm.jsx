import {Button, Card, CardContent, Grid, TextField} from "@mui/material";
import {useState} from "react";

export default function TimerForm({titleName, projectName, id,  onFormClose, onFormSubmit}) {
    const [title, setTitle] = useState(titleName)
    const [project, setProject] = useState(projectName)

    const submitText = id ? 'Update': 'Create'

    function handleTitleChange(e) {
        setTitle(e.target.value)
        console.log(title)
    }

    function handleProjectChange(e){
        setProject(e.target.value)
        console.log(project)
    }

    function handleSubmit(){
        onFormSubmit({
            id: id,
            title: title,
            project: project
        })
    }

    return (<Grid>
        <Card style={{maxWidth: 345, margin: "0 auto"}}>
            <CardContent>
                <form>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField
                                type="text"
                                placeholder={title}
                                label={title}
                                variant="outlined"
                                fullWidth
                                required
                                onChange={handleTitleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="text"
                                placeholder={project}
                                label={project}
                                variant="outlined"
                                fullWidth
                                required
                                onChange={handleProjectChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button color={"success"} variant={"outlined"} onClick={handleSubmit}> {submitText} </Button>
                            <Button color={"error"} variant={"outlined"} onClick={onFormClose}>Cancel </Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    </Grid>)
}