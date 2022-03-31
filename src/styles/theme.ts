// import { Theme } from '@mui/material';
import { Colors } from './colors';
export const defaultTheme = {
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: Colors.defaultGray,
          color: Colors.white,
        },
        colorDefault: {
          backgroundColor: Colors.defaultGray,
          color: Colors.white,
        },
        circular: {
          height: 25,
          width: 25,
          backgroundColor: Colors.defaultGray,
          color: Colors.white,
          fontSize: 10,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          background: Colors.dividerGray,
        },
        light: {
          backgroundColor: Colors.dividerGray,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "'Lato', sans-serif",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontFamily: "'Lato', sans-serif",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          padding: '4px 16px',
          fontSize: 14,
          outline: 'none',
        },
        contained: {
          display: 'inline-block',
          color: Colors.white,
        },
        outlined: {
          borderRadius: '0',
          backgroundColor: Colors.white,
          borderColor: Colors.dividerGray,
          color: Colors.defaultGray,
          '&:hover': {
            backgroundColor: Colors.swimLane,
            borderColor: Colors.dividerGray,
          },
        },
        text: {
          backgroundColor: 'transparent',
          border: 'none',
          color: Colors.defaultGray,
          '&:hover': {
            backgroundColor: 'transparent',
            color: Colors.lightPurple,
          },
          '&.active': {
            color: Colors.lightblue,
          },
        },
        textPrimary: {
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          border: `1px solid ${Colors.dividerGray}`,
          borderRadius: '0 0 12px 12px',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: Colors.black,
          backgroundColor: Colors.white,
          boxShadow: `0px 4px 4px ${Colors.shadowGray}`,
          fontFamily: 'Lato',
          fontSize: '12px',
          // padding:'10px 15px'
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          padding: 0,
          backgroundColor: 'transparent',
          boxShadow: 'none',
          '&:before': {
            display: 'none',
          },
          '&.Mui-expanded': {
            margin: 0,
            minHeight: '36px',
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        content: {
          width: '100%',
          '&$expanded': {
            margin: 0,
            minHeight: 0,
          },
        },
        root: {
          padding: 0,
          height: 36,
          minHeight: '36px',
          '&.Mui-expanded': {
            margin: 0,
            minHeight: 36,
            height: 36,
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0,
          '&:hover': {
            background: 'transparent',
          },
          fontSize: '14px',
        },
        colorPrimary: {
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          flexGrow: 1,
          borderBottom: `1px solid ${Colors.dividerGray}`,
          minHeight: 32,
          color: Colors.black,
        },
        indicator: {
          backgroundColor: Colors.lightblue,
        },
        flexContainer: {
          height: 32,
        },
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          minHeight: 32,
          // color: Colors.defaultGray,
          color: Colors.black,
          fontWeight: 700,
          alignItems: 'center',
          '&.Mui-selected': {
            color: Colors.black,
          },
          '&:hover': {
            color: Colors.lightPurple,
          },
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          width: '100%',
          paddingLeft: 8,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: '100%',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: 'auto',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: Colors.defaultGray,
          padding: '2px 8px 2px 16px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.searchInput': {
            border: `1px solid ${Colors.defaultGray}`,
            width: 'calc(100% - 32px)',
            margin: 16,
            '& .MuiOutlinedInput-notchedOutline': {
              borderBottom: 0,
            },
            '&.Mui-focused': {
              border: `2px solid ${Colors.lightblue}`,
            },
          },
          '&.nameInput': {
            fontSize: '14px',
            fontWeight: 700,
            width: '100%',
            borderRadius: 0,
            borderBottom: `2px solid ${Colors.lightPurple}`,
            '&:focus': {
              outline: 'none',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderBottom: 0,
            },
            '&.Mui-focused': {
              border: 0,
              borderBottom: `2px solid ${Colors.lightblue}`,
            },
          },
        },
        input: {
          padding: 0,
          paddingBottom: 2,
        },
        notchedOutline: {
          border: 0,
          borderBottom: `2px solid ${Colors.defaultGray}`,
          borderRadius: 0,
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: Colors.lightblue,
          ':checked': {
            color: Colors.lightblue,
          },
        },
        colorPrimary: {
          ':checked': {
            color: Colors.lightblue,
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          paddingLeft: 24,
          fontSize: '14px',
          lineHeight: '17px',
          fontWeight: 700,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        button: {
          color: Colors.black,
          '&:hover': {
            backgroundColor: Colors.lightPurple,
            color: Colors.white,
          },
          '&.Mui-selected': {
            backgroundColor: Colors.mediumPurple,
            color: Colors.white,
            '&:hover': {
              backgroundColor: Colors.lightPurple,
              color: Colors.white,
            },
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: Colors.dividerGray,
        },
        barColorPrimary: {
          backgroundColor: Colors.lightblue,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          height: 14,
          width: 27,
          padding: 0,
        },
        switchBase: {
          padding: 0,
          '&.Mui-checked': {
            color: 'transparent',
            '& .MuiSwitch-thumb': {
              right: 2,
              backgroundColor: Colors.white,
            },
          },
        },
        sizeSmall: {
          '& .MuiSwitch-thumb': {
            width: 6,
            height: 6,
            position: 'relative',
            backgroundColor: Colors.defaultGray,
          },
        },
        track: {
          backgroundColor: Colors.white,
          border: `2px solid ${Colors.defaultGray}`,
          opacity: 1,
        },
        colorPrimary: {
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '&.Mui-checked': {
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'transparent',
            },
            '&.Mui-checked +.MuiSwitch-track': {
              backgroundColor: Colors.lightblue,
              border: 'none',
              opacity: 1,
            },
          },
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          animationDuration: '550ms',
        },
        svg: {
          color: Colors.defaultGray,
        },
      },
    },
  },
  typography: {
    fontFamily: "'Lato', sans-serif",
    h1: {
      fontSize: '24px',
      fontWeight: 300,
      color: Colors.black,
    },
    h2: {
      fontSize: '20px',
      fontWeight: 300,
      color: Colors.black,
      letterSpacing: 0.15,
    },
    h3: {
      fontSize: '16px',
      fontWeight: 500,
      color: Colors.black,
      letterSpacing: 0.15,
    },
    h4: {
      fontSize: '14px',
      fontWeight: 700,
      color: Colors.defaultGray,
      letterSpacing: 0.15,
    },
    h6: {
      fontSize: '14px',
      fontWeight: 400,
      color: Colors.black,
      letterSpacing: 0.15,
    },
    body1: {
      fontSize: '14px',
      fontWeight: 700,
      color: Colors.black,
      letterSpacing: 0.15,
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      color: Colors.defaultGray,
      letterSpacing: 0.15,
    },
    subHeadline: {
      primary: {
        weight: 500,
        size: '16px',
        spacing: 0.15,
      },
      secondary: {
        weight: 300,
        size: '16px',
        spacing: 0.15,
      },
    },
    actionableText: {
      weight: 500,
      size: '14px',
      spacing: 0.1,
    },
    staticText: {
      weight: 300,
      size: '14px',
      spacing: 0.25,
    },
    buttonText: {
      weight: 500,
      size: '14px',
      spacing: 0,
      case: 'uppercase',
    },
    captionText: {
      weight: 400,
      size: '12px',
      spacing: 0.4,
      lineHeight: '14.4px',
    },
    caption: {
      fontSize: '10px',
      fontWeight: 400,
      color: Colors.black,
      letterSpacing: 0.15,
      lineHeight: '12px',
    },
    subtitle1: {
      fontSize: '12px',
      fontWeight: 400,
      color: Colors.black,
      letterSpacing: 0.4,
      lineHeight: '15px',
    },
    subtitle2: {
      fontSize: '12px',
      fontWeight: 400,
      color: Colors.defaultGray,
      letterSpacing: 0.4,
      lineHeight: '15px',
    },
  },
  divider: {
    backgroundColor: Colors.dividerGray,
  },
  palette: {
    common: {
      black: Colors.black,
      white: Colors.white,
      text: Colors.lightGray,
      textLight: Colors.lightGrayText,
      loader: Colors.shadowGray,
    },
    background: {
      light: Colors.controlPanelPurple,
      gray: Colors.swimLane,
      dark: Colors.darkPurple,
      paper: Colors.white,
      default: Colors.controlPanelPurple,
      transparent: 'transparent',
      lightBlueHeader: Colors.lightBlueHeader,
      lightBlueCell: Colors.lightBlueCell,
      backgroundGray: Colors.backgroundGray,
      lightenBlue: Colors.lightenBlue,
    },
    primary: {
      light: Colors.lightblue,
      main: Colors.lightblue,
      dark: Colors.mediumBlue,
      contrastText: Colors.white,
    },
    secondary: {
      light: Colors.lightPurple,
      main: Colors.mediumPurple,
      dark: Colors.darkPurple,
      contrastText: Colors.white,
    },
    action: {
      disabled: Colors.disabledGray,
      active: Colors.lightblue,
      default: Colors.lightPurple,
      hover: Colors.lightPurple,
    },
    divider: Colors.dividerGray,

    border: {
      divideBorder: Colors.dividerGray,
      modalShadow: Colors.modalShadow,
      avatarBorder: Colors.teal,
      defaultGrayBorder: Colors.defaultGray,
      lightenBlueBorder: Colors.lightenBlueBorder,
    },
    error: {
      main: Colors.warningred,
      contrastText: Colors.black,
      light: Colors.backgroundRedAlert,
    },
    warning: {
      main: Colors.warningYellow,
      contrastText: Colors.black,
      light: Colors.backgroundYellowAlert,
    },
    success: {
      main: Colors.positiveGreen,
      contrastText: Colors.black,
    },
    toast: {
      main: Colors.warningYellow,
      contrastText: Colors.black,
      light: Colors.toastBackground,
    },
    text: {
      primary: Colors.defaultGray,
      secondary: Colors.subHeadlineGray,
      disabled: Colors.disabledGray,
      light: Colors.white,
    },
    buttonIcon: {
      default: {
        bgWhite: Colors.gray,
        bgLight: Colors.black,
        bgGray: Colors.black,
        bgDark: Colors.white,
      },
      hover: {
        color: Colors.controlPanelPurple,
      },
      active: {
        color: Colors.lightblue,
      },
      lightPurpleBlock: {
        innerBg: Colors.mediumPurple,
        iconColor: Colors.white,
      },
    },
    strokeNBorders: {
      outerBorder: '2px',
      innerDivider: '1px',
    },
    notification: {
      badge: Colors.teal,
    },
    codingBox: {
      function: Colors.dataVizDarkBlue,
      valid: Colors.positiveGreen,
      darkOrange: Colors.dataVizDarkOrange,
      mediumPurple: Colors.dataVizMediumPurple,
    },
    shareAvatar: {
      editIcon: Colors.periwinkleBlue,
    },
    fontSize: [10, 12, 14, 16, 20, 24],
    spacing: [4, 8],
    // multiplier of 8
  },
};

export type DefaultTheme = typeof defaultTheme;
