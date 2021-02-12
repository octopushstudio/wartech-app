import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Platform,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import {
  CustomText,
  CustomContainer,
  Gap,
  CustomStarRating,
} from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome5';
const PinMap = require('../../assets/icons/pin-map.png');
import {Fire} from '../../config';

const {width, height} = Dimensions.get('window');
const CARD_HEIGHT = 250;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
const outlet1 = {
  uri:
    'https://www.javatravel.net/wp-content/uploads/2020/06/Intro-Jazz-Bistro-And-Cafe.jpg',
};
const outlet2 = {
  uri:
    'https://www.javatravel.net/wp-content/uploads/2020/06/Cafe-Tangerang.jpg',
};
const outlet3 = {
  uri:
    'https://1.bp.blogspot.com/-JuigmIi4h2M/XbqGlNJMeuI/AAAAAAAADrA/8w2prZUS7xIoHTDA7er19D062Y341hc4wCLcBGAsYHQ/s1600/lokasi-dan-daftar-menu-kopi-daong-bogor-jawa-barat.jpg',
};
const outlet4 = {
  uri: 'https://i.ytimg.com/vi/jee81TGTIjM/maxresdefault.jpg',
};

const MapsScreen = () => {
  const [count, setCount] = useState(0);
  const [dataReady, setDataReady] = useState(false);
  const [mapData, setMapData] = useState({
    region: {
      latitude: -6.158763,
      longitude: 107.087758,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    marker: [
      {
        coordinate: {
          latitude: -6.178763,
          longitude: 107.022758,
        },
        name: 'Coffeeshop Cabang 1',
        image: outlet3,
        description:
          'Rasakan sensasi nongkrong berbeda dari yang lainnya disini!',
        rating: 3,
        reviews: 124,
      },
      {
        coordinate: {
          latitude: -6.178763,
          longitude: 107.028758,
        },
        name: 'Coffeeshop Cabang 2',
        image: outlet3,
        description:
          'Rasakan sensasi nongkrong berbeda dari yang lainnya disini!',
        rating: 3,
        reviews: 124,
      },
      {
        coordinate: {
          latitude: -6.178763,
          longitude: 107.061758,
        },
        name: 'Coffeeshop Cabang 3',
        image: outlet1,
        description:
          'Rasakan sensasi nongkrong berbeda dari yang lainnya disini!',
        rating: 3,
        reviews: 324,
      },
    ],
    category: [
      {
        name: 'Makanan',
        icon: <Icon name="hamburger" style={styles.chipsIcon} size={18} />,
      },
      {
        name: 'Kopi',
        icon: <Icon name="coffee" style={styles.chipsIcon} size={18} />,
      },
      {
        name: 'Outlet',
        icon: <Icon name="store" style={styles.chipsIcon} size={18} />,
      },
      {
        name: 'FastFood Center',
        icon: <Icon name="store" style={styles.chipsIcon} size={18} />,
      },
    ],
  });
  // Variabel
  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  const getMarker = async () => {
    setTimeout(() => {
      mapData.marker.push({
        coordinate: {
          latitude: -6.168863,
          longitude: 107.041758,
        },
        name: 'Coffeeshop Cabang 4',
        image: outlet4,
        description:
          'Rasakan sensasi nongkrong berbeda dari yang lainnya disini!',
        rating: 3,
        reviews: 324,
      });
      console.log('Success get');
      setDataReady(true);
    }, 1500);
  };

  useEffect(() => {
    // addOutlet();
    getMarker();
    // getOutlet();
  }, []);

  const mapAnimationFunction = () => {
    mapAnimation.addListener(({value}) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3);
      if (index > mapData.marker.length) {
        index = mapData.marker.length - 1;
      }
      if (index < 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index;
          const {coordinate} = mapData.marker[index];
          _map.current.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: mapData.region.latitudeDelta,
              longitudeDelta: mapData.region.longitudeDelta,
            },
            350,
          );
        }
      }, 10);
    });
  };

  const interpolations = mapData.marker.map((item, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ];
    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 2, 1],
      extrapolate: 'clamp',
    });

    return {scale};
  });

  const onMarkerPress = (mapEventData) => {
    const markerID = mapEventData._targetInst.return.key;

    let x = markerID * CARD_WIDTH + markerID * 20;
    if (Platform.OS === 'ios') {
      x = x - SPACING_FOR_CARD_INSET;
    }

    _scrollView.current.scrollTo({x: x, y: 0, animated: true});
  };

  const getOutlet = () => {
    Fire.database()
      .ref('outlets/')
      .on('value', (res) => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map((key) => {
            data.push(oldData[key]);
          });
          // setDoctors(data);
          mapData.marker = data;
          setCount(count + 1);
          console.log('ini array data : ', data);
        }
      });
    // .catch((err) => {
    //   // showError(err.message);
    //   console.log(err.message);
    // });
    setCount(count + 1);
  };

  const addOutlet = () => {
    const urlOutlets = 'outlets';

    mapData.marker.map((item, index) => {
      const data = {
        name: item.name,
        image: item.image,
        description: item.description,
        rating: item.rating,
        reviews: item.reviews,
        coordinate: item.coordinate,
      };
      Fire.database()
        .ref(urlOutlets)
        .push(data)
        .then((res) => {
          console.log('Outlet created successfully');
          // console.log('Form : ', form);
        })
        .catch((err) => {
          // showError(err.message);
          console.log(err.message);
        });
    });
  };

  const _map = useRef(null);
  const _scrollView = useRef(null);

  if (dataReady) {
    mapAnimationFunction();
    return (
      <CustomContainer stylesProps={{paddingTop: -30}}>
        <MapView
          provider={PROVIDER_GOOGLE}
          // customMapStyle={mapDarkStyle}
          ref={_map}
          mapType="satellite"
          style={{width: '100%', height: '100%', flex: 1}}
          initialRegion={{
            ...mapData.marker[0].coordinate,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {mapData.marker.map((item, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[index].scale,
                },
              ],
            };
            return (
              <Marker
                key={index}
                coordinate={item.coordinate}
                onPress={(e) => onMarkerPress(e)}>
                {/* <Image source={PinMap} style={{height: 44, width: 32}} />
              <Callout tooltip>
                <View style={styles.bubble}>
                  <CustomText size="large">{item.name}</CustomText>
                  <Gap height={3} />
                  <Image source={outlet1} style={styles.image} />
                </View>
                <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
              </Callout> */}
                <Animated.View style={[styles.markerWrap]}>
                  <Animated.Image
                    source={PinMap}
                    style={[styles.marker, scaleStyle]}
                    resizeMode="cover"
                  />
                </Animated.View>
              </Marker>
            );
          })}
        </MapView>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Cari.."
            placeholderTextColor="#000"
            autoCapitalize="none"
            style={{flex: 1, padding: 3}}
          />
          <Icon name="search" size={18} />
        </View>
        <ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          height={50}
          style={styles.chipScrollView}>
          {mapData.category.map((item, index) => (
            <TouchableOpacity key={'key-' + index} style={styles.chipsItem}>
              {item.icon}
              <CustomText>{item.name}</CustomText>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Animated.ScrollView
          ref={_scrollView}
          horizontal
          pagingEnabled
          scrollEventThrottle={1}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH + 20}
          snapToAlignment="center"
          contentContainerStyle={{
            paddingHorizontal:
              Platform.OS === 'ios' ? 0 : SPACING_FOR_CARD_INSET,
          }}
          contentInset={{
            top: 0,
            left: SPACING_FOR_CARD_INSET,
            bottom: 0,
            right: SPACING_FOR_CARD_INSET,
          }}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: mapAnimation,
                  },
                },
              },
            ],
            {useNativeDriver: true},
          )}
          style={styles.scrollView}>
          {mapData.marker.map((item, index) => (
            <View key={'key-' + index} style={styles.card}>
              <Image
                source={item.image}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.textContent}>
                <CustomText numberOfLines={1} size="medium" weight="bold">
                  {item.name}
                </CustomText>
                <CustomStarRating
                  ratings={item.rating}
                  reviews={item.reviews}
                />
                <CustomText numberOfLines={1}>{item.description}</CustomText>
                {/* Button */}
                <View style={styles.btnContainer}>
                  <TouchableOpacity
                    onPress={() => addOutlet()}
                    style={[
                      styles.signIn,
                      {
                        borderColor: '#FF6347',
                        borderWidth: 1,
                      },
                    ]}>
                    <CustomText
                      style={[
                        styles.textSign,
                        {
                          color: '#FF6347',
                        },
                      ]}>
                      Petunjuk Arah
                    </CustomText>
                  </TouchableOpacity>
                  <Gap width={10} />
                  <TouchableOpacity
                    onPress={() => addOutlet()}
                    style={[
                      styles.signIn,
                      {
                        backgroundColor: '#FF6347',
                        // borderWidth: 1,
                      },
                    ]}>
                    <CustomText
                      stylesProps={{
                        color: '#fff',
                      }}>
                      Pesan Sekarang
                    </CustomText>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </Animated.ScrollView>
      </CustomContainer>
    );
  } else {
    return null;
  }
};

export default MapsScreen;

const styles = StyleSheet.create({
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: '#ccc',
    padding: 15,
    width: 150,
  },
  image: {width: 120, height: 80},
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  searchBox: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipScrollView: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 90 : 80,
    paddingHorizontal: 10,
  },
  chipsIcon: {
    marginRight: 5,
  },
  chipsItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 35,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  scrollView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  card: {
    // padding: 10,
    elevation: 2,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {x: 2, y: -2},
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: 'hidden',
    paddingBottom: 25,
  },
  cardImage: {
    flex: 3,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  signIn: {
    width: '45%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  marker: {
    width: 20,
    height: 30,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
});
