import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  standalone: true, 
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const spanElement = document.querySelector('#dynamic-text') as HTMLSpanElement;

    if (spanElement) {
      const messages = [
        "Brace yourselves as we prepare for a quantum leap into the Streamverse. ",
        "This isn’t just a journey; it’s a voyage through dimensions unknown.",
        "Don't stop! Keep going.",
        "You will get there."
      ];

      const colors = [
        "#FF5733", // Orange
        "#33FF57", // Green
        "#5733FF", // Blue
        "#FFD700"  // Gold
      ];

      let messageIndex = 0;
      let charIndex = 0;

      const typeWriter = () => {
        if (messageIndex < messages.length) {
          const currentMessage = messages[messageIndex];
          spanElement.style.color = colors[messageIndex % colors.length]; // Cycle through colors
          if (charIndex < currentMessage.length) {
            spanElement.textContent += currentMessage[charIndex];
            charIndex++;
            setTimeout(typeWriter, 100); // Type each character with 100ms delay
          } else {
            // Pause before erasing and moving to the next message
            setTimeout(() => {
              eraseText();
            }, 1500); // 1.5s pause after message is fully typed
          }
        }
      };

      const eraseText = () => {
        const currentMessage = messages[messageIndex];
        if (charIndex > 0) {
          spanElement.textContent = currentMessage.substring(0, charIndex - 1);
          charIndex--;
          setTimeout(eraseText, 50); // Erase each character with 50ms delay
        } else {
          // Move to the next message
          messageIndex = (messageIndex + 1) % messages.length; // Loop through messages
          setTimeout(typeWriter, 500); // Start typing the next message after 0.5s
        }
      };

      // Start the typewriter effect
      typeWriter();
    }
  }
}