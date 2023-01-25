import { Card, CardContent, Grid, Button, TextField } from "@mui/material";
import { useState } from "react";

export default function TimerForm({
  id,
  title,
  project,
  onFormSubmit,
  onFormClose,
}) {
  const [timer, setTimer] = useState({
    title: title || "",
    project: project || "",
  });

  const submitText = id ? "Update" : "Create";

  function handleTitleChange(e) {
    setTimer({
      ...timer,
      title: e.target.value,
    });
  }

  function handleProjectChange(e) {
    setTimer({
      ...timer,
      project: e.target.value,
    });
  }

  return (
    <div>
      <h1>Timer Form</h1>
      <Grid>
        <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
          <CardContent>
            <form>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    placeholder={timer.title}
                    label={"Title"}
                    value={timer.title}
                    variant={"outlined"}
                    fullWidth={true}
                    onChange={handleTitleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    placeholder={timer.project}
                    label={"Project"}
                    value={timer.project}
                    variant={"outlined"}
                    fullWidth={true}
                    onChange={handleProjectChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    color={"success"}
                    variant={"outlined"}
                    onClick={onFormSubmit}
                  >
                    {submitText}
                  </Button>
                  <Button
                    color={"success"}
                    variant={"outlined"}
                    onClick={onFormClose}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
