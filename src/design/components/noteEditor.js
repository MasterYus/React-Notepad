import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Slide } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide timeout={300} direction="up" ref={ref} {...props} />;
});

export default function NoteEditor(props) {
  return (
      <Dialog open={props.open} TransitionComponent={Transition}>
            <DialogTitle>{props.note ? "Редактирование заметки" : "Создание заметки"}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {props.content}
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="normal"
                    id="title"
                    label="Заголовок"
                    helperText="Заголовок Вашей заметки"
                    type="text"
                    defaultValue={props?.note?.title || ""}
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    margin="dense"
                    id="content"
                    label="Заметка"
                    helperText="Содержимое Вашей заметки"
                    type="text"
                    multiline
                    minRows={6}
                    defaultValue={props?.note?.text || ""}
                    fullWidth
                    variant="outlined"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose}>Cancel</Button>
                <Button onClick={props.onSave}>Save</Button>
            </DialogActions>
      </Dialog>
  );
}