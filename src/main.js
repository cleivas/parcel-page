import anime from "animejs";
import { text } from "./modules/module";

console.log(text);

anime({
    targets: 'h1',
    backgroundColor: 'hsl(100, 90%, 80%)',
    duration: 2000
})

const img = document.createElement('img');
document.body.append(img);

const imgUrl = new URL('./media/placeholder.jpg', import.meta.url);
img.src = imgUrl.href;
