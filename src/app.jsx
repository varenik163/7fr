import React from 'react';
import { App as App7, Panel, View, Statusbar } from 'framework7-react';
import routes from './routes';

function App(props) {
  let theme = 'auto';
  if (document.location.search.indexOf('theme=') >= 0) {
    theme = document.location.search.split('theme=')[1].split('&')[0];
  }
  return (
    <App7 params={{ theme, routes }}>
      <Statusbar />
      <Panel left cover>
        <View url="/panel-left/" linksView=".view-main" />
      </Panel>
      <Panel right reveal>
        <View url="/panel-right/"/>
      </Panel>
      <View url="/" main className="ios-edges"/>
    </App7>
  );
};

export default App
