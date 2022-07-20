let data=[
    {img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png",
    name: "Salon for women" },
    {img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/supply/customer-app-supply/1635331606894-7b633f.png" ,
    name: "Hair, skin & Nails"},
    {img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png" ,
    name:"Women's Therapies" },
    {img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png" ,
    name: "Salon for men"},
    {img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png" ,
    name: "Men's Therapies"}
];
data.forEach(function(ele){
    let div=document.createElement("div");
    let image=document.createElement("img");
    image.setAttribute("src",ele.img);
    let names=document.createElement("p");
    names.innerText=ele.name;
    div.append(image,names);
    document.querySelector(".nav1").append(div);
})

