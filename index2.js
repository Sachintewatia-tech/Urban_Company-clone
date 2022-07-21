let date=[
    {img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png",
    name: "Appliance Repair" },
    {img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png" ,
    name: "Home Painting"},
    {img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png" ,
    name:"Cleaning & Pest" },
    {img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1641213886588-90a903.png" ,
    name: "Disinfection"},
    {img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png" ,
    name: "Home Repairs"}
];
date.forEach(function(ele){
    let div=document.createElement("div");
    let image=document.createElement("img");
    image.setAttribute("src",ele.img);
    let names=document.createElement("p");
    names.innerText=ele.name;
    div.append(image,names);
    document.querySelector(".nav2").append(div);
})


let images=[
    {img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657022000977-36a913.jpeg"},
    {img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657030364575-5e172d.jpeg"},
    {img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657019604034-39f21a.jpeg"},
    {img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657018859209-d2b667.jpeg"},
    // {img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657018865703-199faf.jpeg"}
];
images.forEach(function(ele){
    let div=document.createElement("div");
    let image=document.createElement("img");
    image.setAttribute("src",ele.img);
    div.append(image);
    document.querySelector(".slide").append(div);
})


let images1=[
    {img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1646140576865-02aba1.jpeg",
    name: "Lasr And Advanced Facials" },
    {img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg" ,
    name: "Furniture Making, Upholstery & Polish"},
    {img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg" ,
    name:"Air Purifier" },
    {img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1643120136395-80523e.jpeg" ,
    name: "Buy RO Water Purifier"},
];
images1.forEach(function(ele){
    let div=document.createElement("div");
    let image=document.createElement("img");
    image.setAttribute("src",ele.img);
    let names=document.createElement("h4");
    names.innerText=ele.name;
    div.append(image,names);
    document.querySelector(".slide2").append(div);
})

let images2=[
    {img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1615874646690-66ab68.jpeg",
    name: "Salon For Men",para:"Flat $100 Off" },
    {img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1606211470897-f4afbc.jpeg" ,
    name: "Massage For Men",para:"Starts at $499"},
    {img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_c0667020.png" ,
    name:"Geysers",para:"Starts at $249" },
    {img:"https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1602245928963-5094c6.jpeg" ,
    name: "House Painters",para:"Consultation At $49"}
];
images2.forEach(function(ele){
    let div=document.createElement("div");
    let image=document.createElement("img");
    image.setAttribute("src",ele.img);
    let names=document.createElement("h4");
    names.innerText=ele.name;
    let para=document.createElement("p");
    para.innerText=ele.para;
    div.append(image,names,para);
    document.querySelector(".slide3").append(div);
})