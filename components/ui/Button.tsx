import clsx from "clsx";
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  Text,
} from "react-native";

export type ButtonProps = PressableProps & {
  title: string;
  variant?: "primary" | "secondary" | "outline";
  loading?: boolean;
};

export function Button({
  title,
  variant = "primary",
  loading,
  disabled,
  ...props
}: ButtonProps) {
  const base = "px-4 py-2 rounded-lg items-center justify-center";
  const variants = {
    primary: "bg-primary-600 dark:bg-primary-400",
    secondary: "bg-secondary-600 dark:bg-secondary-400",
    outline: "border border-primary-600 dark:border-primary-400 bg-transparent",
  };
  const textVariants = {
    primary: "text-white dark:text-black",
    secondary: "text-white dark:text-black",
    outline: "text-primary-600 dark:text-primary-400",
  };
  return (
    <Pressable
      className={clsx(base, variants[variant], disabled && "opacity-50")}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text className={clsx("font-bold text-base", textVariants[variant])}>
          {title}
        </Text>
      )}
    </Pressable>
  );
}
