import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Content = styled.ScrollView``;

export const Container = styled.View`
  padding: 0 30px ${Platform.OS === 'android' ? 100 : 40}px;

  flex: 1;
  justify-content: center;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;

  align-self: center;
`;
