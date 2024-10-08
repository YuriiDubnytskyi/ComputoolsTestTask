import { View, Text, Modal, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useTranslation } from 'react-i18next';

type ErrorModalProps = {
  isVisible: boolean;
  onConfirm: () => void;
};

export const ErrorModal = ({ isVisible, onConfirm }: ErrorModalProps) => {
  const { t } = useTranslation('common');

  return (
    <Modal transparent={true} animationType="slide" visible={isVisible} onRequestClose={onConfirm}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{t('somethingWentWrong')}</Text>
          <Text style={styles.modalMessage}>{t('tryAgainLater')}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
              <Text style={styles.buttonText}>{t('ok')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
