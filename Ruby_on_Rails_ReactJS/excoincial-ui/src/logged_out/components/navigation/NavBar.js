import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
	AppBar,
	Toolbar,
	Button,
	Hidden,
	IconButton,
	withStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import BookIcon from "@material-ui/icons/Book";
import NavigationDrawer from "../../../shared/components/NavigationDrawer";
import LogoImage from "../../../assets/images/Logo.png";
import landingImage from "../../../assets/images/Main-Home-page-banner.png";
import languageImage from "../../../assets/images/MenuIcons/language.png";
import darkThemeIcon from "../../../assets/images/MenuIcons/dark-theme-icon.png";
import menuIcon from "../../../assets/images/MenuIcons/menu.png";

const styles = theme => ({
	appBar: {
		// boxShadow: theme.shadows[6],
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
		marginLeft: `30px`,
		marginRight: `30px`
	},
	menuButtonText: {
		fontSize: theme.typography.body1.fontSize,
		fontWeight: theme.typography.h6.fontWeight,
		color: theme.palette.common.white,
		marginTop: `-25px`
	},
	brandText: {
		fontFamily: "'Baloo Bhaijaan', cursive",
		fontWeight: 400
	},
	noDecoration: {
		textDecoration: "none !important"
	},
	logo: {
		width: "100%",
		marginTop: "10px",
	},
	landingSection: {
		backgroundImage: `url(${landingImage})`,
		height: "90%",
	},
	imageLink: {
		paddingTop: `10px`,
		marginLeft: `10px`
	}
});

function NavBar(props) {
	const {
		classes,
		openRegisterDialog,
		openLoginDialog,
		handleMobileDrawerOpen,
		handleMobileDrawerClose,
		mobileDrawerOpen,
		selectedTab
	} = props;
	const menuItems = [
		{
			name: "Sign in",
			onClick: openLoginDialog,
			icon: <LockOpenIcon className="text-white" />
		},
		{
			name: "Sign up",
			onClick: openRegisterDialog,
			icon: <HowToRegIcon className="text-white" />
		},
		{
			link: "/",
			name: "Language",
			icon: languageImage
		},
		{
			link: "/blog",
			name: "Blog",
			icon: darkThemeIcon
		},
		
	];
	return (
		<div className={classes.root}>
			<div className={classes.landingSection}>
				<AppBar position="sticky" color='transparent'>
					<Toolbar className={classes.toolbar}>
						<div>
							<Link 
								to = {""}
								className={classes.brandText}
								display="inline"
							>
								<img
									src={LogoImage}
									className={classes.logo}
									alt="Main Logo"
								/>
							</Link>
						</div>
						<div>
							<Hidden smDown>
								<Link
									key={"menu-1"}
									to={""}
									className={classes.noDecoration}
									onClick={handleMobileDrawerClose}
								>
									<img
										src={menuIcon}
										className={classes.imageLink}
										alt="Main Logo"
									/>
								</Link>
							</Hidden>
						</div>
						<div>
							<Hidden mdUp>
								<Button
									size="large"
									onClick={openRegisterDialog}
									classes={{ text: classes.menuButtonText }}
									key={"sign-up-1"}
								>
									Sign up
								</Button>
								<IconButton
									className={classes.menuButton}
									onClick={handleMobileDrawerOpen}
									aria-label="Open Navigation"
								>
									<MenuIcon color="primary" />
								</IconButton>
							</Hidden>
							<Hidden smDown>
								{menuItems.map(element => {
									if (element.link) {
										return (
											<Link
												key={element.name}
												to={element.link}
												className={classes.noDecoration}
												onClick={handleMobileDrawerClose}
											>
												<img
													src={element.icon}
													className={classes.imageLink}
													alt="Main Logo"
												/>
											</Link>
										);
									}
									return (
										<Button
											onClick={element.onClick}
											classes={{ text: classes.menuButtonText }}
											key={element.name}
										>
											{element.name}
										</Button>
									);
								})}
							</Hidden>
						</div>
					</Toolbar>
				</AppBar>
				<NavigationDrawer
					menuItems={menuItems}
					anchor="right"
					open={mobileDrawerOpen}
					selectedItem={selectedTab}
					onClose={handleMobileDrawerClose}
				/>
			</div>
		</div>
	);
}

NavBar.propTypes = {
	classes: PropTypes.object.isRequired,
	handleMobileDrawerOpen: PropTypes.func,
	handleMobileDrawerClose: PropTypes.func,
	mobileDrawerOpen: PropTypes.bool,
	selectedTab: PropTypes.string,
	openRegisterDialog: PropTypes.func.isRequired,
	openLoginDialog: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
