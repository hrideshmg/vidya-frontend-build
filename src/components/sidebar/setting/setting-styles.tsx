export const settingStyles = {
  settingUI: {
    container: {
      width: "100%",
      height: "100%",
      p: 4,
      gap: 4,
      position: "relative",
      overflowY: "auto",
      css: {
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          bg: "whiteAlpha.100",
          borderRadius: "full",
        },
        "&::-webkit-scrollbar-thumb": {
          bg: "whiteAlpha.300",
          borderRadius: "full",
        },
      },
    },
    header: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 1,
    },
    title: {
      ml: 4,
      fontSize: "lg",
      fontWeight: "bold",
    },
    tabs: {
      root: {
        width: "100%",
        variant: "plain" as const,
        colorPalette: "gray",
      },
      content: {},
      trigger: {
        color: "whiteAlpha.600",
        _selected: {
          color: "white",
        },
        _hover: {
          color: "white",
        },
      },
    },
    footer: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      gap: 2,
      mt: "auto",
      pt: 4,
      borderTop: "1px solid",
      borderColor: "whiteAlpha.200",
    },
    drawerContent: {
      bg: "gray.900",
      maxWidth: "440px",
      height: "100vh",
      borderLeft: "1px solid",
      borderColor: "whiteAlpha.200",
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      position: "relative",
      px: 6,
      py: 4,
    },
    drawerTitle: {
      color: "white",
      fontSize: "lg",
      fontWeight: "semibold",
    },
    closeButton: {
      position: "absolute",
      right: 1,
      top: 1,
      color: "white",
     
    },
  },
  general: {
    container: {
      align: "stretch",
      gap: 6,
      p: 4,
    },
    field: {
      label: {
        color: "whiteAlpha.800",
      },
    },
    select: {
      root: {
        colorPalette: "gray",
        bg: "gray.800",
      },
      trigger: {
        bg: "gray.800",
      },
    },
    input: {
      bg: "gray.800",
    },
    buttonGroup: {
      gap: 4,
      width: "100%",
    },
    button: {
      width: "50%",
      variant: "outline" as const,
      bg: "blue",
      color: "white",
      _hover: {
        bg: "whiteAlpha.300",
      },
    },
    fieldLabel: {
      fontSize: "14px",
      color: "gray.600",
    },
  },
  live2d: {
    container: {
      gap: 8,
      maxW: "sm",
      css: { "--field-label-width": "120px" },
    },
    field: {
      orientation: "horizontal" as const,
    },
    fieldLabel: {
      fontSize: "sm",
      color: "whiteAlpha.800",
    },
    input: {
      flex: 1,
      bg: "whiteAlpha.100",
      borderColor: "whiteAlpha.200",
      _hover: {
        bg: "whiteAlpha.200",
      },
    },
    numberInput: {
      root: {
        pattern: "[0-9]*\\.?[0-9]*",
        inputMode: "decimal" as const,
      },
      input: {
        bg: "whiteAlpha.100",
        borderColor: "whiteAlpha.200",
        _hover: {
          bg: "whiteAlpha.200",
        },
      },
    },
    emotionMap: {
      title: {
        fontWeight: "bold",
        mb: 4,
      },
      entry: {
        mb: 2,
      },
      button: {
        colorPalette: "blue",
        mt: 2,
      },
      deleteButton: {
        colorPalette: "red",
      },
    },
    switch: {
      size: "md" as const,
      colorPalette: "blue" as const,
      variant: "solid" as const,
    },
  },
}; 