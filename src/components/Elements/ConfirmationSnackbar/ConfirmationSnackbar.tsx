import * as React from "react";
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface ConfirmationSnackbarProps {
  open: boolean;
  handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
}

export const ConfirmationSnackbar = ({
  open,
  handleClose,
}: ConfirmationSnackbarProps) => {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        Todo Created!
      </Alert>
    </Snackbar>
  );
};
