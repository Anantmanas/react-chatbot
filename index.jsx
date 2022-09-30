import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import Data from "./Data";
import './style.css';
import './bot_img.png';



// const BotRedirect = ({ url, message }) => {
//   return (
//     <div>
//       <a href={url} target="_blank">
//         {message}
//       </a>
//     </div>
//   );
// };



const CHATBOT_THEME = {
  background: " #e0efff",
  fontFamily: "Segoe UI",
  headerBgColor: "#000000",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#4591a5",
  botFontColor: "#fff",
  userBubbleColor: "#3d5254",
  userFontColor: "#fff",
};

const config =
{
  floating: true,
  
};

const ChatBotHelper = () => {
 

  const steps = [

    {
      id: "zero",
      message: "Welcome to RMT SmartBot Assistant",
      trigger: "one",
    },
    {
      id: "one",
      message: "Hi, I am Talkie, May I Know Your Name ?",
      trigger: "two",
    },
    {
      id: "two",
      user: true,
      trigger: "three",
    },
    {
      id: "three",
      message: "Hi {previousValue}, nice to meet you. How May I Assist You Today ?", 
      trigger: "0",
    },
    {
      id: "0",
      options: [
        { value: 1, label: "Need a service ? 📌", trigger: "a" },
        { value: 2, label: "Raise a isssue ! 📩", trigger: "b" },
        { value: 3, label: "Get Status of a ticket 📃", trigger: "c" },
        { value: 4, label: "Ask a question ? 🖐", trigger: "d" },
        { value: 5, label: "Share feedback & Suggetions 😄", trigger: "e" },
      ],

    },



    {
      id: "a",
      options: [
        { value: 1, label: "IT Department", trigger: "1.1" },
        { value: 2, label: "HR Department", trigger: "2.1" },
        { value: 3, label: "Administration", trigger: "3.1" },
        { value: 4, label: "Go back to previous menu", trigger: "0" },

      ],

    },

    {
      id: "b",
      options: [
        { value: 1, label: "IT Department", trigger: "1.2" },
        { value: 2, label: "HR Department", trigger: "2.2" },
        { value: 3, label: "Administration", trigger: "3.2" },
        { value: 4, label: "Go back to previous menu", trigger: "0" },

      ],

    },

    {
      id: "c",
      options: [
        { value: 1, label: "IT Department", trigger: "1.3" },
        { value: 2, label: "HR Department", trigger: "2.3" },
        { value: 3, label: "Administration", trigger: "3.3" },
        { value: 4, label: "Go back to previous menu", trigger: "0" },

      ],

    },

    {
      id: "d",
      options: [
        { value: 1, label: "IT Department", trigger: "1.4" },
        { value: 2, label: "HR Department", trigger: "2.4" },
        { value: 3, label: "Administration", trigger: "3.4" },
        { value: 4, label: "Go back to previous menu", trigger: "0" },

      ],

    },

    {
      id: "e",
      options: [
        { value: 1, label: "IT Department", trigger: "1.5" },
        { value: 2, label: "HR Department", trigger: "2.5" },
        { value: 3, label: "Administration", trigger: "3.5" },
        { value: 4, label: "Go back to previous menu", trigger: "0" },

      ],


    },

    /* ||---- IT-OPTIONS ----|| */
    {
      id: "1.1",

      message: ({ previousValue, steps }) => {
        console.log(steps)
        var str = "";
        if (steps.a.value === 1) {
          //Need a service
          str += "Please let me know what service you want from ";
          //Get department
          str += steps.a.message + " ?";
          return str;
        }
      },
      trigger: "input-1.1"
    },

    {
      id: "1.2",

      message: ({ previousValue, steps }) => {
        console.log(steps)
        var str = "";
        if (steps.b.value === 1) {
          str += "Kindly mention your issue, ";
          str += steps.b.message;
          str += " will get back to you !";
          return str;
        }

      },
      trigger: "input-1.2",
    },

    {
      id: "1.3",
      
      component :<Data/>,
      trigger: "help",
    },

    {
      id: "1.4",
      message: ({ previousValue, steps }) => {
        var str = "";
        if (steps.d.value === 1) {
          str += "Ask anything you want, ";
          str += steps.d.message;
          str += " will surely get back to you !";
          return str;
        }

      },
      trigger: "input-1.4",

    },


    {
      id: "1.5",
      message: ({ previousValue, steps }) => {
        var str = "";
        if (steps.e.value === 1) {
          str += "Please share your Feedback";
          return str;
        }

      },
      trigger: "input-1.5",

    },

    
    /* ||---- HR-OPTIONS ----|| */
    {
      id: "2.1",

      message: ({ previousValue, steps }) => {
        console.log(steps)
        var str = "";
        if (steps.a.value === 2) {
          //Need a service
          str += "Please let me know what service you want from ";
          //Get department
          str += steps.a.message + " ?";
          return str;
        }
      },
      trigger: "input-1.1"
    },

    {
      id: "2.2",

      message: ({ previousValue, steps }) => {
        console.log(steps)
        var str = "";
        if (steps.b.value === 2) {
          str += "Kindly mention your issue, ";
          str += steps.b.message;
          str += " will get back to you !";
          return str;
        }

      },
      trigger: "input-1.2",
    },

    {
      id: "2.3",
      component :<Data/>,
      trigger: "help",
    },

    {
      id: "2.4",
      message: ({ previousValue, steps }) => {
        var str = "";
        if (steps.d.value === 2) {
          str += "Ask anything you want, ";
          str += steps.d.message;
          str += " will surely get back to you !";
          return str;
        }

      },
      trigger: "input-1.4",

    },


    {
      id: "2.5",
      message: ({ previousValue, steps }) => {
        var str = "";
        if (steps.e.value === 2) {
          str += "Please share your Feedback";
          return str;
        }

      },
      trigger: "input-1.5",

    },


    /* ||---- ADMIN-OPTIONS ----|| */
    {
      id: "3.1",

      message: ({ previousValue, steps }) => {
        console.log(steps)
        var str = "";
        if (steps.a.value === 3) {
          //Need a service
          str += "Please let me know what service you want from ";
          //Get department
          str += steps.a.message + " ?";
          return str;
        }
      },
      trigger: "input-1.1"
    },

    {
      id: "3.2",

      message: ({ previousValue, steps }) => {
        console.log(steps)
        var str = "";
        if (steps.b.value === 3) {
          str += "Kindly mention your issue, ";
          str += steps.b.message;
          str += " will get back to you !";
          return str;
        }

      },
      trigger: "input-1.2",
    },

    {
      id: "3.3",
      component :<Data/>,
      trigger: "help",
    },

    {
      id: "3.4",
      message: ({ previousValue, steps }) => {
        var str = "";
        if (steps.d.value === 3) {
          str += "Ask anything you want, ";
          str += steps.d.message;
          str += " will surely get back to you !";
          return str;
        }
 
      },
      trigger: "input-1.4",

    },


    {
      id: "3.5",
      message: ({ previousValue, steps }) => {
        var str = "";
        if (steps.e.value === 3) {
          str += "Please share your Feedback";
          return str;
        }

      },
      trigger: "input-1.5",

    },

    // {
    //   id: "input",
    //   user: true,
    //   trigger: "input-2",
    // },

    // {
    //   id: "input-2",
    //   message: "'{previousValue}',  sending... your response to the server. Thankyou.",
    //   trigger: "input-3",
    // },

    // {
    //   id: "input-3",
    //   component: <News />,
    //   trigger: "help",
    // },

    // {
    //   id: "response", 
    //   component: <Post />,
    //   asMessage: true,
    // },


    /* ||---- Input ----|| */

    {
      id: "input-1.1",
      user: true,
      trigger: "input-response",
    },

    {
      id: "input-1.2",
      user: true,
      trigger: "input-response",
    },

    {
      id: "input-1.3",
      user: true,
      trigger: "input-response",
    },

    {
      id: "input-1.4",
      user: true,
      trigger: "input-response",
    },

    {
      id: "input-1.5",
      user: true,
      trigger: "input-response",
    },

    {
      id: "input-response",
      message: "'{previousValue}', okay. Sending... your response to the server. Thankyou.",
      trigger: "help",
    },

    {
      id: "help",
      options: [
        { value: 1, label: "Need more help !", trigger: "0" },
        { value: 2, label: "Exit", trigger: "end-msg" },
      ],

    },


    {
      id: "end-msg",
      message: "Thanks for reaching us. For any further assistance just mail your query to 'help@radicalminds.in'. Have a nice day !",
      end: true,
    }


  ];

  return (
    <>
      <ThemeProvider theme={CHATBOT_THEME}>
        <ChatBot  steps={steps} floating={true} recognitionEnable={true} {...config} />
      </ThemeProvider>
    </>
  );
};

export default ChatBotHelper;
