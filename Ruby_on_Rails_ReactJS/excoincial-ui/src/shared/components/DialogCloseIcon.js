import React from "react";
import PropTypes from "prop-types";
import {
  IconButton,
  DialogTitle,
  Typography,
  Box,
  withTheme
} from "@material-ui/core";
import CloseImage from "../../assets/images/cross.png";

function DialogTitleWithCloseIcon(props) {
  const {
    theme,
    paddingBottom,
    onClose,
    disabled,
    title,
    disablePadding
  } = props;
  return (
    // <DialogTitle
    //   style={{
    //     paddingBottom: paddingBottom
    //       ? paddingBottom && disablePadding
    //         ? 0
    //         : paddingBottom
    //       : theme.spacing(3),
    //     paddingLeft: disablePadding ? 0 : null,
    //     paddingRight: disablePadding ? 0 : null,
    //     paddingTop: disablePadding ? 0 : theme.spacing(2),
    //     width: "100%"
    //   }}
    //   disableTypography
    // >
      <Box position="absolute" top={0} right={0}>
        {/* <Typography variant="h5">{title}</Typography> */}
        <IconButton
          onClick={onClose}
          // style={{ marginRight: 5, marginTop: 5 }}
          disabled={disabled}
          aria-label="Close"
        >
          <img
            src={CloseImage}
          />
        </IconButton>
      </Box>
    // </DialogTitle>
  );
}

DialogTitleWithCloseIcon.propTypes = {
  theme: PropTypes.object,
  paddingBottom: PropTypes.number,
  onClose: PropTypes.func,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  disablePadding: PropTypes.bool
};

export default withTheme(DialogTitleWithCloseIcon);
