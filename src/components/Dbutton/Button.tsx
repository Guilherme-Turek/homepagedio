import { Button } from "@mui/material";

interface IButton {
  content: string;
  event: () => void;
}

export const DButton: React.FC<IButton> = ({ content, event }) => {
  return (
    <Button
      fullWidth
      variant="contained"
      color="primary"
      sx={{ marginTop: "15px" }}
      onClick={event}
    >
      {content}
    </Button>
  );
};
