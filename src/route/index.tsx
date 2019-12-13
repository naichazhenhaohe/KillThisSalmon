import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '@com/Header'
import Footer from '@com/Footer'
import SalmonRun from '@/pages/salmonRun'
import TurfWar from '@/pages/turfWar'
import RankBattle from '@/pages/rankBattle'
import LeagueBattle from '@/pages/leagueBattle'
import SplatNetGear from '@/pages/splatNetGear'
import { myTheme } from '@/globalcss/myTheme'
import { ThemeProvider } from 'styled-components'

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={myTheme}>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={SalmonRun}></Route>
            <Route path="/turfWar" component={TurfWar}></Route>
            <Route path="/rankBattle" component={RankBattle}></Route>
            <Route path="/leagueBattle" component={LeagueBattle}></Route>
            <Route path="/splatNetGear" component={SplatNetGear}></Route>
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    )
  }
}
