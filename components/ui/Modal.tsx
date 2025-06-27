import clsx from "clsx";
import { ReactNode } from "react";
import {
  Platform,
  Pressable,
  Modal as RNModal,
  Text,
  View,
} from "react-native";

export type ModalProps = {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

export function Modal({ visible, onClose, title, children }: ModalProps) {
  return (
    <RNModal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
      statusBarTranslucent={true}
      accessibilityViewIsModal={true}
    >
      <View className="flex-1 bg-black/40 items-center justify-center">
        <View className="bg-white dark:bg-secondary-900 rounded-2xl w-11/12 max-w-xl p-6 shadow-lg">
          {title && (
            <Text className="text-xl font-bold mb-4 text-primary-700 dark:text-primary-300">
              {title}
            </Text>
          )}
          {children}
          <Pressable
            className={clsx(
              "mt-6 px-4 py-2 rounded-lg bg-primary-600 dark:bg-primary-400 items-center",
              Platform.OS === "ios" && "shadow"
            )}
            onPress={onClose}
            accessibilityLabel="Close modal"
            accessibilityRole="button"
          >
            <Text className="text-white dark:text-black font-bold">Close</Text>
          </Pressable>
        </View>
      </View>
    </RNModal>
  );
}
