import React from "react";
import Asset from "./Asset";


const AssetCard=[
    {title:"ETH", price:"12345", org:"CRY",percentage:"-4.65(-2.62%)"},
    {title:"ETH", price:"12345", org:"CRY",percentage:"+4.65(-2.62%)"},
    {title:"ETH", price:"12345", org:"CRY",percentage:"+4.65(-2.62%)"},
    {title:"ETH", price:"12345", org:"CRY",percentage:"-4.65(-2.62%)"},
    {title:"ETH", price:"12345", org:"CRY",percentage:"+4.65(-2.62%)"},
    {title:"ETH", price:"12345", org:"CRY",percentage:"-4.65(-2.62%)"},
    {title:"ETH", price:"12345", org:"CRY",percentage:"+4.65(-2.62%)"},
    {title:"ETH", price:"12345", org:"CRY",percentage:"+4.65(-2.62%)"},
    {title:"ETH", price:"12345", org:"CRY",percentage:"-4.65(-2.62%)"},
    {title:"ETH", price:"12345", org:"CRY",percentage:"+4.65(-2.62%)"},
]
const RecentlyVisited = () => {
  return (
    <div className="border-2 m-5  rounded-3xl shadow-gray-500 shadow-sm font-Poppins ">
        <h1 className="text-[#7A7A7A] text-2xl p-2">RECENTLY VISITED</h1>
        <div className="h-[400px] overflow-y-auto">
        {AssetCard?.map(obj=>{
            return(
                <Asset key={obj?.title} {...obj}/>
            )
        })};
        </div>
    </div>
  );
};

export default RecentlyVisited;
