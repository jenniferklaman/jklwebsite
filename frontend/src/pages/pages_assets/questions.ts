export type Question = {
    question: string;
    options: string[];
    answer: string;
};

export type CategoryQuestions = {
    easy: Question[];
    medium: Question[];
    hard: Question[];
};

export const questionsData: Record<string, CategoryQuestions> = {
    GeneralKnowledge: {
        easy: [
            { question: "What is the largest country in the world by land area?", options: ["Russia", "Canada", "China"], answer: "Russia" },
            { question: "Which city hosted the 2020 Summer Olympics?", options: ["Tokyo", "London", "Beijing"], answer: "Tokyo" },
            { question: "Which animal is known for its ability to regenerate limbs?", options: ["Axolotl", "Starfish", "Frog"], answer: "Axolotl" },
            { question: "Who invented the first successful airplane?", options: ["Wright Brothers", "Thomas Edison", "Nikola Tesla"], answer: "Wright Brothers" },
            { question: "What is the official language of Brazil?", options: ["Portuguese", "Spanish", "English"], answer: "Portuguese" },
        ],
        medium: [
            { question: "What year did the Titanic sink?", options: ["1912", "1899", "1925"], answer: "1912" },
            { question: "Which country was formerly known as Persia?", options: ["Iran", "Iraq", "Afghanistan"], answer: "Iran" },
            { question: "Which of the following is the largest desert on Earth?", options: ["Sahara", "Arabian", "Gobi"], answer: "Sahara" },
            { question: "What was the first artificial Earth satellite?", options: ["Sputnik 1", "Explorer 1", "Vanguard 1"], answer: "Sputnik 1" },
            { question: "Who is known for the theory of evolution?", options: ["Charles Darwin", "Isaac Newton", "Galileo Galilei"], answer: "Charles Darwin" },
        ],
        hard: [
            { question: "Who invented the telephone?", options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla"], answer: "Alexander Graham Bell" },
            { question: "What is the deepest ocean in the world?", options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean"], answer: "Pacific Ocean" },
            { question: "What year did the first human walk on the Moon?", options: ["1969", "1965", "1972"], answer: "1969" },
            { question: "Who was the first woman to win a Nobel Prize?", options: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace"], answer: "Marie Curie" },
            { question: "What is the largest living species of tree?", options: ["Sequoia", "Redwood", "Douglas Fir"], answer: "Sequoia" },
        ],
    },

    History: {
        easy: [
            { question: "Who was the first president of the United States?", options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"], answer: "George Washington" },
            { question: "Who discovered America?", options: ["Christopher Columbus", "Leif Erikson", "Marco Polo"], answer: "Christopher Columbus" },
            { question: "Which empire was ruled by Julius Caesar?", options: ["Roman Empire", "Greek Empire", "Ottoman Empire"], answer: "Roman Empire" },
            { question: "Who was the first female prime minister of the UK?", options: ["Margaret Thatcher", "Indira Gandhi", "Golda Meir"], answer: "Margaret Thatcher" },
            { question: "In what year was the Berlin Wall built?", options: ["1961", "1950", "1975"], answer: "1961" },
        ],
        medium: [
            { question: "In which year did the French Revolution begin?", options: ["1789", "1799", "1801"], answer: "1789" },
            { question: "Who was the first emperor of China?", options: ["Qin Shi Huang", "Kublai Khan", "Emperor Taizu"], answer: "Qin Shi Huang" },
            { question: "What was the last major battle of World War I?", options: ["Battle of the Argonne Forest", "Battle of Verdun", "Battle of the Somme"], answer: "Battle of the Argonne Forest" },
            { question: "Who wrote the Communist Manifesto?", options: ["Karl Marx", "Friedrich Engels", "Vladimir Lenin"], answer: "Karl Marx" },
            { question: "In which year did the Cold War officially end?", options: ["1991", "1989", "1995"], answer: "1991" },
        ],
        hard: [
            { question: "What was the last major battle of the American Civil War?", options: ["Battle of Appomattox", "Battle of Gettysburg", "Battle of Antietam"], answer: "Battle of Appomattox" },
            { question: "In what year was the Magna Carta signed?", options: ["1215", "1315", "1415"], answer: "1215" },
            { question: "What was the name of the first artificial Earth satellite?", options: ["Sputnik 1", "Vanguard 1", "Explorer 1"], answer: "Sputnik 1" },
            { question: "Who was the last emperor of China?", options: ["Pu Yi", "Sun Yat-sen", "Emperor Taizu"], answer: "Pu Yi" },
            { question: "In what year did the Roman Empire officially fall?", options: ["476 AD", "410 AD", "525 AD"], answer: "476 AD" },
        ],
    },

    Science: {
        easy: [
            { question: "What planet is known as the Red Planet?", options: ["Mars", "Earth", "Jupiter"], answer: "Mars" },
            { question: "What gas do plants absorb from the air?", options: ["Carbon Dioxide", "Oxygen", "Nitrogen"], answer: "Carbon Dioxide" },
            { question: "What is the chemical formula for water?", options: ["H2O", "CO2", "O2"], answer: "H2O" },
            { question: "How many bones are in the adult human body?", options: ["206", "220", "300"], answer: "206" },
            { question: "What is the largest organ in the human body?", options: ["Skin", "Liver", "Heart"], answer: "Skin" },
        ],
        medium: [
            { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe"], answer: "Au" },
            { question: "What is the main gas found in Earth's atmosphere?", options: ["Nitrogen", "Oxygen", "Carbon Dioxide"], answer: "Nitrogen" },
            { question: "Which scientist developed the theory of general relativity?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei"], answer: "Albert Einstein" },
            { question: "What element is known for its ability to absorb neutrons?", options: ["Boron", "Uranium", "Carbon"], answer: "Boron" },
            { question: "What is the study of the universe called?", options: ["Astronomy", "Geology", "Biology"], answer: "Astronomy" },
        ],
        hard: [
            { question: "What is the formula for photosynthesis?", options: ["6CO2 + 6H2O → C6H12O6 + 6O2", "C6H12O6 + O2 → CO2 + H2O", "CO2 + H2O → C6H12O6 + O2"], answer: "6CO2 + 6H2O → C6H12O6 + 6O2" },
            { question: "What is the heaviest element on the periodic table?", options: ["Oganesson", "Uranium", "Plutonium"], answer: "Oganesson" },
            { question: "Which scientist developed the theory of quantum mechanics?", options: ["Max Planck", "Albert Einstein", "Niels Bohr"], answer: "Max Planck" },
            { question: "How many protons are there in an atom of carbon?", options: ["6", "12", "8"], answer: "6" },
            { question: "What is the most abundant gas in the Earth's atmosphere?", options: ["Nitrogen", "Oxygen", "Argon"], answer: "Nitrogen" },
        ],
    },

    Math: {
        easy: [
            { question: "What is 15 * 3?", options: ["45", "30", "60"], answer: "45" },
            { question: "What is 20 + 7?", options: ["27", "15", "12"], answer: "27" },
            { question: "What is 10 - 3?", options: ["7", "8", "6"], answer: "7" },
            { question: "What is 100 / 5?", options: ["20", "25", "30"], answer: "20" },
            { question: "What is 5 * 5?", options: ["25", "20", "15"], answer: "25" },
        ],
        medium: [
            { question: "What is the square root of 144?", options: ["12", "14", "16"], answer: "12" },
            { question: "What is 45 / 5?", options: ["9", "10", "7"], answer: "9" },
            { question: "What is the value of pi to 2 decimal places?", options: ["3.14", "3.16", "3.12"], answer: "3.14" },
            { question: "What is 12 x 6?", options: ["72", "60", "84"], answer: "72" },
            { question: "What is 7 ^ 2?", options: ["49", "56", "64"], answer: "49" },
        ],
        hard: [
            { question: "What is the derivative of 3x^2?", options: ["6x", "3x", "2x"], answer: "6x" },
            { question: "What is 27 ^ 1/3?", options: ["3", "6", "9"], answer: "3" },
            { question: "What is the value of sin(45 degrees)?", options: ["0.7071", "1", "0.5"], answer: "0.7071" },
            { question: "What is 14 factorial?", options: ["87,178,291,200", "100,000,000", "9,002,200,000"], answer: "87,178,291,200" },
            { question: "What is the integral of 2x?", options: ["x^2", "2x^2", "x^3"], answer: "x^2" },
        ],
    },

    Literature: {
        easy: [
            { question: "Who wrote 'Romeo and Juliet'?", options: ["William Shakespeare", "George Orwell", "Charles Dickens"], answer: "William Shakespeare" },
            { question: "Who wrote 'Harry Potter'?", options: ["J.K. Rowling", "J.R.R. Tolkien", "C.S. Lewis"], answer: "J.K. Rowling" },
            { question: "Who wrote 'Pride and Prejudice'?", options: ["Jane Austen", "Mark Twain", "Virginia Woolf"], answer: "Jane Austen" },
            { question: "Who wrote 'Moby Dick'?", options: ["Herman Melville", "F. Scott Fitzgerald", "Charles Dickens"], answer: "Herman Melville" },
            { question: "Who wrote 'The Great Gatsby'?", options: ["F. Scott Fitzgerald", "Ernest Hemingway", "J.D. Salinger"], answer: "F. Scott Fitzgerald" },
        ],
        medium: [
            { question: "Who wrote '1984'?", options: ["George Orwell", "Aldous Huxley", "J.K. Rowling"], answer: "George Orwell" },
            { question: "In which novel does the character 'Atticus Finch' appear?", options: ["To Kill a Mockingbird", "1984", "Pride and Prejudice"], answer: "To Kill a Mockingbird" },
            { question: "Who wrote 'The Catcher in the Rye'?", options: ["J.D. Salinger", "Herman Melville", "Mark Twain"], answer: "J.D. Salinger" },
            { question: "Who wrote 'The Odyssey'?", options: ["Homer", "Virgil", "Sophocles"], answer: "Homer" },
            { question: "Who wrote 'Brave New World'?", options: ["Aldous Huxley", "Ray Bradbury", "Orson Welles"], answer: "Aldous Huxley" },
        ],
        hard: [
            { question: "Who wrote 'War and Peace'?", options: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov"], answer: "Leo Tolstoy" },
            { question: "In which book does the character 'Gollum' appear?", options: ["The Hobbit", "The Lord of the Rings", "The Silmarillion"], answer: "The Lord of the Rings" },
            { question: "Who wrote 'The Brothers Karamazov'?", options: ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov"], answer: "Fyodor Dostoevsky" },
            { question: "Who wrote 'Crime and Punishment'?", options: ["Fyodor Dostoevsky", "Lev Tolstoy", "Anton Chekhov"], answer: "Fyodor Dostoevsky" },
            { question: "In which novel does the character 'Ishmael' appear?", options: ["Moby-Dick", "Murder in the Cathedral", "Heart of Darkness"], answer: "Moby-Dick" },
        ],
    },

    Geography: {
        easy: [
            { question: "What is the capital of Japan?", options: ["Tokyo", "Seoul", "Beijing"], answer: "Tokyo" },
            { question: "Which continent is Egypt located in?", options: ["Africa", "Asia", "Europe"], answer: "Africa" },
            { question: "Which country is the Great Wall of China located in?", options: ["China", "Japan", "India"], answer: "China" },
            { question: "What is the capital of France?", options: ["Paris", "Berlin", "Rome"], answer: "Paris" },
            { question: "What is the capital of Canada?", options: ["Ottawa", "Toronto", "Montreal"], answer: "Ottawa" },
        ],
        medium: [
            { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze"], answer: "Nile" },
            { question: "Which country has the most time zones?", options: ["Russia", "USA", "Canada"], answer: "Russia" },
            { question: "Which country has the most borders?", options: ["Russia", "China", "Brazil"], answer: "Russia" },
            { question: "What is the largest country in Africa?", options: ["Algeria", "Nigeria", "South Africa"], answer: "Algeria" },
            { question: "What is the capital of Australia?", options: ["Canberra", "Sydney", "Melbourne"], answer: "Canberra" },
        ],
        hard: [
            { question: "Which is the smallest country in the world?", options: ["Vatican City", "Monaco", "San Marino"], answer: "Vatican City" },
            { question: "Which is the largest island in the world?", options: ["Greenland", "New Guinea", "Borneo"], answer: "Greenland" },
            { question: "What country has the most official languages?", options: ["Switzerland", "South Africa", "Belgium"], answer: "South Africa" },
            { question: "Which country has the longest coastline?", options: ["Canada", "Australia", "Russia"], answer: "Canada" },
            { question: "Which country has the most islands?", options: ["Sweden", "Canada", "Norway"], answer: "Sweden" },
        ],
    },

    RandomXD: {
        easy: [
            { question: "How old is Tucci?", options: ["3ish", "almost 5", "80"], answer: "3ish" },
            { question: "Who is the oldest Camden girl?", options: ["Ale", "Jen", "Alyssa"], answer: "Alssya" },
            { question: "How many cool cats are in Camden?", options: ["3ish", "1?", "5 duh!"], answer: "5 duh!" },
        ],
        medium: [
            { question: "What is Tucci's favorite toy?", options: ["Rainbow thing", "Cork", "Bird"], answer: "Rainbow thing" },
            { question: "Which Camden girl is a Fortnight god?", options: ["Ale", "Jen", "Eden"], answer: "Eden" },
            { question: "What is our favorite (only) amenity?", options: ["Gym", "Pool", "Fountain"], answer: "Fountain" },
        ],
        hard: [
            { question: "How many toys are on the toy table?", options: ["16", "28", "23"], answer: "Option C" },
            { question: "Who has a purple phone?", options: ["Eden", "Alyssa", "Ale"], answer: "Eden" },
            { question: "Who does not have a desk in her room?", options: ["Jen", "Ale", "Alyssa"], answer: "Ale" },
        ],
    },
};
