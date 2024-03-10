import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";

const MovieCard = () => {
  return (
    <Card sx={{ maxWidth: 250, position: "relative" }}>
      <IconButton
        sx={{
          position: "absolute",
          right: 0,
          color: "white",
        }}
        aria-label="more"
        id="long-button"
        // aria-controls={open ? "long-menu" : undefined}
        // aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
      >
        <MoreVertIcon />
        <BasePopup open={true}>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            // anchorEl={anchorEl}
            open={true}
            onClose={() => {}}
            PaperProps={{ style: { width: "20ch" } }}
          >
            <MenuItem
              // key={option}
              // selected={option === "Pyxis"}
              onClick={() => {}}
            >
              Add
              {/* {option} */}
            </MenuItem>
          </Menu>
        </BasePopup>
      </IconButton>

      <CardMedia
        component="img"
        height="250"
        image="https://media.themoviedb.org/t/p/w440_and_h660_face/siduVKgOnABO4WH4lOwPQwaGwJp.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Argylle
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Jan 31, 2024
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
