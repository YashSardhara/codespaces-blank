import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Interface from './component/Interface';
import "./App.css";

const steps = [
  {
      id: '0',
      message: 'Hey!',

      // This calls the next id
      // i.e. id 1 in this case
      trigger: '1',
  }, {
      id: '1',

      // This message appears in
      // the bot chat bubble
      message: 'Please write your username',
      trigger: '2'
  }, {
      id: '2',
      // Here we want the user
      // to enter input
      user: true,
      trigger : '3'
  }, {
      id: '3',
      message: " hi {previousValue}, how can I help you?",
      end : true,
  }, 
];
 
// Creating our own theme
const theme = {
    background: 'white',
    headerBgColor: 'Blue',
    headerFontSize: '20px',
    botBubbleColor: 'blue',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: 'grey',
    userFontColor: 'white',
};
 
// Set some properties of the bot
const config = {
    botAvatar: "avt.png",
    floating: true,
};
 
function App() {
    return (
        <div className="App">
          <p1 className="para"> Add Q&A </p1>
          <Interface />
            <ThemeProvider theme={theme}>
                <ChatBot
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="Let's Talk"
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
        </div>
    );
}
 
export default App;