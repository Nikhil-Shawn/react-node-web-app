const notFound = (req, res)=>{
    res.status(404).json(`<h1>Oops!! Nothing to see here.</h1> <h2>Wrong URL</h2>`)
}

module.exports= notFound