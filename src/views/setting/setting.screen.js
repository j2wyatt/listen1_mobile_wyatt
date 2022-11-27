import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import styled, { withTheme } from 'styled-components';
import { Switch } from 'react-native-gesture-handler';
import { changeTheme } from '../../redux/actions';
import {
  RowFlex,
  ThemeFlex,
  PrimaryText,
  TableCellRow,
} from '../../components';

const SettingRow = styled(RowFlex)`
  height: 60px;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.borderColor};
`;

const KeyField = styled(PrimaryText)`
  text-align: left;
`;

class Setting extends React.Component {
  static navigationOptions = ({ screenProps }) => {
    return {
      title: '更多',
      headerTintColor: screenProps.theme.primaryColor,
      headerStyle: { backgroundColor: screenProps.theme.windowColor },
    };
  };
  props: {
    settingState: Object,
    dispatch: Function,
    theme: Object,
    navigation: Object,
  };
  constructor(props) {
    super(props);
    this.onChangeTheme = this.onChangeTheme.bind(this);
    this.onPressAbout = this.onPressAbout.bind(this);
    this.onPressBackup = this.onPressBackup.bind(this);
    this.onPressRestore = this.onPressRestore.bind(this);
    this.onPressGistAuth = this.onPressGistAuth.bind(this)
    this.state = {consoleStr: ''}
  }
  onChangeTheme(newValue) {
    let nextTheme = 'black';

    if (newValue) {
      nextTheme = 'black';
    } else {
      nextTheme = 'white';
    }
    this.props.dispatch(changeTheme(nextTheme));
  }
  onPressAbout() {
    this.props.navigation.navigate('About');
  }
  onPressBackup() {
    this.props.navigation.navigate('ExportLocal');
  }
  onPressRestore() {
    this.props.navigation.navigate('ImportLocal');
  }
  onPressGistAuth() {
    this.setState({consoleStr: '蒙古大帝国'})
  }
  render() {

    return (
      <ThemeFlex>
        <FlatList
          ref={ref => {
            this.flatListRef = ref;
          }}
          keyExtractor={item => item.toString()}
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={item => {
            if (item.index === 0) {
              return (
                <SettingRow>
                  <KeyField>夜间模式</KeyField>

                  <Switch
                    value={this.props.settingState.theme === 'black'}
                    onValueChange={this.onChangeTheme}
                  />
                </SettingRow>
              );
            } else if (item.index === 1) {
              return <TableCellRow onPress={this.onPressBackup} title="备份" />;
            } else if (item.index === 2) {
              return (
                <TableCellRow onPress={this.onPressRestore} title="恢复" />
              );
            } else if (item.index === 3) {
              return (
                <TableCellRow
                  onPress={this.onPressGistAuth}
                  title="gist 恢复"
                />
              );
            }
            else if (item.index === 4) {
              return (
                <TableCellRow
                  onPress={this.onPressAbout}
                  title="关于 Listen 1"
                />
              );
            }
            else if (item.index === 5) {
              return (
                <TableCellRow
                  title={this.state.consoleStr}
                />
              );
            }

            return null;
          }}
        />
      </ThemeFlex>
    );
  }
}
const mapStateToProps = ({ settingState }) => ({
  settingState,
});

export default connect(mapStateToProps)(withTheme(Setting));
