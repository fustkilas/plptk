window.onload=function(){

    var quiz = {
        title: 'Ziarno',
        locale: 0,
        bravo: ["Brawo! Poprawna Odpowiedź", "Bravo! Correct answer"],
        sorry: ["Niestety! Błędna odpowiedź", "Sorry! Wrong answer"],
        correctAnswers: ["Poprawnych odpowiedzi", "Correct Answers"],
        quote: ["„Przyszłość jest zbyt ważna by zostawić ją wyłącznie rynkowi i historycznemu przypadkowi.” V.Ruttan", "“The future may be too important to be left to either market forces or historical accident.” V. Ruttan."],

        ui: {
            yes: ["Tak", "Yes"],
            no: ["Nie", "No"],
            nextQ: ["Następne Pytanie", "Next Question"],
            playAgain: ["Zagraj Ponownie", "Play Again"],
            langImgURL: ["img/icons/en.png", "img/icons/pl.png"]

        },
        revert: ["Czy na pewno chcesz zagrać od początku?", "Are you sure you want to start again?"],

        help: {
            title: ["Zagraj w interaktywny QUIZ!", "Take an Interactive QUIZ!"],
            instructions: ["Instrukcja gry", "Instructions"],
            blurb: [

                "Przeczytaj tekst ​i odpowiedz na pytanie, dotykając przycisku TAK lub NIE. Po udzieleniu odpowiedzi pokaże się rozwiązanie. Aby przejść​ do kolejnego pytania, ​dotknij przycisku​ NASTĘPNE PYTANIE. Pasek postępu ​na górze ekranu ​pokazuje, ile pytań ​pozostało do ukończenia gry. Jeśli chcesz zagrać od początku, ​dotknij ikonki ⟲ ​znajdującej się w lewym dolnym rogu ekranu.",

                "Read the text and answer the question by tapping YES or NO. The correct answer will then be displayed. To go to the next question, tap NEXT QUESTION. The progress bar at the top of the screen shows how many questions remain. To restart tap the icon ⟲ located in the bottom left corner of the screen."

            ],
            goodluck: [

                "Powodzenia!",

                "Good luck!"

            ]


        },

        texts: [
            {
                number: 1,
                img: "img/ilu1.jpg",
                answer: true,
                prelude: [
                    "Według przewidywań naukowców w połowie XXI wieku, będziemy żyć w zupełnie innym świecie niż dzisiejszy.",
                    "According to scientists’ predictions, in mid-21st century, we will live in a completely different world than we do today."

                ],

                question: [
                    "Czy wpływ na to ma rolnictwo?",
                    "Is this affected by agriculture?"

                ],
                reply: [
                    "W 2050 roku liczba mieszkańców Ziemi może osiągnąć prawie 10 mld, to wymusi zwiększenie globalnej produkcji żywności o 60 procent.",
                    "By 2050, Earth's population could reach almost 10 billion, which means that the global production of food will need to increase by 60 per cent."
                ],
            },
            {
                number: 2,
                img: "img/ilu2.jpg",
                answer: true,

                prelude: [
                    "Współczesne rolnictwo to rolnictwo przemysłowe (intensywne) oparte na wykorzystywaniu dostępnych zasobów naturalnych i wymagające dużych nakładów energii.",
                    "Modern agriculture is industrial (intensive), based on the use of available natural resources and high energy expenditure."

                ],

                question: [
                    "Czy rolnictwo ma wpływ na stan środowiska przyrodniczego?",
                    "Does agriculture affect the state of the natural environment?"
                ],

                reply: [
                    "Intensywne rolnictwo ma duży wpływ na stan środowiska naturalnego, powoduje m.in. wyczerpywanie się ziemi, erozję i zasolenie gleby oraz pogłębiający się niedobór wody.",
                    "Intensive agriculture has a large impact on the natural environment, causing such changes as exhaustion of land, erosion and increased soil salinity, as well as ever-growing water shortage."
                ]
            },
            {
                number: 3,
                img: "img/ilu3.jpg",
                answer: true,

                prelude: [
                    "Negatywne skutki współczesnego rolnictwa to m.in. zanieczyszczenia wód i powietrza, erozja i zasolenie gleby czy ograniczenie bioróżnorodności.",
                    "The negative effects of modern agriculture include water and air pollution, soil erosion and salinity, as well as decreased biodiversity."
                ],
                question: [
                    "Czy rolnictwo wymaga zmian?",
                    "Does agriculture need changes?"

                ],
                reply: [
                    "Jeśli nie zostaną wprowadzone zmiany i racjonalne gospodarowanie zasobami naturalnymi do 2050 roku przewidywany jest wzrost emisji gazów cieplarnianych o 30 procent, co będzie miało znaczący wpływ na środowisko. Głównym problemem stojącym przed współczesnym rolnictwem jest ukierunkowanie go tak, aby zaspokajało popyt na produkty rolniczo-żywnościowe, ale przy zmniejszającej się presji na środowisko.",

                    "If changes are not implemented, and natural resources are not managed rationally, it is expected that by 2050 greenhouse gas emissions will be increased by 30 per cent, which will have a significant impact on the environment. The main problem faced by modern agriculture is that it has to satisfy the demand for agricultural and food products while decreasing its pressure on the environment."

                ],

            },
            {
                number: 4,
                img: "img/ilu4.jpg",
                answer: true,

                prelude: [
                    "Dalszy rozwój rolnictwa możliwy jest jedynie w przypadku uwzględnienia ograniczeń wynikających z wyczerpywania się zasobów naturalnych.",
                    "Further development of agriculture is possible only if the constraints resulting from the depletion of natural resources are taken into account.",

                ],
                question: [
                    "Czy zmiana rolnictwa teraz będzie miała wpływ na dostęp do żywności dla przyszłych pokoleń?",
                    "Will a change in agriculture now affect access to food for future generations?",

                ],
                reply: [
                    "Zwiększanie produkcji rolnej wynikające z potrzeby wyżywienia rosnącej liczby ludności, czyli zapewnienie bezpieczeństwa żywnościowego, bez zwiększania presji na środowisko naturalne to dziś konieczność i wyzwanie dla całego świata. Konieczne więc jest przekształcenie obecnie funkcjonującego rolnictwa industrialnego w rolnictwo zrównoważone. ",

                    "Today, an increase in agricultural production resulting from the need to feed a growing number of people, i.e. providing food security, without increasing pressure on the natural environment, is a necessity and a challenge for the whole world. It is therefore necessary to transform the current industrial agriculture into sustainable agriculture."

                ],

            },
            {
                number: 5,
                img: "img/ilu5.jpg",
                answer: true,


                prelude: [
                    "Intensywna gospodarka rolna wydaje się niedoskonała w obliczu zadbania o potrzeby żywnościowe przyszłych pokoleń.",
                    "Intensive farming seems ineffective in the face of ensuring food security of future generations.",
                ],
                question: [
                    "Czy masz wpływ na stan rolnictwa światowego?",
                    "Do you have influence on the state of global agriculture?",

                ],
                reply: [

                    "Racjonalne gospodarowanie żywnością, a tym samym zakupami w indywidualnych gospodarstwach domowych mogłoby zmniejszyć zapotrzebowanie na żywność i nie wymuszać znacznego wzrostu produkcji rolnej, co jest przewidywane w przyszłości.",
                    "Rational management of food, which also includes rational management of purchases made within individual households, could decrease food demand without forcing substantial increase in agricultural production, which is expected in the future."

                ],
            },
            {
                number: 6,
                img: "img/ilu6.jpg",
                answer: true,

                prelude: [

                    "Współczesne rolnictwo to ogólnoświatowy, zglobalizowany system. Kontrolę nad nim przejęły ponadnarodowe korporacje.",
                    "Modern agriculture is a worldwide, globalised system managed by supranational corporations.",


                ],
                question: [
                    "Czy Twoje wybory podczas codziennych zakupów mogą wpłynąć na jakość dostępnych produktów żywnościowych?",
                    "Can your daily shopping choices influence the quality of the available food products?",


                ],
                reply: [
                    "Największy wpływ na jakość dostępnej żywności ma świadomy konsument, czyli każdy z nas, ponieważ to od nas zależy, co i gdzie kupimy, jakiej jakości produkty wybierzemy, czy będą dla nas ważne skład i pochodzenie żywności.",
                    "A conscious consumer has the greatest impact on the quality of available food. We are the ones who decide what we buy and where we buy it, what quality we choose and whether we care for the ingredients and origin of the food we consume."

                ],
            },
            {
                number: 7,
                img: "img/ilu7.jpg",
                answer: true,

                prelude: [
                "Globalizacja rolnictwa prowadzi do zaniku tradycyjnych i regionalnych, małych gospodarstw. ",
                "The globalisation of agriculture leads to the disappearance of traditions and small, regional farms.",

                ],
                question: [

                "Czy wybierając konkretne produkty żywnościowe możesz zmienić kierunek rozwoju rolnictwa?",
                "Can you change the direction of the development of agriculture by choosing specific food products?",

                ],
                reply: [

                    "Polityka korporacji, nastawiona na masową produkcję i sprzedaż, prowadzi do eliminacji lokalnych czy regionalnych odmian roślin, mało efektywnych i wydajnych, i wprowadzania gatunków o znaczeniu globalnym, szybko rosnących, odpornych i dających wysokie plony. Jedynie spadek popytu na dany produkt zmusi spożywczych gigantów do dostosowania produkcji do preferencji konsumenckich.",
                    "Corporate policy, which is focused on mass production and sales, leads to the elimination of local and regional ineffective and inefficient plant varieties, and to the introduction of globally significant species that grow faster, are resilient and provide high yields. Only a decrease in the demand for a given product will force large food corporations to adjust their production to consumer preferences."

                ],

            },
            {
                number: 8,
                img: "img/ilu8.jpg",
                answer: false,

                prelude: [
                    "Poziom wydajności współczesnego rolnictwa jest bardzo wysoki. Zaledwie 2% populacji jest w stanie wyżywić ogół ludności.",
                    "The level of productivity of modern agriculture is very high. Only 2% of the population is enough to feed the entire population.",

                ],
                question: [
                    "Czy występujący na świecie głód jest wynikiem braku żywności?",
                    "Is hunger in the world the result of a lack of food?",

                ],
                reply: [

                    "Problemami są dystrybucja produktów i różnice między krajami rozwiniętymi i rozwijającymi się.",
                    "The problem is product distribution and differences between developed and developing countries."

                ],
            },
            {
                number: 9,
                img: "img/ilu9.jpg",
                answer: true,

                prelude: [
                "Ilość obecnie produkowanej żywności wynosi 4000 kcal/dobę/osobę. To przewyższa normy żywieniowe. Marnotrawimy 1,3 miliarda ton żywności rocznie, co stanowi około 40% produkcji światowej.",
                "The amount of food being produced currently is 4,000 kcal / day / person. This exceeds nutritional standards. We waste 1.3 billion tonnes of food a year, which accounts for about 40% of the global production.",

                ],
                question: [

                    "Czy jakość żywności ma wpływ na jakość naszego zdrowia i życia?",
                    "Does the quality of food affect the quality of our health and life?",

                ],
                reply: [

                    "Żywność o długiej przydatności do spożycia wynikającej ze stosowania konserwantów, kolorowej dzięki barwnikom chemicznym, o zwiększonej zawartości cukrów ma duży wpływ na zdrowie konsumentów i tym samym na jakość życia.",
                    "Food with long shelf life caused by preservatives, food with chemical colouring and food with increased sugar content have a significant impact on the consumer's health, and consequently on their life quality."

                ],



            },
            {
                number: 10,
                img: "img/ilu10.jpg",

                prelude: [
                    "",
                    ""

                ],
                question: [

                    "", ""
                ],
                reply: [

                    "", ""
                ],

            }
        ]
    };


    new Vue({
        el: '#app',
        data: {
            quiz: quiz,
            questionIndex: 0,
            nanobar: 11.111111,
            nextDisabled: true,
            yesDisabled: false,
            noDisabled: false,
            correct: "#a5e521",
            incorrect: "#ff9700",
            yesColor: "#ffffff",
            noColor: "#ffffff",
            disabledColor: "#d6d6d6",
            displayToast: false,
            score: 0,
            good: true,
            showHelp: false,
            showRevert: false

        },

        methods: {

            tak: function() {

                this.displayToast = true
                this.nextDisabled = false
                this.noColor = this.disabledColor

                this.noDisabled =  true
                this.yesDisabled =  true

                if (quiz.texts[this.questionIndex].answer) {

                    this.yesColor = this.correct
                    this.good = true
                    this.score++

                }
                else {
                    this.yesColor = this.incorrect
                    this.good = false
                }
            },
            nie: function() {

                this.displayToast = true
                this.nextDisabled = false
                this.yesColor = this.disabledColor

                this.noDisabled =  true
                this.yesDisabled =  true


                if (quiz.texts[this.questionIndex].answer) {

                    this.noColor = this.incorrect
                    this.good = false
                }
                else {

                    this.noColor = this.correct
                    this.good = true
                    this.score++

                }
            },

            next: function() {
                this.questionIndex++

                this.nanobar = this.nanobar + 11.111111

                this.yesDisabled = false
                this.noDisabled =  false
                this.nextDisabled = true

                this.yesColor = "#ffffff"
                this.noColor = "#ffffff"
                this.displayToast = false
            },

            swap: function() {

                if(quiz.locale === 1) {
                    quiz.locale = 0;
                }
                else {
                    quiz.locale = 1;
                }

            },

            revert: function() {

                this.questionIndex = 0;
                this.nanobar = 11.111111;
                this.score = 0;

                this.showHelp = false
                this.showRevert = false

            },

            revertQ: function() {

                this.showRevert = true

            },


            help: function() {

                this.showHelp = true

            },

            close: function() {

                this.showHelp = false
                this.showRevert = false
            }

        }
    });


}



