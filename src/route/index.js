import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from '@/globalcss/theme'
import Header from '@com/Header'
import Footer from '@com/Footer'
import SalmonRun from '@/pages/salmonRun'
import TurfWar from '@/pages/turfWar'
import RankBattle from '@/pages/rankBattle'
import LeagueBattle from '@/pages/leagueBattle'
import SplatNetGear from '@/pages/splatNetGear'

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
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
