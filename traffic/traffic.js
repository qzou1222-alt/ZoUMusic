let pagename = location.pathname
if (pagename.startsWith("/ZoUMusic") && (pagename.length === 9 || pagename[9] === "/")){
    pagename = pagename.slice(9)
}
if (pagename === "/" || !pagename){
    pagename = "/index.html"
}
async function post() {
    await fetch("https://zoumusictraf.qzou1222.workers.dev/view",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    page: pagename
                }
            )
        }
    )
}
post()
