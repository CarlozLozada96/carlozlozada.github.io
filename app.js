// Get current time
function updateTime() {
  const now = new Date();
  const timeElement = document.getElementById('time');
  timeElement.textContent = now.toLocaleTimeString('en-US', { timeStyle: 'short' });
}

// Update time every second
setInterval(updateTime, 1000);

// Add task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskItem = document.createElement('li');
    const taskTextSpan = document.createElement('span');
    const deleteButton = document.createElement('button');

    taskTextSpan.textContent = taskText;
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', function() {
      taskItem.remove();
      saveTasks();
    });

    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = '';

    saveTasks();
  }
}

// Save tasks to localStorage
function saveTasks() {
  const taskList = document.getElementById('taskList');
  const tasks = [];
  for (let i = 0; i < taskList.children.length; i++) {
    const taskText = taskList.children[i].getElementsByTagName('span')[0].textContent;
    tasks.push(taskText);
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
  const taskList = document.getElementById('taskList');
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  for (let i = 0; i < tasks.length; i++) {
    const taskItem = document.createElement('li');
    const taskTextSpan = document.createElement('span');
    const deleteButton = document.createElement('button');

    taskTextSpan.textContent = tasks[i];
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', function() {
      taskItem.remove();
      saveTasks();
    });

    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  }
}

// Load tasks and set background image on page load
document.addEventListener('DOMContentLoaded', function() {
  loadTasks();
  setBackground();
});

// Add task on pressing Enter key
document.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    addTask();
  }
});

// Background images
const backgroundImages = [
  'chibi frojd.jpg',
  'Dinn Djrin.jpg',
  'riolu.jpg',
  'Mysterios.jpg',
];

// Set background image
function setBackground() {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  const selectedImage = backgroundImages[randomIndex];
  document.body.style.backgroundImage = `url('${selectedImage}')`;
}

// Change background image every minute
setInterval(setBackground, 60000);
// Quotes
const quotes = [
  'The only way to do great work is to love what you do. - Steve Jobs',
  'Believe you can and you\'re halfway there. - Theodore Roosevelt',
  'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
  'Don\'t watch the clock; do what it does. Keep going. - Sam Levenson',
  'The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt',
  'The harder you work for something, the greater you\'ll feel when you achieve it. - Unknown'
];

// Set random quote
function setRandomQuote() {
  const quoteElement = document.getElementById('quoteText');
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];
  quoteElement.textContent = selectedQuote;
}

// Change quote every minute
setInterval(setRandomQuote, 60000);
// Call setRandomQuote on page load
setRandomQuote();