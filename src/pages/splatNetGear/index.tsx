import React from 'react'
import axios from '@/axios'
import Header from './components/Header'
import Card from './components/Card'
import './index.scss'

interface IState {
  merchandises: Array<any>
}

export default class SplatNetGear extends React.Component<any, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      merchandises: null
    }
  }
  componentDidMount() {
    axios
      .get('/gear')
      .then(res => {
        let data = res.data
        if (data.code === 0) {
          let merchandises = data.data.merchandises
          this.setState({
            merchandises
          })
        } else {
          console.log('fail to get merchandises')
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    let { merchandises } = this.state
    return (
      <section className="page-box">
        <Header />
        <div className="gear-flex">
          {merchandises &&
            merchandises.map(item => (
              <Card merchandise={item} key={item.end_time} />
            ))}
        </div>
      </section>
    )
  }
}
