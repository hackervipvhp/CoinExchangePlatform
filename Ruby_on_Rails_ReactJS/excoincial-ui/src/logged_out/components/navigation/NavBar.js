import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
	AppBar,
	Toolbar,
	Button,
	Hidden,
	IconButton,
	withStyles,
	Slide,
	Zoom,
	makeStyles,
	Fab
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
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import smoothScrollTop from "../../../shared/functions/smoothScrollTop";

function ShowOnScroll(props){
	const { children, window } = props;
	const trigger = useScrollTrigger({ 
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 100, 
	});
	// console.log(trigger);

	return (
		<Slide appear={false} drection="down" in={trigger}>
			{ children }
		</Slide>
	)
}

ShowOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
	root: {
	  position: 'fixed',
	  bottom: theme.spacing(2),
	  right: theme.spacing(2),
	},
  }));
  

function ScrollTop(props) {
	const { children, window } = props;
	const classes = useStyles();
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
	  target: window ? window() : undefined,
	  disableHysteresis: true,
	  threshold: 100,
	});
  
	const handleClick = (event) => {
	  const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
  
	  if (anchor) {
		anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
	  }
	};
  
	return (
	  <Zoom in={trigger}>
		<div onClick={smoothScrollTop} role="presentation" className={classes.root}>
		  {children}
		</div>
	  </Zoom>
	);
}

const styles = theme => ({
	appBar: {
		boxShadow: theme.shadows[6],
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
	imageLink: {
		paddingTop: `10px`,
		marginLeft: `10px`
	},
	imageLink1: {
		marginTop: `20px`,
		marginLeft: `20px`
	},
	mainMenu: {
		textDecoration: "none !important",
		fontSize: theme.typography.body1.fontSize,
		fontWeight: theme.typography.h6.fontWeight,
		color: theme.palette.common.white,
		marginLeft: `20px`,
		marginTop: `3px`
	},
	menuItem: {
		margin: `0px !important`,
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
			link: "/",
			name: "Blog",
			icon: darkThemeIcon
		},
		
	];
	return (
		<div className={classes.root}>
			<CssBaseline />
			<ShowOnScroll {...props}>
				<AppBar position="fixed" color='secondary' className={classes.AppBar}>
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
						<div style={{display: `flex`, float: `left`}}>
							<Hidden smDown>
								<Link
									key={"menu-1"}
									to={""}
									className={classes.noDecoration}
									onClick={handleMobileDrawerClose}
								>
									<img
										src={menuIcon}
										className={classes.imageLink1}
										alt="Main Logo"
									/>
								</Link>
								<Link
									key={"menu-1"}
									to={""}
									className={classes.mainMenu}
									onClick={handleMobileDrawerClose}
								>
									<h4 classes={classes.menuItem}>Markets</h4>
								</Link>
								<Link
									key={"menu-1"}
									to={""}
									className={classes.mainMenu}
									onClick={handleMobileDrawerClose}
								>
									<h4 classes={classes.menuItem}>Features</h4>
								</Link>
								<Link
									key={"menu-1"}
									to={""}
									className={classes.mainMenu}
									onClick={handleMobileDrawerClose}
								>
									<h4 classes={classes.menuItem}>Supports</h4>
								</Link>
								<Link
									key={"menu-1"}
									to={""}
									className={classes.mainMenu}
									onClick={handleMobileDrawerClose}
								>
									<h4 classes={classes.menuItem}>Wallets</h4>
								</Link>
								<Link
									key={"menu-1"}
									to={""}
									className={classes.mainMenu}
									onClick={handleMobileDrawerClose}
								>
									<h4 classes={classes.menuItem}>Exchange</h4>
								</Link>
								<Link
									key={"menu-1"}
									to={""}
									className={classes.mainMenu}
									onClick={handleMobileDrawerClose}
								>
									<h4 classes={classes.menuItem}>Trading</h4>
								</Link>
								<Link
									key={"menu-1"}
									to={""}
									className={classes.mainMenu}
									onClick={handleMobileDrawerClose}
								>
									<h4 classes={classes.menuItem}>P2P DEX</h4>
								</Link>
								<Link
									key={"menu-1"}
									to={""}
									className={classes.mainMenu}
									onClick={handleMobileDrawerClose}
								>
									<h4 classes={classes.menuItem}>Products</h4>
								</Link>
								<Link
									key={"menu-1"}
									to={""}
									className={classes.mainMenu}
									onClick={handleMobileDrawerClose}
								>
									<h4 classes={classes.menuItem}>Services</h4>
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
			</ShowOnScroll>
			<AppBar position="absolute" color='transparent' className={classes.AppBar}>
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
					<div style={{display: `flex`, float: `left`}}>
						<Hidden smDown>
							<Link
								key={"menu-1"}
								to={""}
								className={classes.noDecoration}
								onClick={handleMobileDrawerClose}
							>
								<img
									src={menuIcon}
									className={classes.imageLink1}
									alt="Main Logo"
								/>
							</Link>
							<Link
								key={"menu-1"}
								to={""}
								className={classes.mainMenu}
								onClick={handleMobileDrawerClose}
							>
								<h4 classes={classes.menuItem}>Markets</h4>
							</Link>
							<Link
								key={"menu-1"}
								to={""}
								className={classes.mainMenu}
								onClick={handleMobileDrawerClose}
							>
								<h4 classes={classes.menuItem}>Features</h4>
							</Link>
							<Link
								key={"menu-1"}
								to={""}
								className={classes.mainMenu}
								onClick={handleMobileDrawerClose}
							>
								<h4 classes={classes.menuItem}>Supports</h4>
							</Link>
							<Link
								key={"menu-1"}
								to={""}
								className={classes.mainMenu}
								onClick={handleMobileDrawerClose}
							>
								<h4 classes={classes.menuItem}>Wallets</h4>
							</Link>
							<Link
								key={"menu-1"}
								to={""}
								className={classes.mainMenu}
								onClick={handleMobileDrawerClose}
							>
								<h4 classes={classes.menuItem}>Exchange</h4>
							</Link>
							<Link
								key={"menu-1"}
								to={""}
								className={classes.mainMenu}
								onClick={handleMobileDrawerClose}
							>
								<h4 classes={classes.menuItem}>Trading</h4>
							</Link>
							<Link
								key={"menu-1"}
								to={""}
								className={classes.mainMenu}
								onClick={handleMobileDrawerClose}
							>
								<h4 classes={classes.menuItem}>P2P DEX</h4>
							</Link>
							<Link
								key={"menu-1"}
								to={""}
								className={classes.mainMenu}
								onClick={handleMobileDrawerClose}
							>
								<h4 classes={classes.menuItem}>Products</h4>
							</Link>
							<Link
								key={"menu-1"}
								to={""}
								className={classes.mainMenu}
								onClick={handleMobileDrawerClose}
							>
								<h4 classes={classes.menuItem}>Services</h4>
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
			<ScrollTop {...props}>
				<Fab color="secondary" size="small" aria-label="scroll back to top">
				<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>
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
