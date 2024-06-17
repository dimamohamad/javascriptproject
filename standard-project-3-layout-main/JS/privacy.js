
document.addEventListener('DOMContentLoaded', () => {
    const collapsedData = document.getElementById('collapsedData');

    // Define the async function to fetch and populate data
    async function getData() {
      const response = await fetch('JSON/privcy.json'); // Path to your JSON file
      if (response.ok) {
        const data = await response.json();
        
        // Loop through each item in the data
        data.forEach(item => {
          // Create the collapsible button
          const button = document.createElement('button');
          button.type = 'button';
          button.classList.add('collapsible');
          button.textContent = item.header;

          // Create the collapsible content container
          const content = document.createElement('div');
          content.classList.add('content');

          // Populate the content container with paragraphs
          if (Array.isArray(item.content)) {
            item.content.forEach(paragraph => {
              const p = document.createElement('p');
              p.textContent = paragraph;
              content.appendChild(p);
            });
          } else {
            const p = document.createElement('p');
            p.textContent = item.content;
            content.appendChild(p);
          }

          // Append the button and content to the accordion
          collapsedData.appendChild(button);
          collapsedData.appendChild(content);

          // Add click event listener to the button
          button.addEventListener('click', function() {
            this.classList.toggle('active');
            if (content.style.display === 'block') {
              content.style.display = 'none';
            } else {
              content.style.display = 'block';
            }
          });
        });
      } else {
        console.error('Network response was not ok');
      }
    }

    // Call the loadData function
    getData();
  });