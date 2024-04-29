// translation.js
let isTranslated = false;

let originalTexts = {
  
    'apresentation': "Olá, me chamo Alexandre Estrela de Lacerda Nobrega. Sinta-se à vontade para explorar meu portfólio!",
    'about_me': "Sobre mim",
    'projects': "Projetos",
    'resume': "Currículo",
    'education': "Educação",
    'contact': "Contate-me",
    
    'index_professional_field': "Ciência de Dados | Análise de Dados | AI/ML",
    'index_about_me_1': "Sou Bacharel em Engenharia Civil, e Mestrando em Tecnologia da Informação seguindo pela linha de pesquisa em Inteligência Computacional. Minha especialidade é em Ciência de Dados. Confira alguns dos",
    'index_about_me_2': "programas, algoritmos, estudos e projetos",
    'index_about_me_3': "que desenvolvi.",
    'index_button_1': "Veja meus",
    'index_button_2': "Veja um",
    'index_abilities_1': "Habilidades",
    'index_abilities_2': "Desde o início da minha formação, percebi uma forte afinidade com a matemática e a programação. Ao longo do tempo, tenho aprimorado e desenvolvido minhas habilidades nessas áreas, especialmente em programação e análise de dados. Meu objetivo é traduzir números em ações concretas e positivas na realidade, desenvolvendo modelos e soluções para problemas complexos por meio de dados.",
    
    'projects_introduction': "Seja bem-vindo à minha página de projetos! Aqui você pode conferir algoritmos, análises, artigos e projetos que desenvolvi ao longo da minha vida profissional e acadêmica, incluindo minha experiência com linguagens de programação, bibliotecas e tecnologias.",
    'projects_all': "Tudo",
    'projects_analyses': "Análises",
    'projects_codes': "Códigos",
    'projects_studies': "Estudos",
    'projects_charts': "Gráficos",
    'projects_category': "Categoria: ",
    'projects_toview': "Visualizar",
    'projects_analyses_dr_description': "Implementações em Python de algoritmos de aprendizado de máquina profundo, utilizados para criar modelos preditivos para identificar imagens, no desafio Digit Recognizer do Kaggle.",
    'projects_analyses_doii_description': "Implementações em Python de algoritmos de aprendizado de máquina, utilizados para criar modelos preditivos robustos com poucos dados, no desafio Don't Overfit! II do Kaggle.",
    'projects_analyses_ofab_title': "Óbitos por Febre Amarela no Brasil",
    'projects_analyses_ofab_description': "Implementações em Python de algoritmos de aprendizado de máquinas supervisionado, utilizados para prever o óbito de enfermos que contraíram febre amarela no Brasil.",
    'projects_analyses_titanic_description': "Implementações em Python de algoritmos de aprendizado de máquinas supervisionado, utilizados para prever a sobrevivência de passageiros do Titanic no desafio Kaggle.",
    'projects_codes_intensio_title': "Código fonte do Intensio",
    'projects_codes_intensio_description': "Código fonte da ferramenta computacional Intensio, criada para desktop com o objetivo de calcular a equação de chuvas intensas.",
    'projects_codes_geobi_title': "Código fonte do GeoBi",
    'projects_codes_geobi_description': "Código fonte da ferramenta computacional GeoBi, criada para desktop e como plug-in para o software QGIS, com o objetivo de calcular áreas de contribuição.",
    'projects_codes_proloss_title': "Código fonte do ProLoss",
    'projects_codes_proloss_description': "Código fonte da ferramenta computacional ProLoss, criada para desktop com o objetivo de calcular perdas de protensão.",
    'projects_codes_mpd_title': "Métodos de Processamento de Dados",
    'projects_codes_mpd_description': "Cadernos sobre diferentes métodos de processamento de dados, desenvolvidos com as bibliotecas pandas, scikit-learn, matplotlib, dentre outras da linguagem Python.",
    'projects_codes_seuseventos_title': "Projeto de site para criação de eventos",
    'projects_codes_seuseventos_description': 'Projeto de site destinado a criação de eventos de nome "Seus Eventos", desenvolvido em Django e Bootstrap com banco de dados SQLite.',
    'projects_codes_bohconvert_title': 'Projeto de site para conversão entre sistemas de numeração',
    'projects_codes_bohconvert_description': 'Projeto de site usando Docker e Kubernetes de nome "BOHConvert", desenvolvido em Django e Bootstrap com banco de dados PostgreSQL.',
    'projects_codes_tcc_title': "Trabalho de Conclusão de Curso em LaTeX",
    'projects_codes_tcc_description': "Código em LaTeX do meu Trabalho de Conclusão de Curso: Desenvolvimento de ferramenta computacional para determinação de equações de chuvas intensas.",
    'projects_codes_beecrowd_title': "Questões resolvidas do Beecrowd",
    'projects_codes_beecrowd_description': 'Questões Resolvidas do Beecrowd (URI). Os problemas postados geralmente estão classificadas nas áreas "Iniciante", "Strings" e "Matemática" do Beecrowd.',
    'projects_codes_tkinter_title': "Programas para desktop em Tkinter",
    'projects_codes_tkinter_description': "Algoritmos com interface gráfica para desktop windows programado em python através da biblioteca nativa da linguagem, o tkinter.",
    'projects_codes_ac_title': "Algoritmos de cálculo",
    'projects_codes_ac_description': "Algoritmos especializados em realizar cálculos matemáticos, comumente utilizados para resolver problemas numéricos.",
    'projects_studies_tcc_title': "Trabalho de Conclusão de Curso",
    'projects_studies_tcc_description': "Trabalho de Conclusão de Curso para obtenção do título de Bacharel em Engenharia Civil, que trata do desenvolvimento da ferramenta para cálculo da equação de chuvas Intensio.",
    'projects_studies_intensio_title': "Artigo ciêntifico sobre ferramenta Intensio",
    'projects_studies_intensio_description': "Desenvolvimento de ferramenta computacional para determinação de equações de chuvas intensas: O artigo aborda o desenvolvimento e estudos da ferramenta Intensio.",
    'projects_studies_geobi_title': "Artigo ciêntifico sobre ferramenta GeoBi",
    'projects_studies_geobi_description': "Ferramenta GIS para auxílio em traçado de áreas de contribuição: O artigo científico que aborda a ferramenta GeoBi, desenvolvida para o traçado de áreas de contribuição.",
    'projects_charts_ofab_title': "Painel de Óbitos por Febre Amarela no Brasil",
    'projects_charts_ofab_description': "Painel com gráficos de estudo, criado a partir de modelos de aprendizado de máquinas, para prever o óbito de enfermos que contraíram febre amarela no Brasil.",

    'resume_title': "Currículo Online",
    'resume_b_1': "Baixar em PDF",
    'resume_b_2': "Baixar em DOC",
    'resume_experience': "Experiências Profissionais",
    'resume_pe1_position': "Estagiário",
    'resume_pe1_exp1': "Desenvolvimento de algoritmos de automação em Python;",
    'resume_pe1_exp2': "Criação e programação de planilhas orçamentárias em Excel;",
    'resume_pe1_exp3': "Ensino aos funcionários sobre uso de planilhas desenvolvidas.",
    'resume_porjects': "Principais Projetos",
    'resume_pp1_title': "Desenvolvimento do programa ",
    'resume_pp1_type': "Código Aberto",
    'resume_pp1_p1': "Uso do Python, e das bibliotecas NumPy e SciPy e Tkinter;",
    'resume_pp1_p2': "Tratamento estatístico de dados de séries temporais;",
    'resume_pp1_p3': "Criação de interface gráfica, instalador e manual de uso;",
    'resume_pp1_p4': "Modelagem de aprendizado de máquinas supervisionado.",
    'resume_pp2_title': "Estudo de Óbitos por Febre Amarela no Brasil",
    'resume_pp2_type': "Código Aberto",
    'resume_pp2_p1': "Utilização do Jupyter Notebook para estudo e Power Bi para painel;",
    'resume_pp2_p2': "Uso do Python, e das bibliotecas Pandas, Matplotlib e Sklearn;",
    'resume_pp2_p3': "Aplicação de técnicas de cluster, suavização e normalização de dados;",
    'resume_pp2_p4': "Manejo de modelos de aprendizado supervisionado para predição.",
    'resume_fa_title': "Formações Acadêmicas",
    'resume_fa1_title': "Bacharel",
    'resume_fa1_date': "fev de 2019 - dez de 2023",
    'resume_fa1_training': "Curso de Bacharelado em Engenharia Civil.",
    'resume_fa2_title': "Mestre",
    'resume_fa2_date': "fev de 2024 - momento",
    'resume_fa2_training': "Curso de Mestrado Profissional em Tecnologia da Informação.",
    'resume_c_1': "Microsoft Excel para Análise de Dados",
    'resume_c_2': "Fundamentos de Data Analytics",
    'resume_c_3': "Power BI para Análise de Dados",
    'resume_c_4': "Programador WEB",
    'resume_l_title': "Linguas",
    'resume_l_1': "Português",
    'resume_l_2': "Inglês",
    'resume_i_title': "Interesses",
    'resume_i_1': "Jogos de Computador",
    'resume_i_2': "Aprender Coisas Novas",
    'resume_i_3': "Programação Competitiva",

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
    
    'index_professional_field': "Data Science | Data Analysis | AI/ML",
    'index_about_me_1': "I have a Bachelor's degree in Civil Engineering, and I am a Master's student in Information Technology following the line of research in Computational Intelligence. My specialty is in Data Science. Check out some of the",
    'index_about_me_2': "programs, algorithms, studies and projects",
    'index_about_me_3': "I developed.",
    'index_button_1': "See my",
    'index_button_2': "See a",
    'index_abilities_1': "Skills",
    'index_abilities_2': "Since the beginning of my education, I have noticed a strong affinity for mathematics and programming. Over time, I have honed and developed my skills in these areas, particularly in programming and data analysis. My goal is to translate numbers into concrete, positive actions in reality, developing models and solutions for complex problems through data.",

    'projects_introduction': "Welcome to my projects page! Here you can check algorithms, analyses, articles, and projects that I've developed throughout my professional and academic life, including my experience with programming languages, libraries, and technologies.",
    'projects_all': "All",
    'projects_analyses': "Analyses",
    'projects_codes': "Codes",
    'projects_studies': "Studies",
    'projects_charts': "Charts",
    'projects_category': "Category: ",
    'projects_toview': "To View",
    'projects_analyses_dr_description': "Python implementations of deep learning algorithms, used to create predictive models to identify images, in the Digit Recognizer challenge on Kaggle.",
    'projects_analyses_doii_description': "Python implementations of machine learning algorithms, used to create robust predictive models with few data, in the Don't Overfit! II challenge on Kaggle.",
    'projects_analyses_ofab_title': "Yellow Fever Deaths in Brazil",
    'projects_analyses_ofab_description': "Python implementations of supervised machine learning algorithms, used to predict the death of individuals who contracted yellow fever in Brazil.",
    'projects_analyses_titanic_description': "Python implementations of supervised machine learning algorithms, used to predict the survival of Titanic passengers in the Kaggle challenge.",
    'projects_codes_intensio_title': "Intensio Source Code",
    'projects_codes_intensio_description': "Source code of the Intensio computational tool, created for desktop with the aim of calculating intense rain equations.",
    'projects_codes_geobi_title': "GeoBi Source Code",
    'projects_codes_geobi_description': "Source code of the GeoBi computational tool, created for desktop and as a plugin for QGIS software, with the aim of calculating contribution areas.",
    'projects_codes_proloss_title': "ProLoss Source Code",
    'projects_codes_proloss_description': "Source code of the ProLoss computational tool, created for desktop with the aim of calculating prestressing losses.",
    'projects_codes_mpd_title': "Data Processing Methods",
    'projects_codes_mpd_description': "Notebooks on different data processing methods, developed with libraries like pandas, scikit-learn, matplotlib, among others in the Python language.",
    'projects_codes_seuseventos_title': "Event Creation Website Project",
    'projects_codes_seuseventos_description': 'Website project for event creation named "Seus Eventos", developed in Django and Bootstrap with SQLite database.',
    'projects_codes_bohconvert_title': 'Website project for conversion between numbering systems',
    'projects_codes_bohconvert_description': "Website project using Docker and Kubernetes named 'BOHConvert', developed in Django and Bootstrap with PostgreSQL database.",
    'projects_codes_tcc_title': "Latex Graduation Project",
    'projects_codes_tcc_description': "Latex code of my Graduation Project: Development of a computational tool for determining intense rain equations.",
    'projects_codes_beecrowd_title': "Solved Beecrowd Problems",
    'projects_codes_beecrowd_description': 'Solved Beecrowd (URI) Problems. The problems posted are usually classified in the areas "Beginner", "Strings", and "Mathematics" on Beecrowd.',
    'projects_codes_tkinter_title': "Tkinter Desktop Programs",
    'projects_codes_tkinter_description': "Algorithms with graphical interface for windows desktop programmed in python through the language's native library, tkinter.",
    'projects_codes_ac_title': "Calculation Algorithms",
    'projects_codes_ac_description': "Algorithms specialized in performing mathematical calculations, commonly used to solve numerical problems.",
    'projects_studies_tcc_title': "Graduation Project",
    'projects_studies_tcc_description': "Graduation Project to obtain the degree of Bachelor in Civil Engineering, which deals with the development of the tool for calculating Intensio rain equations.",
    'projects_studies_intensio_title': "Intensio Tool Scientific Article",
    'projects_studies_intensio_description': "Development of a computational tool for determining intense rain equations: The article addresses the development and studies of the Intensio tool.",
    'projects_studies_geobi_title': "GeoBi Tool Scientific Article",
    'projects_studies_geobi_description': "GIS tool to aid in contribution areas tracing: The scientific article that addresses the GeoBi tool, developed for contribution areas tracing.",
    'projects_charts_ofab_title': "Brazilian Yellow Fever Deaths Panel",
    'projects_charts_ofab_description': "Panel with study charts, created from machine learning models, to predict the death of individuals who contracted yellow fever in Brazil.",

    'resume_title': "Online Resume",
    'resume_b_1': "Download as PDF",
    'resume_b_2': "Download as DOC",
    'resume_experience': "Professional Experience",
    'resume_pe1_position': "Intern",
    'resume_pe1_exp1': "Development of automation algorithms in Python;",
    'resume_pe1_exp2': "Creation and programming of budget spreadsheets in Excel;",
    'resume_pe1_exp3': "Teaching employees how to use developed spreadsheets.",
    'resume_porjects': "Main Projects",
    'resume_pp1_title': "Development of software ",
    'resume_pp1_type': "Open Source",
    'resume_pp1_p1': "Use of Python, NumPy, SciPy, and Tkinter libraries;",
    'resume_pp1_p2': "Statistical treatment of time series data;",
    'resume_pp1_p3': "Creation of graphical interface, installer, and user manual;",
    'resume_pp1_p4': "Supervised machine learning modeling.",
    'resume_pp2_title': "Study of Yellow Fever Deaths in Brazil",
    'resume_pp2_type': "Open Source",
    'resume_pp2_p1': "Use of Jupyter Notebook for study and Power Bi for panel;",
    'resume_pp2_p2': "Use of Python, Pandas, Matplotlib, and Sklearn libraries;",
    'resume_pp2_p3': "Application of clustering techniques, data smoothing, and normalization;",
    'resume_pp2_p4': "Management of supervised learning models for prediction.",
    'resume_fa_title': "Academic Educations",
    'resume_fa1_title': "Bachelor",
    'resume_fa1_date': "feb 2019 - dec 2023",
    'resume_fa1_training': "Bachelor's degree in Civil Engineering.",
    'resume_fa2_title': "Master",
    'resume_fa2_date': "feb 2024 - present",
    'resume_fa2_training': "Professional Master's degree in Information Technology.",
    'resume_c_1': "Microsoft Excel for Data Analysis",
    'resume_c_2': "Fundamentals of Data Analytics",
    'resume_c_3': "Power BI for Data Analysis",
    'resume_c_4': "Web Programmer",
    'resume_l_title': "Languages",
    'resume_l_1': "Portuguese",
    'resume_l_2': "English",
    'resume_i_title': "Interests",
    'resume_i_1': "Computer Games",
    'resume_i_2': "Learning New Things",
    'resume_i_3': "Competitive Programming",

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
    'contact_subject_2': "Analyses",
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

      if (window.location.href.includes("/contact")) {
        document.getElementById("cname").setAttribute("placeholder", "Name");
        document.getElementById("cmessage").setAttribute("placeholder", "Write your message");
      }

      if (window.location.href.includes("/resume")) {
        document.getElementById("cresume_pdf").setAttribute('href', 'assets/documents/resume.pdf');
        document.getElementById("cresume_doc").setAttribute('href', 'https://docs.google.com/document/d/1WLldEnv7XJdF0XkMpsodLAIHI-OFnphG/edit?usp=sharing&ouid=112037969560777401845&rtpof=true&sd=true');
      }

    } else {
      element.innerText = originalTexts[key];

      if (window.location.href.includes("/contact")) {
        document.getElementById("cname").setAttribute("placeholder", "Nome");
        document.getElementById("cmessage").setAttribute("placeholder", "Escreva sua mensagem");
      }

      if (window.location.href.includes("/resume")) {
        document.getElementById("cresume_pdf").setAttribute('href', 'assets/documents/curriculo.pdf');
        document.getElementById("cresume_doc").setAttribute('href', 'https://docs.google.com/document/d/1wtyq2lnxZwDkrb8E31TMSXXGM2PJatUh/edit?usp=drive_link&ouid=112037969560777401845&rtpof=true&sd=true');
      }
    }
  });

  Cookies.set('translationState', isTranslated ? 'translated' : 'original');
}

document.addEventListener('DOMContentLoaded', function() {
  const translationState = Cookies.get('translationState');
  if (translationState === 'translated') {
      translateToEnglish();
      document.getElementById('translateToggle').checked = true;
  }
});

document.getElementById('translateToggle').addEventListener('click', translateToEnglish);
