import './App.css';
import Phone from './Components/Phone/Phone';
import ScreenshotOverlay from './Components/ScreenshotOverlay/ScreenshotOverlay';


/*

  minimum viable product

  icons:
    notification bar icons (take a screenshot and use that)
    messaging area icons
  different styles for sent and recieved messages
    like in the example, can use gimp to copy the colors
  ability to put images in the messages
    can have imported images and select one from the dropdown
    could also have a drag and drop box, that would be temporary though, maybe can put them into local storage somehow
  time display bars
  message input area
    text area with send icon like in screenshot
  correct styling to match screenshot
    there are a few things a little off, touch it up
  display messages from a json

  extras:

  set it up like a chat app with the ability to select a conversation
  the other user data and conversation data shows based on the selected conversation ID

  ability to create message chains dynamically
    add messages, remove, re-order
    saves in local storage
    can go back to conversations
    name, icon color, and initials of other person is editable

  time messages are editable

*/
function App() {

  return (
    <div className="App">
        <Phone>x`</Phone>
        <ScreenshotOverlay></ScreenshotOverlay>
    </div>
  );
}

export default App;
