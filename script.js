let image = ''

document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('file-input');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const botaoRemoverImagem = document.getElementById('botaoRemover')

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    canvas.style.display = "block"
                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                    const dataURL = canvas.toDataURL();

                    let base64 = dataURL.split(',')[1];

                    image = { image: `data:image/jpeg;base64,${base64}`,
                    width: 150,
                    height: 150,
                    alignment: "center"
                }
                botaoRemoverImagem.style.display = "block"
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
            
        }
    });
});

function generatePDF() {

    let nome = document.getElementById('nome').value
    let sobreMim = document.getElementById('sobreMim').value
    let nomeEmpresa1 = document.getElementById('nomeEmpresa1').value
    let periodoEmpresa1 = document.getElementById('periodoEmpresa1').value
    let atividadeEmpresa1 = document.getElementById('atividadeEmpresa1').value
    let nomeEmpresa2 = document.getElementById('nomeEmpresa2').value
    let periodoEmpresa2 = document.getElementById('periodoEmpresa2').value
    let atividadeEmpresa2 = document.getElementById('atividadeEmpresa2').value
    let nomeEmpresa3 = document.getElementById('nomeEmpresa3').value
    let periodoEmpresa3 = document.getElementById('periodoEmpresa3').value
    let atividadeEmpresa3 = document.getElementById('atividadeEmpresa3').value
    let telefone = document.getElementById('telefone').value
    let email = document.getElementById('email').value
    let formacao1 = document.getElementById('formacao1').value
    let formacao2 = document.getElementById('formacao2').value
    let formacao3 = document.getElementById('formacao3').value
    let periodoCurso1 = document.getElementById('periodoCurso1').value
    let periodoCurso2 = document.getElementById('periodoCurso2').value
    let periodoCurso3 = document.getElementById('periodoCurso3').value
    let instituicao1 = document.getElementById('instituicao1').value
    let instituicao2 = document.getElementById('instituicao2').value
    let instituicao3 = document.getElementById('instituicao3').value
    let habilidade1 = document.getElementById('habilidade1').value
    let habilidade2 = document.getElementById('habilidade2').value
    let habilidade3 = document.getElementById('habilidade3').value
    let habilidade4 = document.getElementById('habilidade4').value
    let habilidade5 = document.getElementById('habilidade5').value
    let idioma1 = document.getElementById('idioma1').value
    let idioma2 = document.getElementById('idioma2').value
    let idioma3 = document.getElementById('idioma3').value
    let idioma = 'Idiomas'
    let formacao = 'Formação'
    let experiencia = 'Experiência'
    if (nomeEmpresa1 + nomeEmpresa2 + nomeEmpresa3 == ''){experiencia = ''}
    if (formacao1 + formacao2 + formacao3 == ''){formacao = ''}
    if (idioma1 + idioma2 + idioma3 == ''){idioma = ''}
    if (formacao1.length > 1){formacao1=`${formacao1}, ${periodoCurso1} \n ${instituicao1}`}
    if (formacao2.length > 1){formacao2=`${formacao2}, ${periodoCurso2} \n ${instituicao2}`}
    if (formacao3.length > 1){formacao3=`${formacao3}, ${periodoCurso3} \n ${instituicao3}`}
    

    var docDefinition = {
        content: [
          {
            table: {
              widths: ["40%", "60%"],
              body: [
                [
                  {
                    stack: [ image,
                      { text: "Contato", fontSize: 20, bold: true, alignment: "center", marginBottom: 20, marginTop: 15}, 
                      { ul: [
                        `${telefone}`,
                        `${email}`,
                      ], marginBottom: 25, bold: true },
      
                      { text: `${formacao}`, style: "sectionTitle", marginBottom: 15 },
                      { ul: [
                        `${formacao1}`,
                        `${formacao2}`,
                        `${formacao3}`
                      ], marginBottom: 25 },
                      
                      { text: "Habilidades", style: "sectionTitle", marginBottom: 15 },
                      { ul: [
                        `${habilidade1}`,
                        `${habilidade2}`,
                        `${habilidade3}`,
                        `${habilidade4}`,
                        `${habilidade5}`,
                      ], marginBottom: 25 },
      
                      { text: `${idioma}`, style: "sectionTitle", marginBottom: 15 },
                      { ul: [
                        `${idioma1}`,
                        `${idioma2}`,
                        `${idioma3}`,
                      ], marginBottom: 25 }
                    ],
                    fillColor: "#e6e6e6",
                    margin: [15, 15, 15, 15],
                    cellPadding: 15
                  },
                  
                  {
                    stack: [
                      { text: `${nome}`, fontSize: 32, bold: true, marginBottom: 25 },
                      { text: "Sobre mim", style: "sectionTitle", marginBottom: 15 },
                      { text: `${sobreMim}`, marginBottom: 25 },
      
                      { text: `${experiencia}`, style: "sectionTitle", marginBottom: 15 },
                      {
                        stack: [
                          { text: `${nomeEmpresa1}`, style: "jobTitle" },
                          { text: `${periodoEmpresa1}`, style: "jobDate" },
                          { text: `${atividadeEmpresa1}`, marginBottom: 20 },
      
                          { text: `${nomeEmpresa2}`, style: "jobTitle" },
                          { text: `${periodoEmpresa2}`, style: "jobDate" },
                          { text: `${atividadeEmpresa2}`, marginBottom: 20 },
      
                          { text: `${nomeEmpresa3}`, style: "jobTitle" },
                          { text: `${periodoEmpresa3}`, style: "jobDate" },
                          { text: `${atividadeEmpresa3}`, marginBottom: 20 }
                        ]
                      }
                    ],
                    margin: [15, 15, 15, 15],
                    cellPadding: 15
                  }
                ],
              ],
            },
            layout: "noBorders",
          },
        ],
        styles: {
          sectionTitle: {
            fontSize: 14,
            bold: true,
            color: "#4CAF50",
            marginBottom: 15
          },
          jobTitle: {
            fontSize: 12,
            bold: true,
            marginBottom: 7
          },
          jobDate: {
            fontSize: 10,
            italics: true,
            color: "#999",
            marginBottom: 15
          },
      
        },
      };
      
    pdfMake.createPdf(docDefinition).download('curriculo.pdf');
}

function removerImagem(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d')
    botaoRemoverImagem = document.getElementById('botaoRemover')
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.display = "none"
    image = ''
    botaoRemoverImagem.style.display = "none"
}
