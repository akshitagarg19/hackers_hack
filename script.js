const facts = [
    "The first computer hacker was a 15-year-old boy named Kevin Mitnick.",
    "Hacking dates back to the 1960s when computer enthusiasts began exploring the limits of technology.",
    "The term 'hacker' originally referred to someone who made furniture with an axe.",
    "The first computer virus was created in 1983 and was called 'Elk Cloner'.",
    "The famous hacker group Anonymous is known for its online activism and protests.",
    "In 1999, a hacker named Gary McKinnon broke into NASA's computers and claimed to find evidence of UFOs.",
    "The world's first computer programmer was Ada Lovelace, who worked on Charles Babbage's early mechanical general-purpose computer."
];

const backgrounds = [
    "url('https://up.yimg.com/ib/th?id=OIP.smzBbDZkYqUVkQQ6yFWmHQAAAA&pid=Api&rs=1&c=1&qlt=95&w=148&h=98')",
    "url('https://up.yimg.com/ib/th?id=OIP.PJd7lQKPXO2ankhNHp9m6AHaE0&pid=Api&rs=1&c=1&qlt=95&w=165&h=107')",
    "url('https://up.yimg.com/ib/th?id=OIP.z1Fl9P5QfqFRfLuPS5GjQwHaFk&pid=Api&rs=1&c=1&qlt=95&w=141&h=106')",
    "url('https://up.yimg.com/ib/th?id=OIP.2reKjfsIcxKYt_LermAT9QHaE8&pid=Api&rs=1&c=1&qlt=95&w=159&h=106')",
    "url('https://up.yimg.com/ib/th?id=OIP.ELKjqpllsB5o6clEb1F7uAHaEK&pid=Api&rs=1&c=1&qlt=95&w=176&h=98')",
    "url('https://up.yimg.com/ib/th?id=OIP.LeZBpB7LQTRjZapwD9SpIAHaE8&pid=Api&rs=1&c=1&qlt=95&w=156&h=104')",
    "url('https://up.yimg.com/ib/th?id=OIP.QRNgp2W-uWPBNrxVn9piVgHaE8&pid=Api&rs=1&c=1&qlt=95&w=148&h=98')"
];

const factElement = document.getElementById('fact');
const button = document.getElementById('generate-button');

button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factElement.textContent = facts[randomIndex];
    document.body.style.backgroundImage = backgrounds[randomIndex];
});
