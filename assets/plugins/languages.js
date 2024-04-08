// translation.js
let isTranslated = false;

let originalTexts = {
    
    'apresentation': "Olá, me chamo Alexandre Estrela de Lacerda Nobrega. Sinta-se à vontade para explorar meu portfólio!",
    'about_me': "Sobre mim",
    'projects': "Projetos",
    'resume': "Resumo",
    'education': "Educação",
    'contact': "Contate-me",

    'index_professional_field': "Ciência de Dados | Análise de Dados | Estatística | Python",
    'index_about_me_1': "Sou Bacharel em Engenharia Civil, e Mestrando em Tecnologia da Informação seguindo pela linha de pesquisa em Inteligência Computacional. Minha especialidade é em Ciência de Dados. Confira alguns dos",
    'index_about_me_2': "programas, algoritmos, estudos e projetos",
    'index_about_me_3': "que desenvolvi.",
    'index_button_1': "Veja meus",
    'index_button_2': "Veja um",
    'index_abilities_1': "Habilidades",
    'index_abilities_2': "Desde o início da minha formação, percebi uma forte afinidade com a matemática e a programação. Ao longo do tempo, tenho aprimorado e desenvolvido minhas habilidades nessas áreas, especialmente em programação e análise de dados. Meu objetivo é traduzir números em ações concretas e positivas na realidade, desenvolvendo modelos e soluções para problemas complexos por meio de dados.",
    
    'education_introduction': "Me formei como Bacharel em Engenharia Civil, e atualmente sigo como Mestrando em Tecnologia da Informação com foco em Inteligência Computacional. Além disso, busco sempre refinar meus conhecimentos em programação, tecnologias, análise e tratamento de dados.",
    'education_all': "Todos",
    'education_diplomes': "Diplomas",
    'education_certificates': "Certificados",
    'education_bachelor': "Bacharel em Engenharia Civil",
    'education_web_developer': "Programador Web",
    'education_excel': "Excel para Análise de Dados",
    'education_fundaments': "Fundamentos de Analytics",
    'education_powerbi': "Power Bi para Análise de Dados",
    'education_toview': "Visualizar",

    'contact_contact': "Contato",
    'contact_apresentation_1': "Interessado em entrar em contato comigo? Você pode preencher o formulário de contato abaixo ou enviar um e-mail para o endereço ",
    'contact_apresentation_2': "alexandrestrelaln@gmail.com",
    'contact_apresentation_3': ".",
    'contact_social': "Quer se conectar comigo? Entre em contato em uma das redes sociais abaixo.",
    'contact_title': "Entrar em Contato",
    'contact_subject_1': "Selecione o assunto em que está interessado...",
    'contact_subject_2': "Análises",
    'contact_subject_3': "Códigos",
    'contact_subject_4': "Estudos",
    'contact_subject_5': "Gráficos",
    'contact_about_me_1': "Interessado em me conhecer melhor? Confira a página ",
    'contact_your_message_1': "Enviar",
}; 

let translatedTexts = {
    
    'apresentation': "Hi, my name is Alexandre Estrela de Lacerda Nobrega. Feel free to explore my portfolio!",
    'about_me': "About me",
    'projects': "Projects",
    'resume': "Resume",
    'education': "Education",
    'contact': "Contact me",
    
    'index_professional_field': "Data Science | Data Analysis | Estatistic | Python",
    'index_about_me_1': "I have a Bachelor's degree in Civil Engineering, and I am a Master's student in Information Technology following the line of research in Computational Intelligence. My specialty is in Data Science. Check out some of the",
    'index_about_me_2': "programs, algorithms, studies and projects",
    'index_about_me_3': "I developed.",
    'index_button_1': "See my",
    'index_button_2': "See a",
    'index_abilities_1': "Skills",
    'index_abilities_2': "Since the beginning of my education, I have noticed a strong affinity for mathematics and programming. Over time, I have honed and developed my skills in these areas, particularly in programming and data analysis. My goal is to translate numbers into concrete, positive actions in reality, developing models and solutions for complex problems through data.",

    'education_introduction': "I graduated with a Bachelor's degree in Civil Engineering, and I am currently pursuing a Master's degree in Information Technology with a focus on Computational Intelligence. Additionally, I always seek to refine my knowledge in programming, technologies, data analysis, and data processing.",
    'education_all': "All",
    'education_diplomes': "Diplomes",
    'education_certificates': "Certificates",
    'education_bachelor': "Bachelor's degree in Civil Engineering",
    'education_web_developer': "Web Developer",
    'education_excel': "Excel for Data Analysis",
    'education_fundaments': "Fundamentals of Analytics",
    'education_powerbi': "Power Bi for Data Analysis",
    'education_toview': "To View",
    
    'contact_contact': "Contact",
    'contact_apresentation_1': "Interested in getting in touch with me? You can fill out the contact form below or send an email to the address ",
    'contact_apresentation_2': "alexandrestrelaln@gmail.com",
    'contact_apresentation_3': ".",
    'contact_social': "Want to connect with me? Get in touch on one of the social media platforms below.",
    'contact_title': "Get in Touch",
    'contact_subject_1': "Select the subject you are interested in...",
    'contact_subject_2': "Analysis",
    'contact_subject_3': "Codes",
    'contact_subject_4': "Studies",
    'contact_subject_5': "Graphics",
    'contact_about_me_1': "Interested in getting to know me better? Check out the page ",
    'contact_your_message_1': "To Send",
};

function translateToEnglish() {
  isTranslated = !isTranslated;
  const elements = document.querySelectorAll('[data-translate]');

  elements.forEach(element => {
    const key = element.id;

    if (isTranslated) {
      element.innerText = translatedTexts[key];

      document.getElementById("cname").setAttribute("placeholder", "Name");
      document.getElementById("cmessage").setAttribute("placeholder", "Write your message");

    } else {
      element.innerText = originalTexts[key];

      document.getElementById("cname").setAttribute("placeholder", "Nome");
      document.getElementById("cmessage").setAttribute("placeholder", "Escreva sua mensagem");
    }
  });
}

document.getElementById('translateToggle').addEventListener('click', translateToEnglish);
