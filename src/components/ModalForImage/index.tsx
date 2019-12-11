import React from 'react'
import styled from 'styled-components'

interface ModalMask {
  isShowModal: Boolean
}

const ModalMask = styled.div<ModalMask>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  height: 100%;
  z-index: 100;
  display: ${props => {
    if (props.isShowModal) {
      console.log('block')
      return 'block'
    }
    console.log('none')
    return 'none'
  }};
`
const ModalBox = styled.div`
  position: relative;
  top: 100px;
  height: 200px;
  z-index: 51;
  width: 40%;
  background-color: #fff;
  padding: 3vh 3vw;
  margin: 0 auto;
  background-color: #ff5600;
  border-radius: 25px;
`

export default function StageModal(props) {
  console.log(props.isShowModal)
  return (
    <ModalMask isShowModal={props.isShowModal}>
      <ModalBox>
        <span className="hanger"></span>
      </ModalBox>
    </ModalMask>
  )
}
