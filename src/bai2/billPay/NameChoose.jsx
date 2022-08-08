import React from 'react'

export default function NameChoose({ packageIncludes }) {
    const newPackageIncludes = packageIncludes.filter(elm=>elm)
    return (
        <div className="col-md-4 package-includes">
            {
                
                newPackageIncludes.map((elm,index)=>{
                    if(index == newPackageIncludes.length-1){
                        return `${elm}`
                    }
                    return `${elm} + `
                })
            }
        </div>
    )
}
