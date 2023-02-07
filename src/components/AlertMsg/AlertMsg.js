import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Dialog from "@mui/material/Dialog";

export default function AlertMsg(props) {
    return (
        <Dialog open={props.show}>
            <Alert
                variant="outlined"
                severity="success"
            >
                <AlertTitle>Success</AlertTitle>
                The expense has been successfully added
            </Alert>
        </Dialog>
    )
}