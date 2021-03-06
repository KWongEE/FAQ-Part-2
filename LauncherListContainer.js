import React from 'react';
import LauncherInformation from '../components/LauncherInformation'

class LauncherListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      launcherInfo: {}
    }
  }

  componentDidMount() {
    let launcherId = this.props.params.id;
    fetch(`/api/v1/launcher/${launcherId}`)
    .then(response => {
      let parsed = response.json()
      return parsed
    })
    .then(launcher => {
      this.setState({ launcherInfo: launcher})
    })
  }

  render() {
    return(
      <LauncherInformation
        id={this.state.launcherInfo.id}
        name={this.state.launcherInfo.name}
        bio={this.state.launcherInfo.bio}
      />
    )
  }
}

export default LauncherListContainer;
