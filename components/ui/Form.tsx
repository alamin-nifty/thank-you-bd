import clsx from "clsx";
import { View, ViewProps } from "react-native";

export function Form({
  children,
  className,
  ...props
}: ViewProps & { className?: string }) {
  return (
    <View className={clsx("gap-4", className)} {...props}>
      {children}
    </View>
  );
}
