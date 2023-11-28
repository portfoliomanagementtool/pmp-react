import React from "react";
import Asset from "./Asset";


const AssetCard=[
    {id: 1, title:"ETH", price:"12345", org:"CRY",percentage:"-4.65(-2.62%)"},
    {id: 2, title:"ETH", price:"12345", org:"CRY",percentage:"+4.65(-2.62%)"},
    {id: 3, title:"ETH", price:"12345", org:"CRY",percentage:"+4.65(-2.62%)"},
    {id: 4, title:"ETH", price:"12345", org:"CRY",percentage:"-4.65(-2.62%)"},
    {id: 5, title:"ETH", price:"12345", org:"CRY",percentage:"+4.65(-2.62%)"},
    {id: 6, title:"ETH", price:"12345", org:"CRY",percentage:"-4.65(-2.62%)"},
    {id: 7, title:"ETH", price:"12345", org:"CRY",percentage:"+4.65(-2.62%)"},
    {id: 8, title:"ETH", price:"12345", org:"CRY",percentage:"+4.65(-2.62%)"},
    {id: 9, title:"ETH", price:"12345", org:"CRY",percentage:"-4.65(-2.62%)"},
    {id: 10, title:"ETH", price:"12345", org:"CRY",percentage:"+4.65(-2.62%)"},
]
const RecentlyVisited = () => {
  return (
    <div className="border-2 m-5  rounded shadow-xl bg-white font-Poppins  ">
        <h1 className="font-bold text-xl text-gray-600  p-5">Recently Visited</h1>
        <div  className="h-[350px] overflow-y-auto remove-scroll">
        {AssetCard?.map(obj=>{
            return(
                <Asset key={obj?.id} {...obj}/>
            )
        })}
        </div>
    </div>
  );
};

export default RecentlyVisited;
