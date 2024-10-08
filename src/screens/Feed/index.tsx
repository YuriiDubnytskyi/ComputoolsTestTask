import { View, Text, ActivityIndicator, FlatList, Image, RefreshControl } from 'react-native';
import styles from './styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useCallback, useEffect } from 'react';
import { clearError, getImageList, getImageMore } from '../store-slice';
import { GetImagesListResult } from '../../types';
import { ErrorModal } from '../../components/ErrorModal';
import { useTheme } from '../../components/ThemeContext';

export const FeedScreen = () => {
  const dispatch = useAppDispatch();
  const { loading, list, isError, loadingMore } = useAppSelector(({ store }) => store);

  const { theme } = useTheme();

  useEffect(() => {
    if (list.data.length === 0) {
      dispatch(
        getImageList({
          page: 1,
          limit: 10,
        }),
      );
    }
  }, [dispatch, list.data.length]);

  const handleLoadMore = useCallback(() => {
    dispatch(
      getImageMore({
        page: list.page + 1,
        limit: list.limit,
      }),
    );
  }, [dispatch, list.page, list.limit]);

  const onRefresh = useCallback(() => {
    dispatch(
      getImageList({
        page: 1,
        limit: 10,
      }),
    );
  }, [dispatch]);

  const handleCloseError = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  const renderItem = ({ item }: { item: GetImagesListResult[0] }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.download_url }} style={styles.image} />
      <Text style={[styles.author, { color: theme.white, backgroundColor: theme.grey800 }]}>{item.author}</Text>
    </View>
  );

  const renderFooter = () => {
    if (!loadingMore) {
      return null;
    }
    return <ActivityIndicator style={styles.loader} />;
  };

  if (loading) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: theme.backgroundColor }]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <FlatList
        data={list.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}
      />
      <ErrorModal isVisible={isError} onConfirm={handleCloseError} />
    </View>
  );
};
