



export const formateDate =(date,config)=>{

    const defaultOptions = {date:'numeric',month:"short",year:'numeric'};


    const options = config? config : defaultOptions

    
    return new Date(date).toLocaleDateString('en-US',options)
}