let mainBlock = () => {

    const container = document.querySelector(".container");

    for (let i = 0; i < 16; i++) {
        const blocks = document.createElement("div");
        blocks.style.border = "0px solid grey";
        blocks.classList.add("blocks");

        container.appendChild(blocks);

        for (let j = 0; j < 16; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
    
            blocks.appendChild(box);
        }
    }
    }
  

mainBlock();
