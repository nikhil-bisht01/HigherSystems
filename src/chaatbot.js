import React, { useState, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

function App() {
    const [currentsteps, setCurrentStep] = useState(0);

    // Define your steps
    const steps = [
        {
            id: '0',
            message: 'Hey !',
            trigger: ({ value }) => {
              // Your condition to trigger the next step
              if (value && value.length > 1) {
                  return '0';
              } else {
                  return '2';
              }
          },
      },
        
        {
            id: '2',
            message: 'Please write your username',
            trigger:  ({ value }) => {
              // Your condition to trigger the next step
              if (value && value.length > 0) {
                  return 'greeting';
              } else {
                  return 'username';
              }
          },
      },
        {
            id: 'username',
            user: true,
            trigger: ({ value }) => {
                // Your condition to trigger the next step
                if (value && value.length > 0) {
                    return 'greeting';
                } else {
                    return 'username';
                }
            },
        },
        {
            id: 'greeting',
            message: ({ previousValue }) => `Hi ${previousValue}, how can I help you?`,
            trigger: 'options',
        },
        {
            id: 'options',
            options: [
                { value: 1, label: 'View Courses' },
                { value: 2, label: 'Read Articles' },
            ],
            end: true
        }
    ];

    useEffect(() => {
        const messageDelay = 1000; // Delay between messages in milliseconds
        const timeoutIds = [];
    
        const displayNextStep = (stepIndex) => {
            setCurrentStep(stepIndex); // Move to the next step
        };
    
        steps.forEach((step, index) => {
            const timeoutId = setTimeout(() => {
                if (step.trigger) {
                    // If trigger is a function, execute it and use the result as the next step
                    const nextStep = typeof step.trigger === 'function' ? step.trigger({ value: '' }) : step.trigger;
                    displayNextStep(nextStep);
                }
            }, index * messageDelay);
    
            timeoutIds.push(timeoutId);
        });
    
        // Clear all timeouts when component unmounts or when steps change
        return () => {
            timeoutIds.forEach(timeoutId => clearTimeout(timeoutId));
        };
    }, []); // Run only once when component mounts

    // Creating our own theme
    const theme = {
        background: '#C9FF8F',
        headerBgColor: '#197B22',
        headerFontSize: '20px',
        botBubbleColor: '#0F3789',
        headerFontColor: 'white',
        botFontColor: 'white',
        userBubbleColor: '#FF5733',
        userFontColor: 'white',
    };

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <ChatBot
                    headerTitle="GeekBot"
                    steps={steps}
                    floating={true}
                />
            </ThemeProvider>
        </div>
    );
}

export default App;
