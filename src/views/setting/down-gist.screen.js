import React from 'react';
import { ScrollView, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import styled, { withTheme } from 'styled-components';
import { Text } from 'react-native-elements';
import { ThemeFlex, PrimaryText } from '../../components';
import StateJsonConvert from '../../modules/state-json-convert';
import { changeGistAddress, recoverData } from '../../redux/actions';
import { showToast } from '../../modules/toast';

const Preview = styled(ScrollView)`
  flex: 0 200px;
  margin-bottom: 20px;
`;

class DownGist extends React.Component {
  static navigationOptions = ({ screenProps }) => {
    return {
      title: '从 gist 恢复',
      headerTintColor: screenProps.theme.primaryColor,
      headerStyle: { backgroundColor: screenProps.theme.windowColor },
    };
  };

  props: {
    dispatch: Function,
    settingState: Object,
    gist: Object,
  };

  state = {
    terMsg: '',
    gistAddress: '',
    gistText: '',
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({gistAddress: this.props.settingState.gist})
  }

  componentDidMount() {

  }

  onPressGet = async () => {
    this.setState({ terMsg: `开始请求文件...` });
    let fileText = '';
    try {
      fileText = await this.getGist(this.state.gistAddress);
    } catch (err) {
      this.setState({ terMsg: `${this.state.terMsg}\n请求出错` });
      return;
    }
    this.setState({ gistText: fileText });
    this.setState({ terMsg: `${this.state.terMsg}\n取到了文件内容` });
    try {
      JSON.parse(this.state.gistText);
    } catch {
      this.setState({ terMsg: '文件内容不符合 json 格式' });
      return;
    }
    this.setState({ terMsg: `${this.state.terMsg}\n文件内容符合 JSON 格式` });
    this.onPressRecover();
    this.setState({ terMsg: `${this.state.terMsg}\n本地歌单已被覆盖` });
    this.setState({ terMsg: `${this.state.terMsg}\n歌单恢复成功，请返回查看` });
  };

  getGist = async (address) => {
    const url = address;
    this.props.dispatch(changeGistAddress(url));
    let response = await fetch(url);
    let responseJson = await response.text();
    return responseJson;
  };

  handleGistChange = (text) => {
    this.setState({ gistAddress: text });
  };

  onPressRecover = () => {
    const json = JSON.parse(this.state.gistText);
    const state = StateJsonConvert.getState(json);

    this.props.dispatch(recoverData(state));
    showToast('恢复成功,请返回');
  };

  render() {
    return (
      <ThemeFlex style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}> 填入 GITHUB gist 文件地址：</Text>
        <TextInput value={this.state.gistAddress} onChangeText={this.handleGistChange}
                   style={{ borderWidth: 2, height: 40, marginBottom: 40 }}></TextInput>
        <Button title='恢复到本地' onPress={this.onPressGet} />
        <Text style={{ fontSize: 15, marginTop: 20 }}> 恢复详情： </Text>
        <Preview>
          <PrimaryText style={{ borderWidth: 1, minHeight: 100, marginTop: 5 }}> {this.state.terMsg} </PrimaryText>
        </Preview>
      </ThemeFlex>
    );
  }
}

const mapStateToProps = ({ settingState }) => ({
  settingState,
});

export default connect(mapStateToProps)(withTheme(DownGist));
