import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  CustomHeader,
  ChatItem,
  InputChat,
  CustomContainer,
} from '../../components';
import {fonts, getData, showError, getChatTime, setDateChat} from '../../utils';
import {Fire} from '../../config';
import {colors} from '../../constants/Colors';

// Socket.io config :
import {io} from 'socket.io-client';
const socket = io('http://localhost:54800');

const ChattingFire = (props) => {
  const {navigation, route} = props;
  const dataDoctor = route.params;
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState({});
  const [chatData, setChatData] = useState([]);
  const [count, setCount] = useState(0);
  const [chatPayload, setChatPayload] = useState({
    sendBy: '', //user.uid,
    chatDate: '',
    chatTime: '',
    chatContent: '',
  });

  useEffect(() => {
    // getDataUserFromLocal();
    // getDataChatting();
    getDataFromSocket();
  }, []);

  const sendDataSocket = () => {
    socket.emit('message', chatContent);
  };

  const getDataFromSocket = () => {
    socket.on('message', (data) => {
      console.log(data);
      setChatData(data);
    });
  };

  const chatSend = () => {
    const today = new Date();
    chatPayload.sendBy = 50; //user.uid;
    chatPayload.chatDate = today.getTime();
    chatPayload.chatTime = getChatTime(today);
    chatPayload.chatContent = chatContent;

    const chatID = '50_92'; //`${user.uid}_${dataDoctor.data.uid}`;

    const urlChat = `chatting/${chatID}/allChat/${setDateChat(today)}`;
    const urlMessagesUser = `messages/50/${chatID}`;
    const urlMessagesDoctor = `messages/92/${chatID}`;
    const dataHistoryChatForUser = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: 92, //dataDoctor.data.uid,
    };
    const dataHistoryChatForDoctor = {
      lastContentChat: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: 50, //user.uid,
    };

    Fire.database()
      .ref(urlChat)
      .push(chatPayload)
      .then((res) => {
        setChatContent('');
        // set history for user
        Fire.database().ref(urlMessagesUser).set(dataHistoryChatForUser);
        // set history for doctor
        Fire.database().ref(urlMessagesDoctor).set(dataHistoryChatForDoctor);
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  const getDataUserFromLocal = () => {
    getData('user').then((res) => {
      setUser(res);
      getDataChatting(res);
    });
  };

  const deleteData = async (id) => {
    await Fire.database().ref(`users/${id}`).remove();
  };

  const getDataChatting = (userData) => {
    const chatID = '50_92'; //`${userData.uid}_${dataDoctor.data.uid}`;
    const urlChat = `chatting/${chatID}/allChat/`;
    Fire.database()
      .ref(urlChat)
      .on('value', (snapshot) => {
        // console.log('Ini value : ', snapshot.val());
        if (snapshot.val()) {
          // Get data from firebase base object
          const dataSnapshot = snapshot.val();
          const allDataChat = [];

          // Mapping Object
          Object.keys(dataSnapshot).map((key) => {
            // Initial variable
            const dataChat = dataSnapshot[key];
            const newDataChat = [];
            // Mapping Object
            Object.keys(dataChat).map((itemChat) => {
              newDataChat.push({
                id: itemChat,
                data: dataChat[itemChat],
              });
            });
            // Store object mapping to variable
            allDataChat.push({
              id: key,
              data: newDataChat,
            });
          });
          // setState
          setChatData(allDataChat);
          setCount(count + 1);
        }
      });
  };

  return (
    <CustomContainer stylesProps={styles.page}>
      <CustomHeader
        title={'Bambang'}
        type="dark"
        // desc={dataDoctor.data.profession}
        // photo={{uri: dataDoctor.data.image}}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          ref={(scroll) => {
            this.scroll = scroll;
          }}
          onContentSizeChange={() => this.scroll.scrollToEnd()}>
          {chatData.map((chat) => {
            return (
              <View key={chat.id}>
                <Text style={styles.date}>{chat.id}</Text>
                {chat.data.map((itemChat) => {
                  const isMe = itemChat.data.sendBy === user.uid;
                  return (
                    <ChatItem
                      onLongPress={() => deleteData()}
                      key={itemChat.id}
                      text={itemChat.data.chatContent}
                      date={itemChat.data.chatTime}
                      isMe={isMe}
                      photo={
                        isMe
                          ? null
                          : {
                              uri:
                                'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
                            }
                      }
                    />
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
      </View>
      <InputChat
        value={chatContent}
        onChangeText={(value) => setChatContent(value)}
        onPress={() => {
          // chatSend();
          sendDataSocket;
        }}
      />
    </CustomContainer>
  );
};

export default ChattingFire;

const styles = StyleSheet.create({
  page: {
    paddingTop: -30,
  },
  content: {
    flex: 1,
  },
  date: {
    textAlign: 'center',
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
  },
});
