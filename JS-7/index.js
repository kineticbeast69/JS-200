const para = document.querySelector(".paragraph");
const author = document.querySelector(".name");

const randomPara = ["The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their services in 2012","My busy schedule leaves little, if any, time for blogging and social media. The Lorem Ipsum Company has been a huge part of helping me grow my business through organic search and content marketing","Jeramy and his team at the Lorem Ipsum Company whipped my website into shape just in time for tax season. I was excited by the results and am proud to direct clients to my website once again","Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you'll definitely get the 5-star treatment from the Lorem Ipsum Company!","I was skeptical of SEO and content marketing at first, but the Lorem Ipsum Company not only proved itself financially speaking, but the response I have received from customers is incredible. The work is top-notch and I consistently outrank all my competitors on Google. "]

const randomName = ["Roland Weedon ","Kelsi Gordon","Seth Gewirtz","Tasha Zuzalek","Mike Brashears"] 




function change(){
const countAuthor = Math.floor(Math.random()*randomName.length);
const countPara = Math.floor(Math.random()*randomPara.length);
const testimonial = randomPara[countPara];
const authorName = randomName[countAuthor];
para.innerText = testimonial;
author.innerText = authorName;
}

setInterval(change,3000)