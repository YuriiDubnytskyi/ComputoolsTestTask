import { View, Text, Image, ActivityIndicator } from 'react-native';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useCallback, useEffect } from 'react';
import { changeTheme, clearError, clearStore, getUserDetails } from '../store-slice';
import { ErrorModal } from '../../components/ErrorModal';
import { Button } from '../../components/Button';
import { useTheme } from '../../components/ThemeContext';

export const DetailsScreen = () => {
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();
  const { loading, details, isError, theme: themeMode } = useAppSelector(({ store }) => store);

  const { theme } = useTheme();

  useEffect(() => {
    if (!details) {
      dispatch(getUserDetails({ id: '1' }));
    }
  }, [dispatch, details]);

  const handleThemeChange = useCallback(() => {
    dispatch(changeTheme());
  }, [dispatch]);

  const handleLogout = useCallback(() => {
    dispatch(clearStore());
  }, [dispatch]);

  const handleCloseError = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: theme.backgroundColor }]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <View style={[styles.profileContainer, { backgroundColor: theme.blue100 }]}>
        <Image source={{ uri: details?.avatar }} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={[styles.userName, { color: theme.white100 }]}>{t('name', { name: details?.first_name })}</Text>
          <Text style={[styles.userEmail, { color: theme.white200 }]}>{t('email', { email: details?.email })}</Text>
        </View>
      </View>

      <View style={styles.buttonsWrapper}>
        <Button
          text={t('changeThemeTo', { theme: themeMode !== 'light' ? t('light') : t('dark') })}
          onAction={handleThemeChange}
        />
        <Button text={t('logout')} onAction={handleLogout} />
      </View>
      <ErrorModal isVisible={isError} onConfirm={handleCloseError} />
    </View>
  );
};
