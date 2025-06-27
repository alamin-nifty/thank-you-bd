import clsx from "clsx";
import { View, ViewProps } from "react-native";

export type CardProps = ViewProps & {
  shadow?: boolean;
  padding?: boolean;
};

export function Card({
  children,
  shadow = true,
  padding = true,
  className,
  ...props
}: CardProps) {
  return (
    <View
      className={clsx(
        "bg-white dark:bg-secondary-900 rounded-xl",
        shadow && "shadow-md dark:shadow-lg",
        padding && "p-4",
        className
      )}
      {...props}
    >
      {children}
    </View>
  );
}
