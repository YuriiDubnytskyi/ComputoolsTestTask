import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import { useLoginForm } from './model/use-login-form';
import { Controller } from 'react-hook-form';
import { useAppDispatch } from '../../store/hooks';
import { useCallback } from 'react';
import { login } from '../store-slice';
import { Button } from '../../components/Button';
import { useTheme } from '../../components/ThemeContext';

export const LoginScreen = () => {
  const { t } = useTranslation('login');
  const {
    control,
    formState: { isDirty, isValid, errors },
  } = useLoginForm();

  const { theme } = useTheme();

  const dispatch = useAppDispatch();

  const handleLogin = useCallback(() => {
    dispatch(login());
  }, [dispatch]);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
          <View style={styles.inputContainer}>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[
                    styles.input,
                    errors.email && styles.inputError,
                    { color: theme.inputColor, backgroundColor: theme.inputBackground },
                  ]}
                  placeholder={t('email')}
                  placeholderTextColor="#bdc3c7"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              )}
            />
            {errors.email && <Text style={styles.errorText}>{t(`${errors.email.message}`)}</Text>}
          </View>

          <View style={styles.inputContainer}>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[
                    styles.input,
                    errors.password && styles.inputError,
                    { color: theme.inputColor, backgroundColor: theme.inputBackground },
                  ]}
                  placeholder={t('password')}
                  placeholderTextColor="#bdc3c7"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              )}
            />
            {errors.password && <Text style={styles.errorText}>{t(`${errors.password.message}`)}</Text>}
          </View>

          <Button text={t('login')} onAction={handleLogin} disable={!(isDirty && isValid)} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
