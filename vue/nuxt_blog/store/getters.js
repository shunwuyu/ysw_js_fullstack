import globalConfig from '../server/config'

export default {
  baseUrl () {
    // let host = mock_url;
    let host = `http://${globalConfig.app.host}:${globalConfig.app.port}/${globalConfig.app.routerBaseApi}`;

    return host;
  }
}