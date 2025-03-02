const Skills = () => {
    
    const myskills = [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    ];
    return (
        <div className="skills container">
            <div className="skills__content">
                <div className="item">
                    {
                        myskills.map((src, i) => (
                            <img key={i} src={src} width="40" height="40" alt="" />
                        ))
                    }
                </div>
                <p>Отлично знаю html 5 и css 3. Знаком с javascript, пишу на нем для добавления анимаций, расчетов, динамичности и улучшения интерфейса.
                    Также в моих навыках есть React, создаю на нем динамичные веб-приложения с четкой структурой. Пишу в редакторе Visual Studio Code. Макеты делаю по Figma.
                    Использую GitHub для хранения проектов и кода.</p>
            </div>
            <h3>Мои навыки</h3>
        </div>
    );
}
export default Skills;