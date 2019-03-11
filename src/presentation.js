// Import React
import React from 'react';
import ReactCompareImage from 'react-compare-image';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Link,
  Slide,
  Text,
  GoToAction,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {

  render() {
    return (
      <Deck
        transition={['slide']}
        transitionDuration={500}
        theme={theme}
        progress="bar"
      >
        <Slide>
          <Heading margin="0 0 50px" size={1} textColor="black">
            TTNの画像diffスライド
          </Heading>
          <Text margin="0 0 50px" size={1}>
            竹井 彰平
          </Text>
          <GoToAction slide={2}>Start</GoToAction>
        </Slide>
        <Slide>
          <Heading size={3}>
            これはテスト用のスライドです
          </Heading>
          <List>
            <ListItem>Test1</ListItem>
            <ListItem>Test2</ListItem>
            <ListItem>Test3</ListItem>
            <ListItem>Test4</ListItem>
            <ListItem>Test5</ListItem>
            <ListItem>Test6</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={5}>
            まだテストなんだよなぁ
          </Heading>
          <List>
            <ListItem>早く</ListItem>
            <ListItem>diff</ListItem>
            <ListItem>を</ListItem>
            <ListItem>見たい</ListItem>
            <ListItem>!!!</ListItem>
          </List>
        </Slide>
        <Slide>
          <GoToAction
            render={goToSlide => (
              <div style={{
                maxHeight: 'auto',
                maxWidth: 'auto',
                margin: 'auto',
              }}>
                <ReactCompareImage
                  leftImage="./img/1.jpg"
                  rightImage="./img/2.jpg"
                  sliderLineColor="red"
                />
              </div>
            )}
          />
        </Slide>
        <Slide>
          <GoToAction
            render={goToSlide => (
              <div style={{
                maxHeight: 'auto',
                maxWidth: 'auto',
                margin: 'auto',
              }}>
                <ReactCompareImage
                  leftImage="./img/3.jpg"
                  rightImage="./img/4.jpg"
                  sliderLineColor="red"
                />
              </div>
            )}
          />
        </Slide>
        <Slide>
          <GoToAction
            render={goToSlide => (
              <div style={{
                maxHeight: 'auto',
                maxWidth: 'auto',
                margin: 'auto',
              }}>
                <ReactCompareImage
                  leftImage="./img/5.jpg"
                  rightImage="./img/6.jpg"
                  sliderLineColor="red"
                />
              </div>
            )}
          />
        </Slide>
        <Slide>
          <Heading size={5}>
            おわり
          </Heading>
          <GoToAction slide={1}>最初に戻る</GoToAction>
        </Slide>
      </Deck>
    );
  }
}
