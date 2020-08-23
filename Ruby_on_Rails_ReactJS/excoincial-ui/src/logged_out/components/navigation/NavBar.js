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
import HowToRegIcon from "@material-ui/icons/HowToReg";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import NavigationDrawer from "../../../shared/components/NavigationDrawer";
import LogoImage from "../../../assets/images/Logo.png";
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import smoothScrollTop from "../../../shared/functions/smoothScrollTop";
import AppIcon from "@material-ui/icons/Apps";
import LanguageIcon from "@material-ui/icons/Language";
import CurrencyIcon from "@material-ui/icons/Brightness3";
import SocialIconsImage from "../../../assets/images/social-icons.png";

function ShowOnScroll(props){
	const { children, window } = props;
	const trigger = useScrollTrigger({ 
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 50, 
	});

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
	  zIndex: 102,
	},
  }));
  

function ScrollTop(props) {
	const { children, window } = props;
	const classes = useStyles();
	const trigger = useScrollTrigger({
	  target: window ? window() : undefined,
	  disableHysteresis: true,
	  threshold: 50,
	});
  
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
		marginLeft: 25,
		marginRight: 25,
		padding: `0 !important`
	},
	menuButtonText: {
		fontWeight: theme.typography.h6.fontWeight,
		color: theme.palette.common.white,
		marginTop: `-20px`,
		fontSize: 16,
		[theme.breakpoints.down("lg")]: {
			fontSize: 13,
		},
		[theme.breakpoints.down("md")]: {
			fontSize: 10
		}		
	},
	brandText: {
		fontFamily: "'Baloo Bhaijaan', cursive",
		fontWeight: 400
	},
	noDecoration: {
		textDecoration: "none !important",
		fontSize: 16,
		[theme.breakpoints.down("lg")]: {
			fontSize: 13
		},
		[theme.breakpoints.down("md")]: {
			fontSize: 10
		},
		marginLeft: 10,
	},
	logo: {
		width: 200,
		[theme.breakpoints.down("md")]: {
			width:120,
		},
		marginTop: "10px",
	},
	imageLink: {
		paddingTop: `10px`,
		marginLeft: `10px`,
		width: 24
	},
	imageLink1: {
		marginTop: 25,
		marginLeft: `20px`,
		[theme.breakpoints.down("lg")]: {
			// marginTop: 15,
			fontSize: 10
		},
		[theme.breakpoints.down("md")]: {
			marginTop: 20
		},
		width:24
	},
	mainMenu: {
		textDecoration: "none !important",
		fontSize: 16,
		[theme.breakpoints.down("md")]: {
			marginLeft: 10,
			fontSize: 13
		},
		[theme.breakpoints.down("sm")]: {
			marginLeft: 5,
			fontSize: 10,
		},
		fontWeight: theme.typography.h6.fontWeight,
		color: theme.palette.common.white,
		marginLeft: 15,
		marginTop: `8px`,
	},
	menuItem: {
		margin: `0px !important`,
	},
	menuButtonTextSignUp: {
		fontWeight: theme.typography.h6.fontWeight,
		color: theme.palette.common.white,
		fontSize: 16,
		[theme.breakpoints.down("lg")]: {
			fontSize: 13
		},
		[theme.breakpoints.down("md")]: {
			fontSize: 10,
		},
	},
	socialIcons: {
		position: 'absolute',
		right: 0,
		top: 250,
		zIndex:101,
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
			name: "Markets",
			link: "/markets",
		},
		{
			name: "Support",
			link: "/support",
		},
		{
			name: "Exchange",
			link: "/exchange",
		},
		{
			name: "Trading",
			link: "/trading",
		},
		{
			name: "P2P DEX",
			link: "/p2p-dex",
		},
		{
			name: "Products",
			link: "/products",
		},
		{
			name: "Services",
			link: "/services",
		},
		{
			name: "Vote",
			link: "/vote",
		},
		{
			name: "ICO",
			link: "/ico",
		},
		{
			name: "Buy/Sell",
			link: "/buy-sell",
		},
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
			icon: <LanguageIcon color="primary" style={{fontSize:30}}/>
		},
		{
			link: "/blog",
			name: "Blog",
			icon: <CurrencyIcon color="primary" style={{transform: `rotate(135deg)`, fontSize:30}}/>
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
									<AppIcon color="primary" style={{marginTop:27}}/>
								</Link>
								<Link
									key={"menu-markets"}
									to={"/markets"}
									className={classes.mainMenu}
									onClick={handleMobileDrawerClose}
								>
									<h4 classes={classes.menuItem}>Markets</h4>
								</Link>
								<Link
									key={"menu-support"}
									to={"/support"}
									className={classes.mainMenu}
									onClick={handleMobileDrawerClose}
								>
									<h4 classes={classes.menuItem}>Support</h4>
								</Link>
								<Link
									key={"menu-exchange"}
									to={"/exchange"}
									className={classes.mainMenu}
									onClick={handleMobileDrawerClose}
								>
									<h4 classes={classes.menuItem}>Exchange</h4>
								</Link>								
								<Link
									key={"menu-trading"}
									to={"/trading"}
									className={classes.mainMenu}
									onClick={handleMobileDrawerClose}
								>
									<h4 classes={classes.menuItem}>Trading</h4>
								</Link>
								<Link
									key={"menu-p2p"}
									to={"/p2p-dex"}
									className={classes.mainMenu}
									onClick={handleMobileDrawerClose}
								>
									<h4 classes={classes.menuItem}>P2P DEX</h4>
								</Link>
								<Link
									key={"menu-products"}
									to={"/products"}
									className={classes.mainMenu}
									onClick={handleMobileDrawerClose}
								>
									<h4 classes={classes.menuItem}>Products</h4>
								</Link>
								<Link
									key={"menu-services"}
									to={"/services"}
									className={classes.mainMenu}
									onClick={handleMobileDrawerClose}
								>
									<h4 classes={classes.menuItem}>Services</h4>
								</Link>
								<Link
									key={"menu-vote"}
									to={"/vote"}
									className={classes.mainMenu}
									onClick={handleMobileDrawerClose}
								>
									<h4 classes={classes.menuItem}>Vote</h4>
								</Link>
								<Link
									key={"menu-ico"}
									to={"/ico"}
									className={classes.mainMenu}
									onClick={handleMobileDrawerClose}
								>
									<h4 classes={classes.menuItem}>ICO</h4>
								</Link>
								<Link
									key={"menu-buySell"}
									to={"/buy-sell"}
									className={classes.mainMenu}
									onClick={handleMobileDrawerClose}
								>
									<h4 classes={classes.menuItem}>Buy/Sell</h4>
								</Link>
							</Hidden>
						</div>
						<div>
							<Hidden mdUp>
								<Button
									size="large"
									onClick={openRegisterDialog}
									classes={{ text: classes.menuButtonTextSignUp }}
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
												{element.icon}
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
								key={"menu-main-logo"}
								to={""}
								className={classes.noDecoration}
								onClick={handleMobileDrawerClose}
							>
								<AppIcon color="primary" style={{marginTop:27}}/>
							</Link>
							<Link
								key={"menu-markets"}
								to={"/markets"}
								className={classes.mainMenu}
								onClick={handleMobileDrawerClose}
							>
								<h4 classes={classes.menuItem}>Markets</h4>
							</Link>
							<Link
								key={"menu-support"}
								to={"/support"}
								className={classes.mainMenu}
								onClick={handleMobileDrawerClose}
							>
								<h4 classes={classes.menuItem}>Support</h4>
							</Link>
							<Link
								key={"menu-exchange"}
								to={"/exchange"}
								className={classes.mainMenu}
								onClick={handleMobileDrawerClose}
							>
								<h4 classes={classes.menuItem}>Exchange</h4>
							</Link>					
							<Link
								key={"menu-trading"}
								to={"/trading"}
								className={classes.mainMenu}
								onClick={handleMobileDrawerClose}
							>
								<h4 classes={classes.menuItem}>Trading</h4>
							</Link>
							<Link
								key={"menu-p2p"}
								to={"/p2p-dex"}
								className={classes.mainMenu}
								onClick={handleMobileDrawerClose}
							>
								<h4 classes={classes.menuItem}>P2P DEX</h4>
							</Link>
							<Link
								key={"menu-products"}
								to={"/products"}
								className={classes.mainMenu}
								onClick={handleMobileDrawerClose}
							>
								<h4 classes={classes.menuItem}>Products</h4>
							</Link>
							<Link
								key={"menu-services"}
								to={"/services"}
								className={classes.mainMenu}
								onClick={handleMobileDrawerClose}
							>
								<h4 classes={classes.menuItem}>Services</h4>
							</Link>
							<Link
								key={"menu-vote"}
								to={"/vote"}
								className={classes.mainMenu}
								onClick={handleMobileDrawerClose}
							>
								<h4 classes={classes.menuItem}>Vote</h4>
							</Link>
							<Link
								key={"menu-ico"}
								to={"/ico"}
								className={classes.mainMenu}
								onClick={handleMobileDrawerClose}
							>
								<h4 classes={classes.menuItem}>ICO</h4>
							</Link>
							<Link
								key={"menu-buySell"}
								to={"/buy-sell"}
								className={classes.mainMenu}
								onClick={handleMobileDrawerClose}
							>
								<h4 classes={classes.menuItem}>Buy/Sell</h4>
							</Link>
						</Hidden>
					</div>
					<div>
						<Hidden mdUp>
							<Button
								size="large"
								onClick={openRegisterDialog}
								classes={{ text: classes.menuButtonTextSignUp }}
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
											{element.icon}
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
			<img
				src = {SocialIconsImage}
				alt="Social Icons"
				className={classes.socialIcons}
			/>
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
