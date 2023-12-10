import React from "react";
import { styled, VariantProps, CSS } from "../stitches.config";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { Box } from "./Box";
import { Status } from "./Status";

type StatusVariants = React.ComponentProps<typeof Status>;
type StatusColors = Pick<StatusVariants, "variant">;

type AvatarPrimitiveProps = React.ComponentProps<typeof AvatarPrimitive.Root>;
type AvatarVariants = VariantProps<typeof StyledAvatar>;
type AvatarProps = AvatarPrimitiveProps &
  AvatarVariants & {
    alt?: string;
    css?: CSS;
    fallback?: React.ReactNode;
    src?: string;
    status?: StatusColors["variant"];
  };

export const Avatar = React.forwardRef<React.ElementRef<typeof StyledAvatar>, AvatarProps>(
  ({ alt, css, fallback, shape, size, src, status, ...props }, forwardedRef) => (
    <Box
      css={{
        ...css,
        height: "fit-content",
        position: "relative",
        width: "fit-content",
      }}
    >
      <StyledAvatar {...props} ref={forwardedRef} shape={shape} size={size}>
        <StyledAvatarImage alt={alt} src={src} />
        <StyledAvatarFallback delayMs={300} size={size}>
          {fallback}
        </StyledAvatarFallback>
      </StyledAvatar>
      {status && (
        <Box
          css={{
            borderRadius: "$round",
            bottom: "0",
            boxShadow: "0 0 0 3px $colors$loContrast",
            mb: "-3px",
            mr: "-3px",
            position: "absolute",
            right: "0",
          }}
        >
          <Status size={size && Number(size) > 2 ? "2" : "1"} variant={status} />
        </Box>
      )}
    </Box>
  )
);

const StyledAvatar = styled(AvatarPrimitive.Root, {
  alignItems: "center",
  border: "none",
  boxSizing: "border-box",
  color: "$hiContrast",
  display: "flex",
  flexShrink: 0,
  fontFamily: "inherit",
  fontWeight: 500,
  justifyContent: "center",
  lineHeight: "1",
  margin: "0",
  outline: "none",
  overflow: "hidden",
  padding: "0",
  position: "relative",
  userSelect: "none",
  verticalAlign: "middle",

  "&::before": {
    borderRadius: "inherit",
    bottom: 0,
    boxShadow: "inset 0px 0px 1px rgba(0, 0, 0, 0.12)",
    content: '""',
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },

  backgroundColor: "$cloud",

  variants: {
    size: {
      "1": {
        height: "$3",
        width: "$3",
      },
      "2": {
        height: "$5",
        width: "$5",
      },
      "3": {
        height: "$6",
        width: "$6",
      },
      "4": {
        height: "$7",
        width: "$7",
      },
      "5": {
        height: "$8",
        width: "$8",
      },
      "6": {
        height: "$9",
        width: "$9",
      },
    },
    shape: {
      circle: {
        borderRadius: "50%",
      },
      square: {
        borderRadius: "$2",
      },
    },
    inactive: {
      true: {
        opacity: ".3",
      },
    },
    interactive: {
      true: {
        "&::after": {
          backgroundColor: "rgba(0,0,0,.08)",
          bottom: "0",
          content: '""',
          left: "0",
          opacity: "0",
          pointerEvents: "none",
          position: "absolute",
          right: "0",
          top: "0",
          transition: "opacity 100ms linear",
        },
        "@hover": {
          "&:hover": {
            "&::after": {
              opacity: "1",
            },
          },
        },
        '&[data-state="open"]': {
          "&::after": {
            backgroundColor: "rgba(0,0,0,.12)",
            opacity: "1",
          },
        },
      },
    },
  },
  defaultVariants: {
    shape: "circle",
    size: "3",
  },
});

const StyledAvatarImage = styled(AvatarPrimitive.Image, {
  boxSizing: "border-box",
  display: "flex",
  height: "100%",
  objectFit: "cover",
  verticalAlign: "middle",
  width: "100%",
});

const StyledAvatarFallback = styled(AvatarPrimitive.Fallback, {
  textTransform: "uppercase",

  variants: {
    size: {
      "1": {
        fontSize: "10px",
        lineHeight: "15px",
      },
      "2": {
        fontSize: "$3",
      },
      "3": {
        fontSize: "$6",
      },
      "4": {
        fontSize: "$7",
      },
      "5": {
        fontSize: "$8",
      },
      "6": {
        fontSize: "$9",
      },
    },
  },
  defaultVariants: {
    size: "3",
  },
});
