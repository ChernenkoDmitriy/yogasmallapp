import React, { FC, useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { useUiContext } from '../../../../../src/UIProvider';
import { getStyle } from './styles';
import Carousel from 'react-native-reanimated-carousel';
import { IBanner } from '../../../../entities/banner/IBanner';
import { scaleHorizontal, Utils } from '../../../../../src/utils/Utils';
import { useSharedValue } from 'react-native-reanimated';
import { PaginationItem } from '../BannersPaginationItem';
import { BannersCarouselItem } from '../bannersCarouselItem';

interface IProps {
    banners: IBanner[];
};

export const HomeBannersCarousel: FC<IProps> = ({ banners }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(), []);
    const progressValue = useSharedValue<number>(0);

    const renderItem = useCallback(({ item }: { item: IBanner }) => (<BannersCarouselItem item={item} />), []);

    return (
        <View style={styles.container}>
            <Carousel
                loop
                pagingEnabled={true}
                snapEnabled={true}
                width={Utils.size.width}
                height={scaleHorizontal(200)}
                autoPlay={true}
                autoPlayInterval={5000}
                onProgressChange={(_, absoluteProgress) =>
                    (progressValue.value = absoluteProgress)
                }
                
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50,
                }}
                data={banners}
                scrollAnimationDuration={1000}
                renderItem={renderItem}
            />
            {!!progressValue &&
                <View style={styles.indicatorsWrapper}>
                    {banners.map((item) => {
                        return (
                            <PaginationItem
                                backgroundColor={colors.activeIndicator}
                                animValue={progressValue}
                                index={item.id}
                                key={item.id}
                                length={banners.length}
                            />
                        );
                    })}
                </View>
            }
        </View>
    )
};
