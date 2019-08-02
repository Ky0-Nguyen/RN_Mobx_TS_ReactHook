import React, {
  RefObject,
  useRef,
} from 'react'
import {
  ScrollView,
} from 'react-native'

import get from 'lodash/get'
import { width } from 'utils/globalConstants'
import { Main } from './Main'
import { Modules } from './Modules'

export interface AppProps {
}

export interface AppState {
  index: number
}

const SPIWER_WIDTH = 50
const SPIWER_WIDTH_AB = -50
let index = 0
let numberStartView = 0

/** -------------------------------------
* @method - onScrollTo
* @param -
* @author - Nguyen Tuan / 2019-08-01 15:42:36
* @description  Scroll to width 100% via width of device
* ---------------------------------------*/
function onScrollTo(
  widthIndex: number,
  refScrollView: any,
) {
  if (widthIndex > SPIWER_WIDTH) {
    index = index + 1
  } else if (widthIndex < SPIWER_WIDTH_AB) {
    index = index - 1
  } else {
    index = index
  }
  const configScroll = {
    y: 0,
    animated: false,
    x: width(100) * index,
  }
  refScrollView.scrollTo(configScroll)
}

/** -------------------------------------
* @method - onScrollBegin
* @param -
* @author - Nguyen Tuan / 2019-08-01 15:42:36
* @description ScrollBEgin of ScrollView
* ---------------------------------------*/
function onScrollBegin(
  e: {
    nativeEvent: {
      contentOffset: any;
    };
  }) {
  const x = get(e, 'nativeEvent.contentOffset.x')
  numberStartView = x
}

/** -------------------------------------
* @method - onScrollEnd
* @param -
* @author - Nguyen Tuan / 2019-08-01 15:42:36
* @description Scrollend of ScrollView
* ---------------------------------------*/
function onScrollEnd(
  e: {
    nativeEvent: {
      contentOffset: any;
    };
  },
  refScrollView: RefObject<ScrollView>,
) {
  const x = get(e, 'nativeEvent.contentOffset.x')
  onScrollTo(x - numberStartView, refScrollView)
}

/** -------------------------------------
* @method - onScrollEndDrag
* @param -
* @author - Nguyen Tuan / 2019-08-01 15:42:36
* @description Scrollend of ScrollView
* ---------------------------------------*/
function onScrollEndDrag(
  e: {
    nativeEvent: {
      contentOffset: any;
    };
  },
  refScrollView: RefObject<ScrollView>,
) {
  const x = get(e, 'nativeEvent.contentOffset.x')
  onScrollTo(x - numberStartView, refScrollView)
}

/** -------------------------------------
* @method - Home
* @param -
* @author - Nguyen Tuan / 2019-08-01 15:42:36
* @description Main View
* ---------------------------------------*/
function Home() {
  let refScrollView: any = useRef()
  return (
    <ScrollView
      horizontal
      onScrollBeginDrag={onScrollBegin}
      ref={(refs) => refScrollView = refs}
      showsHorizontalScrollIndicator={false}
      onMomentumScrollEnd={(e) => onScrollEnd(e, refScrollView)}
      onScrollEndDrag={(e) => onScrollEndDrag(e, refScrollView)}
    >
      <Main />
      <Modules />
    </ScrollView>
  )
}
export default Home
