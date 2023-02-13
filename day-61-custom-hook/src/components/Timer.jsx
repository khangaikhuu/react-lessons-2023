import Container from "@mui/material/Container";
import { Box, Card, CardContent, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import TimerActionButton from "./TimerActionButton";
import { renderElapsedString } from "./Helpers.js";
import { useContext } from "react";
import { TimerContext } from "../context/TimerContext";

export default function Timer({
  title,
  project,
  id,
  elapsed,
  runningSince,
  onEditClick
}) {
  const elapsedString = renderElapsedString(elapsed, runningSince);
  const {handleStartClick, handleStopClick, handleTrashClick} = useContext(TimerContext)

  function handleDelete() {
    handleTrashClick(id);
  }

  function handleEdit() {
    console.log('handle edit clicked')
    onEditClick(id);
  }

  function handleStartButtonClick() {
    handleStartClick(id);
  }

  function handleStopButtonClick() {
    console.log("handling stop click");
    handleStopClick(id);
  }

  return (
    <Container maxWidth="sm">
      <Card sx={{ maxWidth: 345, margin: "0 auto", marginBottom: 5 }}>
        <CardContent>
          <Typography sx={{ fontSize: 28 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {project}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>{elapsedString}</h2>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <DeleteIcon onClick={handleDelete} />
            <ModeEditIcon onClick={handleEdit} />
          </Box>
          <TimerActionButton
            timerIsRunning={runningSince}
            onStartClick={handleStartButtonClick}
            onStopClick={handleStopButtonClick}
          />
        </CardContent>
      </Card>
    </Container>
  );
}
