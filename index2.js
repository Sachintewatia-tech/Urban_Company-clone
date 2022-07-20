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