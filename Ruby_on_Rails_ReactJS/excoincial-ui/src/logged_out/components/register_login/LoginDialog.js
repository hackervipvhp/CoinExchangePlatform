import React, { useState, useCallback, useRef, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withRouter } from "react-router-dom";
import {
  TextField,
  Button,
  Checkbox,
  Typography,
  FormControlLabel,
  withStyles,
} from "@material-ui/core";
import FormDialog from "../../../shared/components/FormDialog";
import HighlightedInformation from "../../../shared/components/HighlightedInformation";
import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";
import VisibilityPasswordTextField from "../../../shared/components/VisibilityPasswordTextField";
import LockIcon from "@material-ui/icons/Lock";

const styles = (theme) => ({
  forgotPassword: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.main,
    cursor: "pointer",
    "&:enabled:hover": {
      color: theme.palette.primary.dark,
    },
    "&:enabled:focus": {
      color: theme.palette.primary.dark,
    },
  },
  disabledText: {
    cursor: "auto",
    color: theme.palette.text.disabled,
  },
  formControlLabel: {
    marginRight: 0,
  },
  title: {
    color: theme.palette.common.black,
    fontSize: 36,
    fontWeight:900,
  },
  checkURL:{
    marginTop:20,
    color:theme.palette.common.black,
    fontSize: 16,
  },
  suggestURL: {
    marginTop:10,
    display: `flex`,
    marginLeft: `auto`,
    marginRight: `auto`,
    marginBottom: 40,
    width: `fit-content`,
    padding: `1px 20px`,
    color: theme.palette.common.black,
    border: `1px solid ${theme.palette.common.black}`,
    borderRadius: `30px`,
    fontSize: 16,
  },
  LockIcon:{
    color: `green`,
    fontSize: 16,
    marginTop: 4,
    marginRight:10,
  },
  actionsDiv: {
    display: `flex`,
    justifyContent: `space-between`,
  }
});

function LoginDialog(props) {
  const {
    setStatus,
    history,
    classes,
    onClose,
    openChangePasswordDialog,
    status,
    openRegisterDialog
  } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const loginEmail = useRef();
  const loginPassword = useRef();

  const login = useCallback(() => {
    setIsLoading(true);
    setStatus(null);
    if (loginEmail.current.value !== "test@web.com") {
      setTimeout(() => {
        setStatus("invalidEmail");
        setIsLoading(false);
      }, 1500);
    } else if (loginPassword.current.value !== "test") {
      setTimeout(() => {
        setStatus("invalidPassword");
        setIsLoading(false);
      }, 1500);
    } else {
      setTimeout(() => {
        history.push("/c/dashboard");
      }, 150);
    }
  }, [setIsLoading, loginEmail, loginPassword, history, setStatus]);

  return (
    <Fragment>
      <FormDialog
        open
        onClose={onClose}
        loading={isLoading}
        onFormSubmit={(e) => {
          e.preventDefault();
          login();
        }}
        hideBackdrop
        headline="Login"
        content={
          <Fragment>
            <Typography
              align="center"
              className={classes.title}
            >
              LOGIN
            </Typography>
            <Typography
              align="center"
              className={classes.checkURL}
            >
              Welcome to Excoincial
            </Typography>
            <Typography
              align="center"
              className={classes.suggestURL}
            >
              <div style={{height:20}}>
                <LockIcon className={classes.LockIcon} />
              </div>
              https://excoincial.com/accounts/login
            </Typography>

            <TextField
              variant="outlined"
              margin="normal"
              error={status === "invalidEmail"}
              required
              fullWidth
              label="Email Address"
              inputRef={loginEmail}
              autoFocus
              autoComplete="off"
              type="email"
              onChange={() => {
                if (status === "invalidEmail") {
                  setStatus(null);
                }
              }}
              helperText={
                status === "invalidEmail" &&
                "This email address isn't associated with an account."
              }
              FormHelperTextProps={{ error: true }}
            />
            <VisibilityPasswordTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              error={status === "invalidPassword"}
              label="Password"
              inputRef={loginPassword}
              autoComplete="off"
              onChange={() => {
                if (status === "invalidPassword") {
                  setStatus(null);
                }
              }}
              helperText={
                status === "invalidPassword" ? (
                  <span>
                    Incorrect password. Try again, or click on{" "}
                    <b>&quot;Forgot Password?&quot;</b> to reset it.
                  </span>
                ) : (
                  ""
                )
              }
              FormHelperTextProps={{ error: true }}
              onVisibilityChange={setIsPasswordVisible}
              isVisible={isPasswordVisible}
            />
          </Fragment>
        }
        actions={
          <Fragment>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isLoading}
              size="large"
              style={{color: `#fff`}}
            >
              LOGIN
              {isLoading && <ButtonCircularProgress />}
            </Button>
            <div className={classes.actionsDiv}>
              <Typography
                align="center"
                className={classNames(
                  classes.forgotPassword,
                  isLoading ? classes.disabledText : null
                )}
                color="primary"
                onClick={isLoading ? null : openChangePasswordDialog}
                tabIndex={0}
                role="button"
                onKeyDown={(event) => {
                  // For screenreaders listen to space and enter events
                  if (
                    (!isLoading && event.keyCode === 13) ||
                    event.keyCode === 32
                  ) {
                    openChangePasswordDialog();
                  }
                }}
              >
                Forgot Password?
              </Typography>
              <Typography
                align="center"
                className={classNames(
                  classes.forgotPassword,
                  isLoading ? classes.disabledText : null
                )}
                color="primary"
                onClick={isLoading ? null : openRegisterDialog}
                tabIndex={0}
                role="button"
                onKeyDown={(event) => {
                  // For screenreaders listen to space and enter events
                  if (
                    (!isLoading && event.keyCode === 13) ||
                    event.keyCode === 32
                  ) {
                    openRegisterDialog();
                  }
                }}
              >
                Not on Excoincial yet? Register
              </Typography>
            </div>
          </Fragment>
        }
      />
    </Fragment>
  );
}

LoginDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  openChangePasswordDialog: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  status: PropTypes.string,
  openRegisterDialog: PropTypes.func.isRequired,
};

export default withRouter(withStyles(styles)(LoginDialog));
