import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

export type ButtonProps = PressableProps & {
  title: string;
  variant?: "primary" | "secondary" | "outline";
  loading?: boolean;
  style?: ViewStyle;
};

export function Button({
  title,
  variant = "primary",
  loading,
  disabled,
  style,
  ...props
}: ButtonProps) {
  const getButtonStyle = (): ViewStyle => {
    const base: ViewStyle = {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
    };

    const variants: Record<string, ViewStyle> = {
      primary: {
        backgroundColor: "#667eea",
      },
      secondary: {
        backgroundColor: "#6b7280",
      },
      outline: {
        borderWidth: 1,
        borderColor: "#667eea",
        backgroundColor: "transparent",
      },
    };

    const buttonStyle: ViewStyle = Object.assign({}, base, variants[variant], {
      opacity: disabled || loading ? 0.5 : 1,
    });

    if (style) {
      return Object.assign({}, buttonStyle, style);
    }

    return buttonStyle;
  };

  const getTextStyle = (): TextStyle => {
    const textVariants: Record<string, TextStyle> = {
      primary: {
        color: "white",
      },
      secondary: {
        color: "white",
      },
      outline: {
        color: "#667eea",
      },
    };

    return {
      fontWeight: "bold",
      fontSize: 16,
      ...textVariants[variant],
    };
  };

  return (
    <Pressable
      style={getButtonStyle()}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={variant === "outline" ? "#667eea" : "#fff"} />
      ) : (
        <Text style={getTextStyle()}>{title}</Text>
      )}
    </Pressable>
  );
}
