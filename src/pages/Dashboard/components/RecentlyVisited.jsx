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
    <div className="border-2 m-5  rounded shadow-xl bg-white font-Poppins  ">
        <h1 className="font-bold text-xl text-gray-600  p-5">Recently Visited</h1>
        <div className="h-[350px] overflow-y-auto">
        {AssetCard?.map(obj=>{
            return(
                <Asset key={obj?.title} {...obj}/>
            )
        })}
        </div>
    </div>
  );
};

export default RecentlyVisited;
