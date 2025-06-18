const wrapper = document.createElement("div");
document.body.append(wrapper);
wrapper.classList.add("flex", "flex-wrap", "gap-[10px]", "w-[1220px]");
const colors = [
  "#CBCBCB",
  "#5CA7FF",
  "#D083FF",
  "#FF99E2",
  "#C5C1C7",
  "#5CFF62",
];

const btncolors = [
  "#A5A5A5",
  "#FFC700",
  "#00FFB2",
  "#FFF500",
  "#00FFB2",
  "#FFC700",
];

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element, i) => {
      const card = document.createElement("div");
      card.classList.add(
        "h-[560px]",
        "w-[400px]",
        "rounded-[28px]",
        "flex",
        "flex-col",
        "p-7",
        "bg-[#CBCBCB]",
        "border-t-2",
        "border-r-2",
        "border-b-8",
        "border-l-2",
        "border-black"
      );
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      card.style.backgroundColor = randomColor;
      card.innerHTML = `
        <img src="${element.img}" alt="" class="w-[344px] rounded-[28px] mb-6 border-2 border-black">
        <h1 class="font-semibold"> ${element.title}</h1>
        <h2 class="font-semibold"> ${element.price}</h2>
        <p class="my-[18px] font-normal text-base"> ${element.descr} </p>
        <button class="w-[344px] h-[74px] border-t-2 border-r-2 border-b-8 border-l-2 border-black bg-[${btncolors[i]}] rounded-[28px] font-normal text-lg font-sans"> Add to cart </button>
        `;
      wrapper.append(card);
    });
  });
