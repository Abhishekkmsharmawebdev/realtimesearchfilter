let users = [
  {
    name: "amisha rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
  },
  {
    name: "amita mehta",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "main character energy 🎬 | coffee > everything ☕✨",
  },
  {
    name: "isha oberoi",
    pic: "https://i.pinimg.com/736x/7e/4d/2a/7e4d2a10889b104619e93dabeb374d0f.jpg",
    bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
  },
  {
    name: "Ojin Oklawa",
    pic: "https://i.pinimg.com/736x/ab/4a/1a/ab4a1aa0ea247f4ce6ab1da112302a2f.jpg",
    bio: "too glam to give a damn 💅 | filter free soul",
  },
  {
    name: "payal ",
    pic: "https://i.pinimg.com/736x/3d/0b/b5/3d0bb5874ee463984227adfca7d96dc4.jpg",
    bio: "a little chaos, a lot of art 🎨✨ | just vibes",
  },
  {
    name: "tanya rawat",
    pic: "https://i.pinimg.com/736x/28/6c/a2/286ca2e613618f5b5527bd7235ae27b3.jpg",
    bio: "don’t text, just vibe 🪩 | soft heart, sharp mind",
  },
  {
    name: "diya bansal",
    pic: "https://i.pinimg.com/736x/ad/5e/dc/ad5edc352760a627b67028e8c2c448a9.jpg",
    bio: "aesthetic overload 📸🕊️ | living in lowercase",
  },
];

function showUsers(arr) {
  arr.forEach(function (user) {
    // Create outer card div
    const card = document.createElement("div");
    card.classList.add("card");

    // Create image
    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    // Create blurred-layer div
    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;
    blurredLayer.classList.add("blurred-layer");

    // Create content div
    const content = document.createElement("div");
    content.classList.add("content");

    // Create h3 and paragraph
    const heading = document.createElement("h3");
    heading.textContent = user.name;

    const para = document.createElement("p");
    para.textContent = user.bio;

    // Append heading and paragraph to content
    content.appendChild(heading);
    content.appendChild(para);

    // Append all to card
    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    // Finally, append card to the body or any container
    document.querySelector(".cards").appendChild(card);
  });
}

showUsers(users);

let inp = document.querySelector(".inp");
inp.addEventListener("input", function () {
  let newUsers = users.filter((user) => {
    return user.name.startsWith(inp.value);
  });
const cardsContainer = document.querySelector(".cards");
cardsContainer.innerHTML = "";

if (newUsers.length === 0) {
  const msg = document.createElement("p");
  msg.textContent = "No user found";
  msg.classList.add("no-user-message"); // Optional class for styling
  cardsContainer.appendChild(msg);
} else {
  showUsers(newUsers);
}

});