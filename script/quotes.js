document.addEventListener('DOMContentLoaded', function() {
    // Check if the modal has already been shown during this session
    if (!sessionStorage.getItem('modalShown')) {
            const quotes = 
            [
                    { quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.", author: "Steve Jobs, Co-founder of Apple Inc." },
                    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs, Co-founder of Apple Inc." },
                    { quote: "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose.", author: "Steve Jobs, Co-founder of Apple Inc." },
                    { quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs, Co-founder of Apple Inc." },
                    { quote: "Don’t let the noise of others’ opinions drown out your own inner voice.", author: "Steve Jobs, Co-founder of Apple Inc." },
                    { quote: "Stay hungry, stay foolish.", author: "Steve Jobs, Co-founder of Apple Inc." },
                    { quote: "I’m as proud of what we don’t do as I am of what we do.", author: "Steve Jobs, Co-founder of Apple Inc." },
                    { quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs, Co-founder of Apple Inc." },
                    { quote: "The people who are crazy enough to think they can change the world are the ones who do.", author: "Steve Jobs, Co-founder of Apple Inc." },
                    { quote: "Sometimes life hits you in the head with a brick. Don’t lose faith.", author: "Steve Jobs, Co-founder of Apple Inc." },
                    { quote: "If you live each day as if it was your last, someday you’ll most certainly be right.", author: "Steve Jobs, Co-founder of Apple Inc." },
                    { quote: "Be a yardstick of quality. Some people aren’t used to an environment where excellence is expected.", author: "Steve Jobs, Co-founder of Apple Inc." },
                    { quote: "Have the courage to follow your heart and intuition. They somehow know what you truly want to become.", author: "Steve Jobs, Co-founder of Apple Inc." },
                    { quote: "It’s not about ideas. It’s about making ideas happen.", author: "Steve Jobs, Co-founder of Apple Inc." },
                
                    // Quotes from Bill Gates (Co-founder of Microsoft)
                    { quote: "Your most unhappy customers are your greatest source of learning.", author: "Bill Gates, Co-founder of Microsoft" },
                    { quote: "We always overestimate the change that will occur in the next two years and underestimate the change that will occur in the next ten. Don’t let yourself be lulled into inaction.", author: "Bill Gates, Co-founder of Microsoft" },
                    { quote: "If you are born poor it’s not your mistake, but if you die poor it’s your mistake.", author: "Bill Gates, Co-founder of Microsoft" },
                    { quote: "I’m not afraid of failure. I’m afraid of succeeding at things that don’t matter.", author: "Bill Gates, Co-founder of Microsoft" },
                    { quote: "To win big, you sometimes have to take big risks.", author: "Bill Gates, Co-founder of Microsoft" },
                    { quote: "We always have a choice. We can make the world a better place or not.", author: "Bill Gates, Co-founder of Microsoft" },
                    { quote: "If you think your teacher is tough, wait till you get a boss.", author: "Bill Gates, Co-founder of Microsoft" },
                    { quote: "Don’t compare yourself with anyone in this world. If you do so, you are insulting yourself.", author: "Bill Gates, Co-founder of Microsoft" },
                    { quote: "Life is not fair; get used to it.", author: "Bill Gates, Co-founder of Microsoft" },
                    { quote: "Most people overestimate what they can do in one year and underestimate what they can do in ten years.", author: "Bill Gates, Co-founder of Microsoft" },
                    { quote: "It’s fine to celebrate success, but it is more important to heed the lessons of failure.", author: "Bill Gates, Co-founder of Microsoft" },
                    { quote: "The best way to predict the future is to invent it.", author: "Bill Gates, Co-founder of Microsoft" },
                    { quote: "We are always in the process of creating ourselves, and we can change that process.", author: "Bill Gates, Co-founder of Microsoft" },
                
                    // Quotes from Shiv Nadar (Founder of HCL Technologies)
                    { quote: "The best way to predict the future is to create it.", author: "Shiv Nadar, Founder of HCL Technologies" },
                    { quote: "Success is not about winning, it is about the journey and the struggle.", author: "Shiv Nadar, Founder of HCL Technologies" },
                    { quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Shiv Nadar, Founder of HCL Technologies" },
                    { quote: "The only way to achieve greatness is to have the courage to follow your dreams.", author: "Shiv Nadar, Founder of HCL Technologies" },
                    { quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.", author: "Shiv Nadar, Founder of HCL Technologies" },
                    { quote: "Innovation is the key to progress. It is the willingness to experiment and learn that leads to success.", author: "Shiv Nadar, Founder of HCL Technologies" },
                    { quote: "The power to shape your future lies in your hands. Embrace change and pursue excellence.", author: "Shiv Nadar, Founder of HCL Technologies" },
                    { quote: "Every success story is a tale of constant adaption, revision, and change.", author: "Shiv Nadar, Founder of HCL Technologies" },
                    { quote: "The road to success is not a straight path; it is full of twists and turns. Embrace each challenge as a step towards your goals.", author: "Shiv Nadar, Founder of HCL Technologies" },
                    { quote: "Leadership is not about being in charge. It is about taking care of those in your charge.", author: "Shiv Nadar, Founder of HCL Technologies" },
                
                    // Quotes from Narayana Murthy (Co-founder of Infosys)
                    { quote: "The best way to predict the future is to create it.", author: "Narayana Murthy, Co-founder of Infosys" },
                    { quote: "Success is not a destination. It is a journey.", author: "Narayana Murthy, Co-founder of Infosys" },
                    { quote: "Leadership is about making others better as a result of your presence and making sure that impact lasts in your absence.", author: "Narayana Murthy, Co-founder of Infosys" },
                    { quote: "One must keep trying, learning, and improving oneself until they reach their goal.", author: "Narayana Murthy, Co-founder of Infosys" },
                    { quote: "In the long run, the most important thing is not what you do but how you do it.", author: "Narayana Murthy, Co-founder of Infosys" },
                    { quote: "To succeed in business, you need to be passionate, be a good learner, and be willing to take risks.", author: "Narayana Murthy, Co-founder of Infosys" },
                    { quote: "The biggest challenge is not the technology, but the human mind.", author: "Narayana Murthy, Co-founder of Infosys" },
                    { quote: "Success comes to those who are not afraid to fail.", author: "Narayana Murthy, Co-founder of Infosys" },
                    { quote: "It is not the strongest or the most intelligent who will survive, but those who can best manage change.", author: "Narayana Murthy, Co-founder of Infosys" },
                    { quote: "Ethics and values are more important than technology or finance.", author: "Narayana Murthy, Co-founder of Infosys" },
                
                    // Quotes from Virat Kohli
                    { quote: "Self-belief and hard work will always earn you success.", author: "Virat Kohli, Indian Cricketer" },
                    { quote: "I have always believed that if you put in the work, the results will come.", author: "Virat Kohli, Indian Cricketer" },
                    { quote: "A champion is someone who gets up when they can't.", author: "Virat Kohli, Indian Cricketer" },
                    { quote: "You can’t always control what goes on outside. But you can always control what goes on inside.", author: "Virat Kohli, Indian Cricketer" },
                    { quote: "If you have the passion and dedication, you will reach where you want to.", author: "Virat Kohli, Indian Cricketer" },
                    { quote: "Dreams do come true if you stay focused and work hard.", author: "Virat Kohli, Indian Cricketer" },
                    { quote: "The more you experience, the more you understand life. The more you understand life, the more you will find yourself living.", author: "Virat Kohli, Indian Cricketer" },
                    { quote: "To be successful, you have to be dedicated to something and have a passion for it.", author: "Virat Kohli, Indian Cricketer" },
                    { quote: "Life is a game of cricket; sometimes you have to play the ball on its merit.", author: "Virat Kohli, Indian Cricketer" },
                    { quote: "The only way you can get better is if you push yourself to the limit.", author: "Virat Kohli, Indian Cricketer" },
                    { quote: "Chase your dreams and never stop. Only you can make it happen.", author: "Virat Kohli, Indian Cricketer" },
                    { quote: "Hard work puts you where the good luck can find you.", author: "Virat Kohli, Indian Cricketer" },
                    { quote: "In life, there are no excuses. You have to work for everything.", author: "Virat Kohli, Indian Cricketer" },
                    { quote: "If There is a one percent chance, and sometimes that chance is good enough. But what matters is what you think about that one percent. Are you willing to give absolutely everything that you have to make that one into 10 and then grow that 10 into 30? Eventually, something magical might come out of it.", author: "Virat Kohli, Indian Cricketer" },
                    // Quotes from Rohit Sharma
                    { quote: "The more you practice, the more confident you become.", author: "Rohit Sharma, Indian Cricketer" },
                    { quote: "You have to keep working hard and stay focused on your goals.", author: "Rohit Sharma, Indian Cricketer" },
                    { quote: "Consistency is key to achieving your goals.", author: "Rohit Sharma, Indian Cricketer" },
                    { quote: "Believe in yourself, and the rest will follow.", author: "Rohit Sharma, Indian Cricketer" },
                    { quote: "Hard work and dedication are the cornerstones of success.", author: "Rohit Sharma, Indian Cricketer" },
                    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Rohit Sharma, Indian Cricketer" },
                    { quote: "You don’t have to be the best. You just have to be better than you were yesterday.", author: "Rohit Sharma, Indian Cricketer" },
                    { quote: "Every day is a new opportunity to work hard and improve.", author: "Rohit Sharma, Indian Cricketer" },
                    { quote: "Embrace challenges as they make you stronger.", author: "Rohit Sharma, Indian Cricketer" },
                    { quote: "Keep pushing forward, and you will reach your destination.", author: "Rohit Sharma, Indian Cricketer" },
                    { quote: "Success is a journey, not a destination. Enjoy the ride.", author: "Rohit Sharma, Indian Cricketer" },
                    { quote: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Rohit Sharma, Indian Cricketer" },
                    { quote: "Focus on the process, and the results will follow.", author: "Rohit Sharma, Indian Cricketer" },
                    { quote: "Your only limit is your mind. Think big and achieve big.", author: "Rohit Sharma, Indian Cricketer" },
                    { quote: "Chase your dreams with passion and perseverance.", author: "Rohit Sharma, Indian Cricketer" },

                    // Quotes from MS Dhoni
                    { quote: "The key to handling pressure is to keep yourself steady and keep the focus on the task at hand.", author: "MS Dhoni, Former Indian Cricketer" },
                    { quote: "It is important to be always prepared and to keep improving your skills.", author: "MS Dhoni, Former Indian Cricketer" },
                    { quote: "To be successful, you must be willing to face failures and keep going.", author: "MS Dhoni, Former Indian Cricketer" },
                    { quote: "The only thing that matters is your performance and your ability to deliver under pressure.", author: "MS Dhoni, Former Indian Cricketer" },
                    { quote: "Don’t let success go to your head and don’t let failure go to your heart.", author: "MS Dhoni, Former Indian Cricketer" },
                    { quote: "Stay calm and focused, and everything else will fall into place.", author: "MS Dhoni, Former Indian Cricketer" },
                    { quote: "Success is not the key to happiness. Happiness is the key to success.", author: "MS Dhoni, Former Indian Cricketer" },
                    { quote: "You should always look for ways to improve yourself and your game.", author: "MS Dhoni, Former Indian Cricketer" },
                    { quote: "Hard work and perseverance are the keys to achieving your dreams.", author: "MS Dhoni, Former Indian Cricketer" },
                    { quote: "The best way to predict the future is to create it.", author: "MS Dhoni, Former Indian Cricketer" },
                    { quote: "You need to have the mindset of a winner to become one.", author: "MS Dhoni, Former Indian Cricketer" },
                    { quote: "Life is a game; sometimes you win, sometimes you lose, but you always learn.", author: "MS Dhoni, Former Indian Cricketer" },
                    { quote: "Patience and persistence are essential for success.", author: "MS Dhoni, Former Indian Cricketer" },
                    { quote: "Believe in yourself and work towards your goals with dedication and determination.", author: "MS Dhoni, Former Indian Cricketer" },

                    // Quotes from Sundar Pichai
                    { quote: "A person who is trying to make a difference in the world should focus on making a difference to the lives of others.", author: "Sundar Pichai, CEO of Google" },
                    { quote: "Wear your failure as a badge of honor.", author: "Sundar Pichai, CEO of Google" },
                    { quote: "The internet is the greatest thing to have happened to humanity in the last 20 years.", author: "Sundar Pichai, CEO of Google" },
                    { quote: "You should always focus on improving yourself and learning new things.", author: "Sundar Pichai, CEO of Google" },
                    { quote: "Innovation comes from people who are not afraid to fail.", author: "Sundar Pichai, CEO of Google" },
                    { quote: "There are no limits to what you can accomplish, except the limits you place on your own thinking.", author: "Sundar Pichai, CEO of Google" },
                    { quote: "Success is not just about what you accomplish in your life; it’s about what you inspire others to do.", author: "Sundar Pichai, CEO of Google" },
                    { quote: "Think big and be open to possibilities. Sometimes the best ideas come from the simplest thoughts.", author: "Sundar Pichai, CEO of Google" },
                    { quote: "You should embrace change and see it as an opportunity rather than a challenge.", author: "Sundar Pichai, CEO of Google" },
                    { quote: "The best way to predict the future is to invent it.", author: "Sundar Pichai, CEO of Google" },
                    { quote: "Stay curious, stay open-minded, and continue to learn.", author: "Sundar Pichai, CEO of Google" },
                    { quote: "Don’t be afraid to take risks and make mistakes; that’s how innovation happens.", author: "Sundar Pichai, CEO of Google" },
                    { quote: "Focus on the impact you can make, not just on the accolades you receive.", author: "Sundar Pichai, CEO of Google" },
                    { quote: "Success is not about being the best. It’s about always getting better.", author: "Sundar Pichai, CEO of Google" },
                    { quote: "The only way to do great work is to love what you do.", author: "Sundar Pichai, CEO of Google" },

                    // Quotes from Ratan Tata
                    { quote: "I don’t believe in taking right decisions. I take decisions and then make them right.", author: "Ratan Tata, Chairman Emeritus of Tata Sons" },
                    { quote: "You should not be afraid of taking risks and making mistakes. They are part of the journey to success.", author: "Ratan Tata, Chairman Emeritus of Tata Sons" },
                    { quote: "I have always believed that if you don’t take risks, you cannot create a future.", author: "Ratan Tata, Chairman Emeritus of Tata Sons" },
                    { quote: "If you want to walk fast, walk alone. But if you want to walk far, walk together.", author: "Ratan Tata, Chairman Emeritus of Tata Sons" },
                    { quote: "The greatest fear that you can have is to fear that you will not have enough.", author: "Ratan Tata, Chairman Emeritus of Tata Sons" },
                    { quote: "I think we should not be afraid of the future. It is a question of how we manage our fears and face the challenges.", author: "Ratan Tata, Chairman Emeritus of Tata Sons" },
                    { quote: "The secret of business is to know something that nobody else knows.", author: "Ratan Tata, Chairman Emeritus of Tata Sons" },
                    { quote: "I believe in taking up challenges, in dealing with adversity, and in the power of human perseverance.", author: "Ratan Tata, Chairman Emeritus of Tata Sons" },
                    { quote: "Leadership is not about being in charge. It is about taking care of those in your charge.", author: "Ratan Tata, Chairman Emeritus of Tata Sons" },
                    { quote: "True success is about creating something that impacts the world positively.", author: "Ratan Tata, Chairman Emeritus of Tata Sons" },
                    { quote: "The measure of a person’s success is how they deal with their failures.", author: "Ratan Tata, Chairman Emeritus of Tata Sons" },
                    { quote: "Always be humble, and have a passion for what you do.", author: "Ratan Tata, Chairman Emeritus of Tata Sons" },
                    { quote: "Success is not a destination; it is a journey of continuous improvement and learning.", author: "Ratan Tata, Chairman Emeritus of Tata Sons" },
                    { quote: "The best way to predict the future is to create it.", author: "Ratan Tata, Chairman Emeritus of Tata Sons" },
                    { quote: "It is important to have a vision and follow your passion, even if it means going against the grain.", author: "Ratan Tata, Chairman Emeritus of Tata Sons" },
                ];     
                    
                // Steve Jobs: 14 quotes
                // Bill Gates: 13 quotes
                // Shiv Nadar: 10 quotes
                // Narayana Murthy: 10 quotes
                // Virat Kohli: 14 quotes
                // Rohit Sharma: 15 quotes
                // MS Dhoni: 14 quotes
                // Sundar Pichai: 15 quotes
                // Ratan Tata: 15 quotes

        
            // Get a random quote

                // Get a random quote
                const randomIndex = Math.floor(Math.random() * quotes.length);
                const randomQuote = quotes[randomIndex];
        
                // Display the quote and author in the modal
                document.getElementById("modal-quote").innerText = `"${randomQuote.quote}"`;
                document.getElementById("modal-author").innerText = `- ${randomQuote.author}`;
        
                // Show the modal
                const myModal = new bootstrap.Modal(document.getElementById('quoteModal'));
                myModal.show();
        
                // Set a flag in sessionStorage to indicate the modal has been shown
                sessionStorage.setItem('modalShown', 'true');
            }
        });